
const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const { authenticateRapidAPI } = require('../middlewares/auth');
const { rateLimiter } = require('../middlewares/rateLimiter');

/**
 * @route GET /api/company/info
 * @desc Returns company information based on domain
 * @access Private (requires RapidAPI key)
 * @param {string} domain - The company domain to lookup
 * @returns {object} Company details including name, logo, industry, etc.
 */
router.get('/info', authenticateRapidAPI, rateLimiter, companyController.getCompanyInfo);

module.exports = router;
