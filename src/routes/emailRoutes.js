
const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');
const { authenticateRapidAPI } = require('../middlewares/auth');
const { rateLimiter } = require('../middlewares/rateLimiter');

/**
 * @route GET /api/email/validate
 * @desc Validates an email address and returns detailed information
 * @access Private (requires RapidAPI key)
 * @param {string} email - The email address to validate
 * @returns {object} Validation results and detailed information
 */
router.get('/validate', authenticateRapidAPI, rateLimiter, emailController.validateEmail);

module.exports = router;
