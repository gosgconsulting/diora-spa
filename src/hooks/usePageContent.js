import { useState, useEffect } from 'react';
import { fetchPageContent } from '../services/api';

// Custom hook to fetch and manage page content
export function usePageContent(slug) {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchPageContent(slug);
        setPageData(data);
      } catch (err) {
        console.error(`Error fetching page content for slug "${slug}":`, err);
        setError('Failed to load page content. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [slug]);
  
  return { pageData, loading, error };
}