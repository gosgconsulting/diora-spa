// Base URL for API requests - use environment variable (Vite uses import.meta.env)
const API_BASE_URL = import.meta.env.VITE_CMS_BASE_URL;

// API key for authentication (if required)
const API_KEY = import.meta.env.VITE_CMS_INTEGRATION_API;

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

  // console.log('Fetching page content for slug:', slug);

  try {
    // return await fetchWithAuth(`/pages/${slug}`);
    return await fetchWithAuth(`/${slug}`);
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

// Fetch CMS schema by page name (e.g., 'home', 'pricing', 'gallery', 'blog', 'findus')
export async function fetchCMSSchema(pageName) {
  try {
    // return await fetchWithAuth(`/schema/${pageName}`);
    // return await fetchWithAuth(`/${pageName}`);
    return await fetchWithAuth(`/api/v1/pages/${pageName}`);
  } catch (error) {
    console.error(`Error fetching CMS schema for page "${pageName}":`, error);
    throw error;
  }
}

// Add more API functions as needed