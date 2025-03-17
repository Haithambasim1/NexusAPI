
// Email validation data

// Common disposable email domains
const disposableDomains = [
  'temporarymail.com', 'disposablemail.com', 'throwaway.com', 
  'mailinator.com', 'guerrillamail.com', 'yopmail.com', 
  'tempmail.com', '10minutemail.com', 'sharklasers.com',
  'trashmail.com', 'getairmail.com', 'mailnesia.com',
  'tempinbox.com', 'dispostable.com', 'mailinator.net',
  'maildrop.cc', 'spamgourmet.com', 'mintemail.com',
  'fakeinbox.com', 'emailsensei.com', 'emailondeck.com'
];

// Common free email providers
const freeProviders = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
  'aol.com', 'icloud.com', 'protonmail.com', 'zoho.com',
  'mail.ru', 'yandex.com', 'gmx.com', 'tutanota.com'
];

// Common role-based email accounts
const roleBasedAccounts = [
  'admin', 'info', 'support', 'sales', 'contact', 
  'help', 'webmaster', 'postmaster', 'hostmaster',
  'marketing', 'billing', 'service', 'noreply',
  'no-reply', 'newsletter', 'mail', 'office'
];

// Common email domain typos
const commonTypos = {
  'gmial.com': 'gmail.com',
  'gmal.com': 'gmail.com',
  'gamil.com': 'gmail.com',
  'gmail.co': 'gmail.com',
  'hotmail.co': 'hotmail.com',
  'yahoocom': 'yahoo.com',
  'yaho.com': 'yahoo.com',
  'outlok.com': 'outlook.com',
  'outloo.com': 'outlook.com',
  'hotmial.com': 'hotmail.com'
};

module.exports = {
  disposableDomains,
  freeProviders,
  roleBasedAccounts,
  commonTypos
};
