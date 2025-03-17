
# Professional API Services

A collection of production-ready API services built with Node.js and Express, designed to be deployed on RapidAPI.

## API Features

### 1. Email Validation API

Provides comprehensive email address verification with the following checks:

- **Syntax validation**: Ensures the email follows correct format
- **Domain existence**: Verifies that the domain actually exists
- **MX record validation**: Checks if the domain has mail exchange records
- **Disposable email detection**: Identifies temporary/disposable email addresses
- **Free provider detection**: Flags emails from common free providers
- **Role-based account detection**: Identifies generic addresses like info@domain.com
- **Typo correction**: Suggests fixes for common domain typos
- **Deliverability score**: Provides a confidence score from 0-1

### 2. Company Information API

Retrieves detailed company information based on domain name:

- Company name and logo
- Industry and description
- Location details
- Social media profiles
- Founded date and employee count

### 3. Sentiment Analysis API

Analyzes the sentiment of text content:

- Sentiment classification (positive, negative, neutral)
- Confidence score
- Detailed analysis of positive and negative words

## API Documentation

### Base URL

When deployed on RapidAPI, your base URL will be:
```
https://yourapi.p.rapidapi.com
```

### Authentication

All API calls require RapidAPI authentication headers:

```
'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY'
'X-RapidAPI-Host': 'yourapi.p.rapidapi.com'
```

### Endpoints Reference

#### Email Validation API

**GET** `/api/email/validate`

Validates an email address and provides detailed information about its validity.

**Query Parameters:**
- `email` (required): The email address to validate

**Example Request:**
```bash
curl --request GET \
     --url 'https://yourapi.p.rapidapi.com/api/email/validate?email=user@example.com' \
     --header 'X-RapidAPI-Key: YOUR_RAPIDAPI_KEY' \
     --header 'X-RapidAPI-Host: yourapi.p.rapidapi.com'
```

**Example Response:**
```json
{
  "success": true,
  "data": {
    "email": "user@example.com",
    "is_valid_format": true,
    "is_deliverable": true,
    "is_disposable": false,
    "suggestion": null,
    "mx_records": [
      { "exchange": "mx1.example.com", "priority": 10 },
      { "exchange": "mx2.example.com", "priority": 20 }
    ],
    "username": "user",
    "domain": "example.com",
    "score": 0.8,
    "checks": {
      "syntax": true,
      "domain_exists": true,
      "has_mx_records": true,
      "role_account": false,
      "disposable": false,
      "free_provider": false
    }
  }
}
```

#### Company Information API

**GET** `/api/company/info`

Retrieves detailed information about a company based on its domain name.

**Query Parameters:**
- `domain` (required): The company's domain name

**Example Request:**
```bash
curl --request GET \
     --url 'https://yourapi.p.rapidapi.com/api/company/info?domain=example.com' \
     --header 'X-RapidAPI-Key: YOUR_RAPIDAPI_KEY' \
     --header 'X-RapidAPI-Host: yourapi.p.rapidapi.com'
```

**Example Response:**
```json
{
  "success": true,
  "data": {
    "domain": "example.com",
    "company_name": "Example Inc.",
    "logo_url": "https://logo.clearbit.com/example.com",
    "industry": "Technology",
    "description": "A technology company focused on innovation.",
    "founded": 2010,
    "employees": 500,
    "location": {
      "country": "United States",
      "city": "San Francisco",
      "state": "CA"
    },
    "social_media": {
      "twitter": "https://twitter.com/example",
      "linkedin": "https://linkedin.com/company/example",
      "facebook": "https://facebook.com/example"
    }
  }
}
```

#### Sentiment Analysis API

**POST** `/api/ai/sentiment`

Analyzes the sentiment of the provided text.

**Request Body:**
```json
{
  "text": "I really love this product, it's amazing!"
}
```

**Example Request:**
```bash
curl --request POST \
     --url 'https://yourapi.p.rapidapi.com/api/ai/sentiment' \
     --header 'content-type: application/json' \
     --header 'X-RapidAPI-Key: YOUR_RAPIDAPI_KEY' \
     --header 'X-RapidAPI-Host: yourapi.p.rapidapi.com' \
     --data '{"text":"I really love this product, it is amazing!"}'
```

**Example Response:**
```json
{
  "success": true,
  "data": {
    "text": "I really love this product, it is amazing!",
    "sentiment": "positive",
    "score": 0.85,
    "confidence": 0.85,
    "details": {
      "positive_words": 2,
      "negative_words": 0,
      "total_words": 8
    }
  }
}
```

## Error Responses

All endpoints follow a standard error response format:

```json
{
  "success": false,
  "error": {
    "message": "Error message description",
    "code": "ERROR_CODE"
  }
}
```

## Rate Limiting

- Standard tier: 100 requests per 15-minute window
- Premium tier: 1000 requests per 15-minute window
- Email validation: Configurable daily limit (default: 1000 validations per day)

## Getting Started

### Local Development

1. Clone this repository
2. Install dependencies with `npm install`
3. Create a `.env` file based on `.env.example`
4. Run the server with `npm start` or `npm run dev` for development

### Deployment Steps

1. **Set up a hosting service:**
   - Deploy to Heroku, Digital Ocean, AWS, or similar cloud provider
   - Ensure your environment variables are properly configured

2. **Create a RapidAPI Provider Account:**
   - Sign up at [RapidAPI for Providers](https://rapidapi.com/provider)
   - Follow the verification process for providers

3. **Create a New API:**
   - From your RapidAPI dashboard, create a new API listing
   - Provide detailed API description, categories, and any documentation

4. **Configure your API in RapidAPI:**
   - Connect your deployed API URL as the endpoint base URL
   - Set up the API endpoints in the RapidAPI dashboard
   - Configure request parameters, response schemas, and authentication settings

5. **Set up Pricing Tiers:**
   - Create different pricing plans (e.g., Free, Basic, Pro)
   - Configure quota limits for each tier
   - Set up pricing details for paid subscriptions

6. **Test Your API:**
   - Use the RapidAPI testing console to verify all endpoints work correctly
   - Ensure rate limiting and authentication are functioning properly

7. **Publish Your API:**
   - Submit your API for review by the RapidAPI team
   - Once approved, your API will be available in the marketplace

## Monetization Strategies

1. **Freemium Model:**
   - Offer a free tier with limited requests per day
   - Charge for additional API calls or premium features

2. **Tiered Pricing:**
   - Offer different pricing plans based on volume (requests/month)
   - Include premium features in higher tiers

3. **Pay-Per-Call:**
   - Charge a small amount per API call
   - Offer volume discounts for larger customers

4. **Enterprise Plans:**
   - Create custom plans for large businesses
   - Include dedicated support, SLAs, and custom features

## Best Practices for Success

1. **Continuous Improvement:**
   - Regularly update and improve your API functionality
   - Add new features based on customer feedback

2. **Marketing Your API:**
   - Create clear, comprehensive documentation
   - Provide code examples in multiple programming languages
   - Create tutorials or blog posts showing use cases

3. **Customer Support:**
   - Respond quickly to customer inquiries
   - Address bugs and issues promptly
   - Maintain a changelog to communicate updates

4. **Monitor Performance:**
   - Track API usage metrics
   - Optimize for speed and reliability
   - Ensure high uptime for your service

## License

MIT
