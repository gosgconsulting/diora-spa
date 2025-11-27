import { useState, useEffect } from 'react';
import { fetchCMSSchema } from '../services/api';

/**
 * Custom hook to fetch CMS schema data from API with fallback to local JSON
 * @param {string} pageName - Name of the page (e.g., 'home', 'pricing', 'gallery', 'blog', 'findus')
 * @param {Function} getLocalSchema - Function that returns the local JSON schema as fallback
 * @returns {Object} { schema, loading, error }
 */
export function useCMSSchema(pageName, getLocalSchema) {
  const [schema, setSchema] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useLocal, setUseLocal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!pageName) {
        // If no page name, use local schema
        if (getLocalSchema) {
          setSchema(getLocalSchema());
          setLoading(false);
          setUseLocal(true);
        }
        return;
      }

      setLoading(true);
      setError(null);

      // Check if API is configured
      const apiUrl = import.meta.env.VITE_CMS_BASE_URL;
      
      if (!apiUrl || apiUrl === 'https://not-configured-url.com') {
        // No API configured, use local schema
        console.log(`No CMS API configured, using local schema for ${pageName}`);
        
        if (getLocalSchema) {
          setSchema(getLocalSchema());
          setUseLocal(true);
        } else {
          setError('No local schema fallback provided');
        }
        setLoading(false);
        return;
      }

      try {
        // Try to fetch from API
        const data = await fetchCMSSchema(pageName);
        setSchema(data);
        setUseLocal(false);
      } catch (err) {
        console.warn(`Failed to fetch schema from API for "${pageName}", falling back to local schema:`, err);
        
        // Fallback to local schema
        if (getLocalSchema) {
          setSchema(getLocalSchema());
          setUseLocal(true);
        } else {
          setError(`Failed to load schema: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageName, getLocalSchema]);

  return { schema, loading, error, useLocal };
}

