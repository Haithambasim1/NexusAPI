
# API Documentation

This directory contains detailed documentation for the API:

- [Code Examples](./CodeExamples.md) - Usage examples in various programming languages
- [Deployment Guide](./DeploymentGuide.md) - Guide for deploying to RapidAPI
- [Monetization Guide](./MonetizationGuide.md) - Strategies for monetizing your API

## Using the Documentation

The main documentation is available when running the server:

1. Start the server with `npm start` or `npm run dev`
2. Navigate to `http://localhost:3000` in your browser
3. Browse the interactive API documentation

## API Structure

The API is organized into the following components:

```
├── server.js                # Main entry point
├── src/
│   ├── config/              # Configuration files
│   ├── controllers/         # API route controllers
│   ├── data/                # Static data and constants
│   ├── middlewares/         # Express middlewares
│   ├── routes/              # API routes
│   ├── services/            # Business logic
│   ├── utils/               # Utility functions
│   └── views/               # HTML templates
└── docs/                    # Documentation files
```

For more details, see the [main README](../README.md) file.
