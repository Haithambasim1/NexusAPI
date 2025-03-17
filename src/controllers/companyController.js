const companyService = require('../services/companyService');
const { formatResponse, formatError } = require('../utils/responseFormatter');

// Controller for company information
const getCompanyInfo = (req, res) => {
  const domain = req.query.domain;

  if (!domain) {
    return res.status(400).json(formatError('Domain parameter is required', 'MISSING_PARAMETER'));
  }

  // Basic domain validation
  // const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
  // if (!domainRegex.test(domain)) {
  //   return res.status(400).json(formatError('Invalid domain format', 'INVALID_PARAMETER'));
  // }

  try {
    const result = companyService.getCompanyInfo(domain);
    res.json(formatResponse(result));
  } catch (error) {
    console.error('Company info error:', error);
    res
      .status(500)
      .json(formatError('Internal server error fetching company information', 'LOOKUP_ERROR'));
  }
};

module.exports = {
  getCompanyInfo,
};
