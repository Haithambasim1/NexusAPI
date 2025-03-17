
const rateLimit = require('express-rate-limit');

// Create rate limiter middleware with configurable options
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many requests from this IP, please try again after 15 minutes'
  }
});

// Email validation specific rate limiter
const emailValidationLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  limit: process.env.MAX_EMAIL_CHECKS_PER_DAY || 1000,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Daily email validation limit exceeded'
  }
});

module.exports = {
  rateLimiter,
  emailValidationLimiter
};
