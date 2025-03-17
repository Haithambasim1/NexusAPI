
/**
 * Authentication middleware for RapidAPI
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express next middleware function
 */
const authenticateRapidAPI = (req, res, next) => {
  const rapidApiKey = req.headers['x-rapidapi-key'];
  const rapidApiHost = req.headers['x-rapidapi-host'];
  
  if (process.env.NODE_ENV === 'production' && (!rapidApiKey || !rapidApiHost)) {
    return res.status(401).json({ 
      success: false,
      error: 'Unauthorized - Valid RapidAPI key required' 
    });
  }
  
  next();
};

module.exports = {
  authenticateRapidAPI
};
