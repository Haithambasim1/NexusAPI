
const dns = require('dns');
const { promisify } = require('util');
const { 
  disposableDomains, 
  freeProviders, 
  roleBasedAccounts, 
  commonTypos 
} = require('../data/emailData');

// Promisify DNS functions
const dnsLookup = promisify(dns.lookup);
const dnsResolveMx = promisify(dns.resolveMx);

// Timeout for DNS operations
const DNS_TIMEOUT_MS = process.env.DNS_TIMEOUT_MS || 5000;

/**
 * Validates an email address with comprehensive checks
 * @param {string} email - The email to validate
 * @returns {object} Validation results
 */
const validateEmail = async (email) => {
  // Basic validation checks
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidFormat = emailRegex.test(email);
  
  // Initialize result object
  const result = {
    email,
    is_valid_format: isValidFormat,
    is_deliverable: false,
    is_disposable: false,
    suggestion: null,
    mx_records: [],
    username: '',
    domain: '',
    score: 0,
    checks: {
      syntax: false,
      domain_exists: false,
      has_mx_records: false,
      role_account: false,
      disposable: false,
      free_provider: false
    }
  };
  
  if (!isValidFormat) {
    result.score = 0;
    result.checks.syntax = false;
    return result;
  }
  
  // Split email into username and domain
  const [username, domain] = email.split('@');
  result.username = username;
  result.domain = domain;
  result.checks.syntax = true;
  
  // Check for common role-based emails
  result.checks.role_account = roleBasedAccounts.some(role => 
    username.toLowerCase() === role
  );
  
  // Check for disposable email
  result.is_disposable = disposableDomains.some(disposableDomain => 
    domain.toLowerCase().includes(disposableDomain.toLowerCase())
  );
  result.checks.disposable = result.is_disposable;
  
  // Check for free email providers
  result.checks.free_provider = freeProviders.includes(domain.toLowerCase());
  
  // DNS checks with timeout - domain exists and has MX records
  try {
    // Promise race to implement timeout
    const domainLookup = await Promise.race([
      dnsLookup(domain),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('DNS lookup timeout')), DNS_TIMEOUT_MS)
      )
    ]);
    
    result.checks.domain_exists = !!domainLookup;
    
    // Check MX records with timeout
    const mxRecords = await Promise.race([
      dnsResolveMx(domain),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('MX record lookup timeout')), DNS_TIMEOUT_MS)
      )
    ]);
    
    result.checks.has_mx_records = mxRecords.length > 0;
    result.mx_records = mxRecords.map(record => ({
      exchange: record.exchange,
      priority: record.priority
    }));
    
    // If domain exists and has MX records, it's potentially deliverable
    result.is_deliverable = result.checks.domain_exists && result.checks.has_mx_records;
  } catch (error) {
    // DNS resolution failed, domain likely doesn't exist
    result.checks.domain_exists = false;
    result.checks.has_mx_records = false;
    result.is_deliverable = false;
  }
  
  // Calculate score based on various factors
  let score = 0;
  if (result.checks.syntax) score += 0.2;
  if (result.checks.domain_exists) score += 0.2;
  if (result.checks.has_mx_records) score += 0.2;
  if (!result.checks.role_account) score += 0.1;
  if (!result.checks.disposable) score += 0.2;
  if (!result.checks.free_provider) score += 0.1;
  
  result.score = parseFloat(Math.min(score, 1.0).toFixed(2));
  
  // Check for common typos and suggest corrections
  if (commonTypos[domain.toLowerCase()]) {
    result.suggestion = email.replace(domain, commonTypos[domain.toLowerCase()]);
  }
  
  return result;
};

module.exports = {
  validateEmail
};
