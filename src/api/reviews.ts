// Backend API endpoint for Google Reviews
// This should be implemented as a serverless function or backend service

export const REVIEWS_API_ENDPOINT = '/api/reviews';

export interface ReviewsResponse {
  success: boolean;
  reviews: Array<{
    author_name: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
    language: string;
  }>;
  error?: string;
}

export const fetchReviewsFromBackend = async (): Promise<ReviewsResponse> => {
  try {
    const response = await fetch(REVIEWS_API_ENDPOINT);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching reviews from backend:', error);
    return {
      success: false,
      reviews: [],
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};
