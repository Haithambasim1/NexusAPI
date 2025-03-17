require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const rateLimit = require('express-rate-limit');

// Import routes
const emailRoutes = require('./src/routes/emailRoutes');
const companyRoutes = require('./src/routes/companyRoutes');
const sentimentRoutes = require('./src/routes/sentimentRoutes');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    success: false,
    error: {
      message: 'Too many requests from this IP, please try again later.',
      code: 'RATE_LIMIT_EXCEEDED',
    },
  },
});

// Apply middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(limiter); // Apply rate limiting to all routes

// Static documentation
app.use('/docs', express.static(path.join(__dirname, 'docs')));

// API Documentation route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/api-docs.html'));
});

// Mount API routes
app.use('/api/email', emailRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/ai', sentimentRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: {
      message: 'Internal server error',
      code: 'SERVER_ERROR',
    },
  });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      message: 'Endpoint not found',
      code: 'NOT_FOUND',
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Professional API Service running on port ${PORT}`);
  console.log(`Documentation available at http://localhost:${PORT}`);
  console.log(`API endpoints available at http://localhost:${PORT}/api`);
});
