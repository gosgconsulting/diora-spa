// Base URL for API requests - use environment variable
const API_BASE_URL = process.env.REACT_APP_CMS_API_URL || 'https://your-cms-api.com/api';

// API key for authentication (if required)
const API_KEY = process.env.REACT_APP_CMS_API_KEY || '';

// Helper function for API requests
const fetchWithAuth = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  // Add authentication headers if API key is available
  const headers = {
    'Content-Type': 'application/json',
    ...(API_KEY && { 'Authorization': `Bearer ${API_KEY}` }),
    ...options.headers
  };
  
  const response = await fetch(url, {
    ...options,
    headers
  });
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  
  return await response.json();
};

// Fetch page data by slug
export async function fetchPageContent(slug) {
  try {
    return await fetchWithAuth(`/pages/${slug}`);
  } catch (error) {
    console.error(`Error fetching page content for slug "${slug}":`, error);
    throw error;
  }
}

// Fetch site settings
export async function fetchSettings() {
  try {
    return await fetchWithAuth('/settings');
  } catch (error) {
    console.error('Error fetching site settings:', error);
    throw error;
  }
}

// Fetch menu items
export async function fetchMenuItems(menuLocation) {
  try {
    return await fetchWithAuth(`/menus/${menuLocation}`);
  } catch (error) {
    console.error(`Error fetching menu items for location "${menuLocation}":`, error);
    throw error;
  }
}

// Add more API functions as needed