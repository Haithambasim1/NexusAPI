
const express = require('express');
const router = express.Router();
const sentimentController = require('../controllers/sentimentController');
const { authenticateRapidAPI } = require('../middlewares/auth');
const { rateLimiter } = require('../middlewares/rateLimiter');

/**
 * @route POST /api/ai/sentiment
 * @desc Analyzes sentiment of the provided text
 * @access Private (requires RapidAPI key)
 * @param {string} text - The text to analyze
 * @returns {object} Sentiment analysis results
 */
router.post('/sentiment', authenticateRapidAPI, rateLimiter, sentimentController.analyzeSentiment);

module.exports = router;
