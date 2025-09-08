import { useState, useEffect } from 'react';
import { fetchGoogleReviews, GoogleReview } from '@/services/googleReviews';

export const useGoogleReviews = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true);
        setError(null);
        const googleReviews = await fetchGoogleReviews();
        setReviews(googleReviews);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load reviews');
        console.error('Error loading Google reviews:', err);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  return { reviews, loading, error };
};
