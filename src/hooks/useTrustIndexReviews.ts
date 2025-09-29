import { useState, useEffect } from 'react';

interface TrustIndexReview {
  text: string;
  author: string;
  rating: number;
  source: string;
  time?: string;
}

export const useTrustIndexReviews = () => {
  const [reviews, setReviews] = useState<TrustIndexReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTrustIndexReviews = () => {
      try {
        setLoading(true);
        
        // Create invisible iframe to load TrustIndex widget
        const iframe = document.createElement('iframe');
        iframe.style.position = 'absolute';
        iframe.style.left = '-9999px';
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        iframe.style.visibility = 'hidden';
        iframe.style.border = 'none';
        
        // Create HTML content with TrustIndex script
        const iframeContent = `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { margin: 0; padding: 20px; }
              .ti-widget { opacity: 0; }
            </style>
          </head>
          <body>
            <div id="trustindex-container"></div>
            <script defer async src='https://cdn.trustindex.io/loader.js?9b268065594f038ee366b1df0d1'></script>
            <script>
              window.addEventListener('load', function() {
                setTimeout(function() {
                  // Extract reviews after widget loads
                  const reviews = [];
                  
                  // Look for TrustIndex review items
                  const reviewElements = document.querySelectorAll('.ti-review-item');
                  
                  reviewElements.forEach(function(element) {
                    try {
                      // Extract review text from .ti-review-text-container
                      const textElement = element.querySelector('.ti-review-text-container');
                      const text = textElement ? textElement.textContent.trim() : '';
                      
                      // Extract author name from .ti-name
                      const authorElement = element.querySelector('.ti-name');
                      const author = authorElement ? authorElement.textContent.trim() : '';
                      
                      // Extract date from .ti-date
                      const dateElement = element.querySelector('.ti-date');
                      const date = dateElement ? dateElement.textContent.trim() : '';
                      
                      // Count filled stars
                      const starElements = element.querySelectorAll('.ti-star.f');
                      const rating = starElements.length || 5;
                      
                      // Detect platform from class names or icons
                      let source = 'Google'; // Default to Google
                      if (element.classList.contains('source-TripAdvisor') || 
                          element.querySelector('.ti-platform-icon[alt*="TripAdvisor"]') ||
                          element.querySelector('img[src*="tripadvisor"]')) {
                        source = 'TripAdvisor';
                      } else if (element.classList.contains('source-Facebook') || 
                                 element.querySelector('.ti-platform-icon[alt*="Facebook"]')) {
                        source = 'Facebook';
                      } else if (element.classList.contains('source-Yelp') || 
                                 element.querySelector('.ti-platform-icon[alt*="Yelp"]')) {
                        source = 'Yelp';
                      }
                      
                      if (text && author) {
                        reviews.push({
                          text: text,
                          author: author,
                          rating: rating,
                          source: source,
                          time: date
                        });
                      }
                    } catch (e) {
                      console.log('Error extracting review:', e);
                    }
                  });
                  
                  console.log('Extracted reviews:', reviews);
                  
                  // Send reviews back to parent
                  window.parent.postMessage({
                    type: 'trustindex-reviews',
                    reviews: reviews
                  }, '*');
                }, 8000);
              });
            </script>
          </body>
          </html>
        `;
        
        iframe.onload = () => {
          const doc = iframe.contentDocument || iframe.contentWindow?.document;
          if (doc) {
            doc.open();
            doc.write(iframeContent);
            doc.close();
          }
        };
        
        // Listen for messages from iframe
        const messageHandler = (event: MessageEvent) => {
          if (event.data.type === 'trustindex-reviews') {
            const extractedReviews = event.data.reviews;
            
            console.log('Received reviews from iframe:', extractedReviews);
            
            if (extractedReviews.length > 0) {
              setReviews(extractedReviews);
            } else {
              setReviews(getFallbackReviews());
            }
            
            setLoading(false);
            window.removeEventListener('message', messageHandler);
            if (iframe.parentNode) {
              document.body.removeChild(iframe);
            }
          }
        };
        
        window.addEventListener('message', messageHandler);
        document.body.appendChild(iframe);
        
        // Timeout fallback
        setTimeout(() => {
          if (loading) {
            console.log('TrustIndex loading timeout, using fallback reviews');
            setReviews(getFallbackReviews());
            setLoading(false);
            window.removeEventListener('message', messageHandler);
            if (iframe.parentNode) {
              document.body.removeChild(iframe);
            }
          }
        }, 15000);
        
      } catch (err) {
        console.error('Error loading TrustIndex reviews:', err);
        setReviews(getFallbackReviews());
        setLoading(false);
      }
    };

    const getFallbackReviews = (): TrustIndexReview[] => [
      {
        text: "Did a head spa with Lina. She was soo good and attentive. Her massages and head spa is recommended. Do look for her when going there!",
        author: "Nurul afiqah",
        rating: 5,
        source: "Google",
        time: "27 September 2025"
      },
      {
        text: "Lina is very attentive and gentle in the whole experience",
        author: "boey tan",
        rating: 5,
        source: "Google",
        time: "27 September 2025"
      },
      {
        text: "Lina was amazing! Her massage technique was so relaxing and left my scalp refreshed, while my hair felt soft and nourished after the treatment. She's professional, attentive, and truly cares for her clients. Highly recommend her for a pampering hair spa experience!",
        author: "dawn t",
        rating: 5,
        source: "Google",
        time: "27 September 2025"
      },
      {
        text: "Great first time experience do a head spa with Lina at Dior Spa! She is super skilled and attentive. I had a super relaxing and comfortable time :)",
        author: "Jessica -",
        rating: 5,
        source: "Google",
        time: "26 September 2025"
      },
      {
        text: "I did a 90 mins head spa with Shinna at Diora head spa and it was relaxing! She is meticulous and gentle.",
        author: "Celine Soon",
        rating: 5,
        source: "Google",
        time: "26 September 2025"
      },
      {
        text: "Serviced by Lina — best headspa I've experienced so far!!!",
        author: "Desiree Dayna Tan",
        rating: 5,
        source: "Google",
        time: "25 September 2025"
      },
      {
        text: "Been going to Nail Queen for my manicure and pedicure and found out they recently open their head spa, so I went to try and this time I bring my husband with me. The service is really good, the ambience is 10/10. My therapist, Rose is great and skillful! Super recommended for you who want to have a very chilled day or you need a healing day! Great spa!! 10/10",
        author: "Stefani Seno",
        rating: 5,
        source: "Google",
        time: "25 September 2025"
      },
      {
        text: "Very nice service from Shina.",
        author: "Seth Tan Rongshun",
        rating: 5,
        source: "Google",
        time: "25 September 2025"
      },
      {
        text: "Shinna gave me a very relaxing head spa! Highly recommend",
        author: "Natasha Ridd",
        rating: 5,
        source: "Google",
        time: "24 September 2025"
      },
      {
        text: "Thanks Lina for great service",
        author: "will z",
        rating: 5,
        source: "Google",
        time: "24 September 2025"
      }
    ];

    loadTrustIndexReviews();
  }, []);

  return { reviews, loading, error };
};
