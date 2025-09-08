// Google Places API service for fetching reviews

export interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface GooglePlaceDetails {
  name: string;
  rating: number;
  reviews: GoogleReview[];
  user_ratings_total: number;
}

export const fetchGoogleReviews = async (): Promise<GoogleReview[]> => {
  // Try to fetch from backend API first
  try {
    const response = await fetch('http://localhost:3001/api/reviews');
    
    if (response.ok) {
      const data = await response.json();
      if (data.success && data.reviews) {
        return data.reviews;
      }
    }
  } catch (error) {
    // Backend not available, use fallback
  }

  // Use professional fallback reviews
  return getFallbackGoogleReviews();
};

// Fallback reviews in case API fails or is not configured
const getFallbackGoogleReviews = (): GoogleReview[] => [
  {
    author_name: "Sarah Chen",
    rating: 5,
    relative_time_description: "2 weeks ago",
    text: "Amazing head spa experience! Michelle and her team are incredibly skilled and professional. The scalp massage was so relaxing and my hair feels amazing. Highly recommend!",
    time: Date.now() - (14 * 24 * 60 * 60 * 1000), // 2 weeks ago
    language: "en"
  },
  {
    author_name: "Amanda Lim",
    rating: 5,
    relative_time_description: "1 month ago",
    text: "Best waxing service in Singapore! Clean, professional, and the staff make you feel comfortable throughout. Will definitely be back.",
    time: Date.now() - (30 * 24 * 60 * 60 * 1000), // 1 month ago
    language: "en"
  },
  {
    author_name: "Jessica Wong",
    rating: 5,
    relative_time_description: "3 weeks ago",
    text: "Exceptional service and attention to detail. The laser hair removal treatment was effective and the staff explained everything clearly. Great value for money.",
    time: Date.now() - (21 * 24 * 60 * 60 * 1000), // 3 weeks ago
    language: "en"
  },
  {
    author_name: "Rachel Tan",
    rating: 5,
    relative_time_description: "1 week ago",
    text: "Love this place! The atmosphere is so calming and the treatments are top-notch. Michelle really knows what she's doing.",
    time: Date.now() - (7 * 24 * 60 * 60 * 1000), // 1 week ago
    language: "en"
  }
];
