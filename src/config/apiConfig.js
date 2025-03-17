
/**
 * API Configuration
 */
module.exports = {
  // API version
  version: '1.0.0',
  
  // Rate limiting settings
  rateLimit: {
    standard: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100 // requests per window
    },
    emailValidation: {
      windowMs: 24 * 60 * 60 * 1000, // 24 hours
      max: process.env.MAX_EMAIL_CHECKS_PER_DAY || 1000
    }
  },
  
  // DNS settings
  dns: {
    timeout: process.env.DNS_TIMEOUT_MS || 5000
  }
};
