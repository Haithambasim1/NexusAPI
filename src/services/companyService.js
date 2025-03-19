/**
 * Gets company information based on domain name
 * @param {string} domain - The company domain to lookup
 * @returns {object} Company details
 */
const getCompanyInfo = (domain) => {
  // Extract domain components for more realistic company name generation
  const domainParts = domain.split('.');
  const baseName = domainParts[0].toLowerCase();

  // Company name variations based on domain
  let companyName;
  if (baseName.length <= 3) {
    // Likely an abbreviation, use uppercase
    companyName = baseName.toUpperCase();
  } else {
    // Capitalize first letter, handle common prefixes
    companyName = baseName.charAt(0).toUpperCase() + baseName.slice(1);

    // Add appropriate suffix based on domain pattern
    if (/tech|software|code|app|web|net|cloud|data|ai|cyber|fin/.test(baseName)) {
      companyName += ' Technologies';
    } else if (/shop|store|market|buy|sell|retail|commerce/.test(baseName)) {
      companyName += ' Retail';
    } else if (/food|eat|cuisine|meal|chef|kitchen|cook|dining/.test(baseName)) {
      companyName += ' Foods';
    } else if (/health|med|care|pharma|doctor|clinic|therapy/.test(baseName)) {
      companyName += ' Healthcare';
    } else if (/travel|tour|journey|trip|vacation|visit/.test(baseName)) {
      companyName += ' Travel';
    } else if (/edu|learn|teach|school|academy|training/.test(baseName)) {
      companyName += ' Education';
    } else {
      // Default suffixes based on TLD
      const tld = domainParts[domainParts.length - 1].toLowerCase();
      if (tld === 'io' || tld === 'tech' || tld === 'ai') {
        companyName += ' Inc.';
      } else if (tld === 'org' || tld === 'net') {
        companyName += ' Organization';
      } else if (tld === 'edu') {
        companyName += ' University';
      } else if (tld === 'gov') {
        companyName += ' Department';
      } else {
        const suffixes = [' Inc.', ' LLC', ' Ltd.', ' Group', ' Corporation', ' Co.'];
        companyName += suffixes[Math.floor(Math.random() * suffixes.length)];
      }
    }
  }

  // Determine industry based on domain patterns
  let industry;
  let description;
  let employeeRange;
  let foundedRange;

  if (/tech|software|code|app|web|net|cloud|data|compute|digital|cyber|ai/.test(baseName)) {
    industry = 'Technology';
    description =
      'A technology company focused on innovative software solutions and digital transformation.';
    employeeRange = [50, 5000];
    foundedRange = [1995, 2020];
  } else if (/shop|store|market|buy|sell|retail|commerce/.test(baseName)) {
    industry = 'Retail & E-Commerce';
    description =
      'A retail company offering a wide range of consumer products through online and physical channels.';
    employeeRange = [20, 2000];
    foundedRange = [1980, 2018];
  } else if (/food|eat|cuisine|meal|chef|kitchen|cook|dining/.test(baseName)) {
    industry = 'Food & Beverage';
    description =
      'A food service company providing quality dining experiences and innovative culinary solutions.';
    employeeRange = [10, 500];
    foundedRange = [1970, 2019];
  } else if (/health|med|care|pharma|doctor|clinic|therapy/.test(baseName)) {
    industry = 'Healthcare';
    description =
      'A healthcare provider focused on patient care, medical services, and health technology solutions.';
    employeeRange = [50, 10000];
    foundedRange = [1960, 2015];
  } else if (/travel|tour|journey|trip|vacation|visit/.test(baseName)) {
    industry = 'Travel & Hospitality';
    description =
      'A travel service provider offering comprehensive solutions for leisure and business travelers.';
    employeeRange = [15, 1000];
    foundedRange = [1975, 2018];
  } else if (/edu|learn|teach|school|academy|training/.test(baseName)) {
    industry = 'Education';
    description =
      'An educational institution providing learning opportunities and professional development programs.';
    employeeRange = [30, 2000];
    foundedRange = [1950, 2015];
  } else if (/finance|bank|invest|money|capital|wealth|asset|fund/.test(baseName)) {
    industry = 'Financial Services';
    description =
      'A financial services company providing investment, banking, and wealth management solutions.';
    employeeRange = [50, 5000];
    foundedRange = [1950, 2010];
  } else if (/media|news|press|blog|journal|publish/.test(baseName)) {
    industry = 'Media & Communications';
    description =
      'A media company delivering content, news, and information across multiple platforms.';
    employeeRange = [20, 1000];
    foundedRange = [1960, 2018];
  } else {
    // Default for unknown patterns
    const industries = [
      'Business Services',
      'Manufacturing',
      'Energy',
      'Real Estate',
      'Entertainment',
      'Consulting',
    ];
    industry = industries[Math.floor(Math.random() * industries.length)];
    description = `A leading company in the ${industry.toLowerCase()} sector, known for quality and innovation.`;
    employeeRange = [10, 5000];
    foundedRange = [1950, 2020];
  }

  // Generate realistic employee count
  const employeeCount =
    Math.floor(Math.random() * (employeeRange[1] - employeeRange[0])) + employeeRange[0];

  // Generate realistic founding year
  const foundedYear =
    Math.floor(Math.random() * (foundedRange[1] - foundedRange[0])) + foundedRange[0];

  // Generate location based on domain
  const tld = domainParts[domainParts.length - 1].toLowerCase();
  let location = { country: 'United States', city: 'San Francisco', state: 'CA' };

  if (tld === 'uk' || domain.includes('.co.uk')) {
    location = { country: 'United Kingdom', city: 'London', state: '' };
  } else if (tld === 'ca') {
    location = { country: 'Canada', city: 'Toronto', state: 'ON' };
  } else if (tld === 'au') {
    location = { country: 'Australia', city: 'Sydney', state: 'NSW' };
  } else if (tld === 'de') {
    location = { country: 'Germany', city: 'Berlin', state: '' };
  } else if (tld === 'fr') {
    location = { country: 'France', city: 'Paris', state: '' };
  } else if (tld === 'jp') {
    location = { country: 'Japan', city: 'Tokyo', state: '' };
  } else if (tld === 'in') {
    location = { country: 'India', city: 'Bangalore', state: 'Karnataka' };
  } else if (tld === 'br') {
    location = { country: 'Brazil', city: 'São Paulo', state: '' };
  } else {
    // US cities for .com, .org, etc.
    const usCities = [
      { city: 'New York', state: 'NY' },
      { city: 'San Francisco', state: 'CA' },
      { city: 'Seattle', state: 'WA' },
      { city: 'Austin', state: 'TX' },
      { city: 'Boston', state: 'MA' },
      { city: 'Chicago', state: 'IL' },
      { city: 'Los Angeles', state: 'CA' },
      { city: 'Miami', state: 'FL' },
      { city: 'Denver', state: 'CO' },
      { city: 'Atlanta', state: 'GA' },
    ];
    const cityChoice = usCities[Math.floor(Math.random() * usCities.length)];
    location = { country: 'United States', city: cityChoice.city, state: cityChoice.state };
  }

  return {
    domain,
    company_name: companyName,
    logo_url: `https://${domain}`,
    industry,
    description,
    founded: foundedYear,
    employees: employeeCount,
    location,
    social_media: {
      twitter: `https://twitter.com/${baseName}`,
      linkedin: `https://linkedin.com/company/${baseName}`,
      facebook: `https://facebook.com/${baseName}`,
    },
    technologies: generateTechnologies(industry),
    revenue_range: generateRevenueRange(employeeCount),
  };
};

