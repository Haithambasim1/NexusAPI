
/**
 * Format successful API responses
 * @param {object} data - Response data
 * @returns {object} Formatted response object
 */
const formatResponse = (data) => {
  return {
    success: true,
    data
  };
};

/**
 * Format error API responses
 * @param {string} message - Error message
 * @param {number} code - Optional error code
 * @returns {object} Formatted error object
 */
const formatError = (message, code) => {
  return {
    success: false,
    error: {
      message,
      code: code || 'GENERAL_ERROR'
    }
  };
};

module.exports = {
  formatResponse,
  formatError
};
