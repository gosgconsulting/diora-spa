const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001; // Changed from 8080 to avoid conflicts with frontend

// Enable CORS for your frontend
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL || 'https://your-frontend-domain.com']
    : ['http://localhost:8080', 'http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());

// Google Reviews endpoint
app.get('/api/reviews', async (req, res) => {
  const GOOGLE_PLACES_API_KEY = process.env.VITE_GOOGLE_PLACES_API_KEY;
  const PLACE_ID = 'ChIJH2tluTUZ2jERK4dBbislit0';

  if (!GOOGLE_PLACES_API_KEY) {
    return res.status(500).json({
      success: false,
      error: 'Google Places API key not configured'
    });
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status === 'OK' && data.result?.reviews) {
      res.json({
        success: true,
        reviews: data.result.reviews
      });
    } else {
      res.status(400).json({
        success: false,
        error: `Google API error: ${data.status} - ${data.error_message || 'No reviews found'}`
      });
    }
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Reviews API server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Google API Key configured: ${process.env.GOOGLE_PLACES_API_KEY ? 'Yes' : 'No'}`);
});