/**
 * Generate relevant technologies based on industry
 * @param {string} industry - The company's industry
 * @returns {array} List of technologies
 */
const generateTechnologies = (industry) => {
  const commonTech = ['AWS', 'Google Cloud', 'Microsoft Office', 'Slack', 'Zoom'];

  const industryTech = {
    Technology: ['React', 'Node.js', 'Python', 'Docker', 'Kubernetes', 'TensorFlow'],
    'Retail & E-Commerce': ['Shopify', 'Magento', 'WooCommerce', 'SAP', 'Square'],
    'Food & Beverage': ['Toast POS', 'Square', 'NetSuite', 'Shopify'],
    Healthcare: ['Epic', 'Cerner', 'Meditech', 'Allscripts', 'Salesforce Health Cloud'],
    'Travel & Hospitality': ['Sabre', 'Amadeus', 'Oracle Hospitality', 'Salesforce'],
    Education: ['Canvas', 'Blackboard', 'Moodle', 'Workday', 'Salesforce'],
    'Financial Services': [
      'Bloomberg Terminal',
      'Salesforce Financial Services',
      'Quickbooks',
      'SAP',
    ],
    'Media & Communications': ['Adobe Creative Cloud', 'WordPress', 'Drupal', 'Hootsuite'],
    'Business Services': ['Salesforce', 'SAP', 'Oracle', 'Workday', 'HubSpot'],
    Manufacturing: ['SAP', 'Oracle', 'Autodesk', 'SolidWorks', 'Siemens PLM'],
    Energy: ['SAP', 'Oracle', 'Maximo', 'OSIsoft', 'AutoCAD'],
    'Real Estate': ['MLS', 'Salesforce', 'Yardi', 'CoStar', 'Buildium'],
    Entertainment: ['Adobe Creative Cloud', 'Avid', 'Unity', 'Unreal Engine'],
    Consulting: ['Salesforce', 'Microsoft Dynamics', 'SAP', 'Tableau', 'Power BI'],
  };

  // Get industry-specific technologies or use common ones
  const specificTech = industryTech[industry] || commonTech;

  // Combine common tech with industry-specific tech
  const combined = [...commonTech, ...specificTech];

  // Select random subset of technologies
  const techCount = Math.floor(Math.random() * 5) + 3; // 3-7 technologies
  const result = [];

  while (result.length < techCount && combined.length > 0) {
    const randomIndex = Math.floor(Math.random() * combined.length);
    result.push(combined.splice(randomIndex, 1)[0]);
  }

  return result;
};

/**
 * Generate realistic revenue range based on employee count
 * @param {number} employeeCount - Number of employees
 * @returns {string} Revenue range
 */
const generateRevenueRange = (employeeCount) => {
  if (employeeCount < 20) {
    return '$1M - $5M';
  } else if (employeeCount < 50) {
    return '$5M - $10M';
  } else if (employeeCount < 200) {
    return '$10M - $50M';
  } else if (employeeCount < 500) {
    return '$50M - $100M';
  } else if (employeeCount < 1000) {
    return '$100M - $500M';
  } else if (employeeCount < 5000) {
    return '$500M - $1B';
  } else {
    return '$1B+';
  }
};

module.exports = {
  getCompanyInfo,
};
