import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getWordPressPostById, WordPressPost, getPostImage, getPostAuthor, getPostCategory, formatDate } from "@/api/wordpress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Loader2 } from "lucide-react";
import "@/styles/wordpress-content.css";
// Removed unused hero image import

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        setError("Post ID is missing");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const postId = parseInt(id, 10);
        
        if (isNaN(postId)) {
          setError("Invalid post ID");
          return;
        }
        
        const postData = await getWordPressPostById(postId);
        
        if (!postData) {
          setError("Post not found");
        } else {
          setPost(postData);
          setError(null);
          
          // Set page title
          document.title = `${postData.title.rendered} | Diora Spa`;
        }
      } catch (err) {
        setError('Failed to load blog post. Please try again later.');
        console.error('Error fetching blog post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F4' }}>
      <Header />
      
      {/* Hero Banner */}
      {!loading && !error && post && (
        <section className="pt-24 pb-16" style={{ backgroundColor: '#3a2c1b' }}>
          <div className="container mx-auto px-4 text-center">
            <h1 
              className="font-dream text-6xl md:text-8xl font-medium text-white mb-4"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/90">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span className="font-garet">{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span className="font-garet">{getPostAuthor(post)}</span>
              </div>
              <span className="px-2 py-1 rounded-full text-xs font-garet" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                {getPostCategory(post)}
              </span>
            </div>
          </div>
        </section>
      )}
      
      <div className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="h-12 w-12 animate-spin" style={{ color: '#3a2c1b' }} />
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <h2 className="font-garet text-2xl mb-4" style={{ color: '#3a2c1b' }}>{error}</h2>
            <Link to="/blog">
              <Button className="font-garet" style={{ backgroundColor: '#3a2c1b', color: '#FAF8F4' }}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        ) : post ? (
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Link to="/blog">
                <Button variant="outline" className="font-garet group" style={{ borderColor: '#3a2c1b', color: '#3a2c1b' }}>
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Blog
                </Button>
              </Link>
            </div>
            
            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src={getPostImage(post)} 
                alt={post.title.rendered}
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            
            {/* Post Content */}
            <div 
              className="font-garet prose prose-lg max-w-none wp-content" 
              style={{ color: '#3a2c1b' }}
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        ) : null}
      </div>

      <Footer />
    </div>
  );
}
