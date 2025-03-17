
const emailService = require('../services/emailService');
const { formatResponse, formatError } = require('../utils/responseFormatter');

// Controller for email validation
const validateEmail = async (req, res) => {
  const email = req.query.email;
  
  if (!email) {
    return res.status(400).json(formatError('Email parameter is required'));
  }
  
  try {
    const result = await emailService.validateEmail(email);
    res.json(formatResponse(result));
  } catch (error) {
    console.error('Email validation error:', error);
    res.status(500).json(formatError('Internal server error during email validation'));
  }
};

module.exports = {
  validateEmail
};
