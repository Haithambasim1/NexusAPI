require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

// Import routes
const emailRoutes = require('./src/routes/emailRoutes');
const companyRoutes = require('./src/routes/companyRoutes');
const sentimentRoutes = require('./src/routes/sentimentRoutes');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Apply middleware
app.use(helmet());
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());

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

app.get('/', (req, res) => {
  res.json({ message: 'wellcome to nexus APi' });
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

// For Vercel serverless deployment
if (process.env.NODE_ENV !== 'production') {
  // Start server in development mode
  app.listen(PORT, () => {
    console.log(`Professional API Service running on port ${PORT}`);
    console.log(`Documentation available at http://localhost:${PORT}`);
    console.log(`API endpoints available at http://localhost:${PORT}/api`);
  });
}

// Export for Vercel serverless functions
module.exports = app;
