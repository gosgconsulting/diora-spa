// WordPress API service
// Fetches blog posts from WordPress REST API

import aboutUsImage from '@/assets/about-us.jpg';

export interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  link: string;
  author: number;
  featured_media: number;
  categories: number[];
  slug: string;
  _embedded?: {
    author?: Array<{
      name: string;
    }>;
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
    'wp:term'?: Array<Array<{
      name: string;
    }>>;
  };
}

const WORDPRESS_API_URL = 'https://cms.dioraspa.sg/wp-json/wp/v2';

export async function getWordPressPosts(page = 1, perPage = 10): Promise<WordPressPost[]> {
  try {
    // Using _embed to get featured images, authors, and categories in a single request
    const url = `${WORDPRESS_API_URL}/posts?page=${page}&per_page=${perPage}&_embed=true`;
    console.log('WordPress API request URL:', url);
    
    // Add cache-busting parameter to avoid cached responses
    const cacheBuster = `&_=${Date.now()}`;
    const finalUrl = url + cacheBuster;
    
    const response = await fetch(finalUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store' // Prevent caching
    });
    
    console.log('WordPress API response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('WordPress API response data length:', data.length);
    console.log('First post title (if any):', data.length > 0 ? data[0].title.rendered : 'No posts');
    
    if (Array.isArray(data) && data.length > 0) {
      return data;
    } else {
      console.warn('WordPress API returned empty or invalid data');
      return [];
    }
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return [];
  }
}

export async function getWordPressPost(slug: string): Promise<WordPressPost | null> {
  try {
    const url = `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=true`;
    console.log('WordPress API request URL for slug:', url);
    
    // Add cache-busting parameter
    const cacheBuster = `&_=${Date.now()}`;
    const finalUrl = url + cacheBuster;
    
    const response = await fetch(finalUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store' // Prevent caching
    });
    
    console.log('WordPress API response status for slug:', response.status);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`);
    }
    
    const posts = await response.json();
    console.log('WordPress posts by slug received:', posts.length);
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching WordPress post by slug:', error);
    return null;
  }
}

export async function getWordPressPostById(id: number): Promise<WordPressPost | null> {
  try {
    const url = `${WORDPRESS_API_URL}/posts/${id}?_embed=true`;
    console.log('WordPress API request URL for post ID:', url);
    
    // Add cache-busting parameter
    const cacheBuster = `&_=${Date.now()}`;
    const finalUrl = url + cacheBuster;
    
    const response = await fetch(finalUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store' // Prevent caching
    });
    
    console.log('WordPress API response status for post ID:', response.status);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('WordPress post data received:', data ? 'Post found' : 'No post found');
    
    return data;
  } catch (error) {
    console.error(`Error fetching WordPress post with ID ${id}:`, error);
    return null;
  }
}

// Helper functions to extract data from WordPress post format

export function getPostImage(post: WordPressPost): string {
  // Try to get featured image from _embedded data
  if (post._embedded && 
      post._embedded['wp:featuredmedia'] && 
      post._embedded['wp:featuredmedia'][0] &&
      post._embedded['wp:featuredmedia'][0].source_url) {
    return post._embedded['wp:featuredmedia'][0].source_url;
  }
  
  // Return about-us.jpg as default image if no featured image is available
  return aboutUsImage;
}

export function getPostAuthor(post: WordPressPost): string {
  // Try to get author name from _embedded data
  if (post._embedded && 
      post._embedded.author && 
      post._embedded.author[0] &&
      post._embedded.author[0].name) {
    return post._embedded.author[0].name;
  }
  
  return 'Unknown Author';
}

export function getPostCategory(post: WordPressPost): string {
  // Try to get category from _embedded data
  if (post._embedded && 
      post._embedded['wp:term'] && 
      post._embedded['wp:term'][0] &&
      post._embedded['wp:term'][0][0] &&
      post._embedded['wp:term'][0][0].name) {
    return post._embedded['wp:term'][0][0].name;
  }
  
  return 'Uncategorized';
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Function to strip HTML tags from rendered content
export function stripHtml(html: string): string {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined' && window.DOMParser) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }
  
  // Fallback for non-browser environments
  return html.replace(/<[^>]*>/g, '');
}
