import React from 'react';
import { useParams } from 'react-router-dom';
import { usePageContent } from '../hooks/usePageContent';
import DynamicPageRenderer from '../components/DynamicPageRenderer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Loader2 } from 'lucide-react';

const DynamicPage = () => {
  // Get slug from URL parameters
  const { slug } = useParams();
  
  // Use custom hook to fetch page content
  const { pageData, loading, error } = usePageContent(slug || 'home');
  
  // Handle loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4" />
            <h2 className="text-xl font-medium">Loading page...</h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Handle error state
  if (error || !pageData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-4">{error || 'The requested page could not be found.'}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Extract components from page data
  const components = pageData.layout?.components || [];
  
  // Set page metadata
  React.useEffect(() => {
    if (pageData.meta_title) {
      document.title = pageData.meta_title;
    }
    
    // Update meta description if available
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && pageData.meta_description) {
      metaDescription.setAttribute('content', pageData.meta_description);
    }
  }, [pageData]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <DynamicPageRenderer components={components} />
      </main>
      <Footer />
    </div>
  );
};

export default DynamicPage;
