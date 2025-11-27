import { useState, useEffect } from 'react';
import { fetchGlobalSchema } from '../services/api';

// Global cache for header/footer data
let globalSchemaCache = null;
let globalSchemaPromise = null;

export function useGlobalSchema() {
  const [schema, setSchema] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGlobalData = async () => {
      // Return cached data if available
      if (globalSchemaCache) {
        setSchema(globalSchemaCache);
        setLoading(false);
        return;
      }

      // If a request is already in progress, wait for it
      if (globalSchemaPromise) {
        try {
          const data = await globalSchemaPromise;
          setSchema(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
        return;
      }

      // Check if API is configured
      const apiUrl = import.meta.env.VITE_CMS_BASE_URL;
      
      if (!apiUrl || apiUrl === 'https://example.com') {
        setError('No CMS API configured');
        setLoading(false);
        return;
      }

      // Make the API request
      setLoading(true);
      globalSchemaPromise = fetchGlobalSchema()
        .then(data => {
          globalSchemaCache = data;
          setSchema(data);
          return data;
        })
        .catch(err => {
          setError(err.message);
          throw err;
        })
        .finally(() => {
          setLoading(false);
          globalSchemaPromise = null;
        });

      await globalSchemaPromise;
    };

    fetchGlobalData();
  }, []);

  return { schema, loading, error };
}