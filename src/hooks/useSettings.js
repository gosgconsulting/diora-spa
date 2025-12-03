import { useState, useEffect } from 'react';
import { fetchSettings } from '../services/api';

// Custom hook to fetch and manage site settings
export function useSettings() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchSettings();
        setSettings(data);
      } catch (err) {
        console.error('Error fetching site settings:', err);
        setError('Failed to load site settings.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return { settings, loading, error };
}
