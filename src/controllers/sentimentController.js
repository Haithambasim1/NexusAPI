const sentimentService = require('../services/sentimentService');
const { formatResponse, formatError } = require('../utils/responseFormatter');

// Controller for sentiment analysis
const analyzeSentiment = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json(formatError('Text parameter is required', 'MISSING_PARAMETER'));
  }

  if (typeof text !== 'string') {
    return res.status(400).json(formatError('Text must be a string', 'INVALID_PARAMETER'));
  }

  if (text.length > 1000) {
    return res
      .status(400)
      .json(formatError('Text cannot be longer than 1000 characters', 'INVALID_PARAMETER'));
  }

  if (text.trim().length === 0) {
    return res.status(400).json(formatError('Text cannot be empty', 'INVALID_PARAMETER'));
  }

  try {
    const result = sentimentService.analyzeSentiment(text);
    res.json(formatResponse(result));
  } catch (error) {
    console.error('Sentiment analysis error:', error);
    res
      .status(500)
      .json(formatError('Internal server error during sentiment analysis', 'ANALYSIS_ERROR'));
  }
};

module.exports = {
  analyzeSentiment,
};
