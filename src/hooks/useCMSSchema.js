// import { useState, useEffect } from 'react';
// import { fetchCMSSchema } from '../services/api';

// /**
//  * Custom hook to fetch CMS schema data from API with fallback to local JSON
//  * @param {string} pageName - Name of the page (e.g., 'home', 'pricing', 'gallery', 'blog', 'findus')
//  * @param {Function} getLocalSchema - Function that returns the local JSON schema as fallback
//  * @returns {Object} { schema, loading, error }
//  */
// export function useCMSSchema(pageName, getLocalSchema) {
//   const [schema, setSchema] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [useLocal, setUseLocal] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       // This hook is only for page-specific schemas, not global components
//       if (!pageName) {
//         console.warn('No page name provided to useCMSSchema');
//         if (getLocalSchema) {
//           setSchema(getLocalSchema());
//           setUseLocal(true);
//         }
//         setLoading(false);
//         return;
//       }

//       setLoading(true);
//       setError(null);

//       // Check if API is configured
//       const apiUrl = import.meta.env.VITE_CMS_BASE_URL;
      
//       if (!apiUrl || apiUrl === 'https://example.com') {
//         // No API configured, use local schema
//         console.log(`No CMS API configured, using local schema for ${pageName}`);
        
//         if (getLocalSchema) {
//           setSchema(getLocalSchema());
//           setUseLocal(true);
//         } else {
//           setError('No local schema fallback provided');
//         }
//         setLoading(false);
//         return;
//       }

//       try {
//         // Fetch page-specific schema (constant fetching for real-time updates)
//         const data = await fetchCMSSchema(pageName);
//         setSchema(data);
//         setUseLocal(false);

//       } catch (err) {
//         console.warn(`Failed to fetch schema from API for "${pageName}", falling back to local schema:`, err);
        
//         // Fallback to local schema
//         if (getLocalSchema) {
//           setSchema(getLocalSchema());
//           setUseLocal(true);
//         } else {
//           setError(`Failed to load schema: ${err.message}`);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [pageName, getLocalSchema]);

//   return { schema, loading, error, useLocal };
// }

import { useState, useEffect } from 'react';
import { fetchCMSSchema } from '../services/api';

// Cache for storing fetched page schemas to avoid repeated API calls
const pageSchemaCache = new Map();

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
      // This hook is only for page-specific schemas, not global components
      if (!pageName) {
        console.warn('No page name provided to useCMSSchema');
        if (getLocalSchema) {
          setSchema(getLocalSchema());
          setUseLocal(true);
        }
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      // Check cache first
      if (pageSchemaCache.has(pageName)) {
        setSchema(pageSchemaCache.get(pageName));
        setLoading(false);
        return;
      }

      // Check if API is configured
      const apiUrl = import.meta.env.VITE_CMS_BASE_URL;
      
      if (!apiUrl || apiUrl === 'https://example.com') {
        // No API configured, use local schema
        console.log(`No CMS API configured, using local schema for ${pageName}`);
        
        if (getLocalSchema) {
          const localSchema = getLocalSchema();
          setSchema(localSchema);
          pageSchemaCache.set(pageName, localSchema);
          setUseLocal(true);
        } else {
          setError('No local schema fallback provided');
        }
        setLoading(false);
        return;
      }

      try {
        // Fetch page-specific schema
        const data = await fetchCMSSchema(pageName);
        
        // Cache the successful response
        pageSchemaCache.set(pageName, data);
        setSchema(data);
        setUseLocal(false);

      } catch (err) {
        console.warn(`Failed to fetch schema from API for "${pageName}", falling back to local schema:`, err);
        
        // Fallback to local schema
        if (getLocalSchema) {
          const localSchema = getLocalSchema();
          setSchema(localSchema);
          pageSchemaCache.set(pageName, localSchema); // Cache the fallback too
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

// Export a function to clear cache if needed (for development)
export const clearPageSchemaCache = () => {
  pageSchemaCache.clear();
};