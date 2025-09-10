import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight, Loader2, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getWordPressPosts, WordPressPost, getPostImage, getPostAuthor, getPostCategory, formatDate, stripHtml } from "@/api/wordpress";

export default function Blog() {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const postsPerPage = 6;

  // Function to fetch WordPress posts
  const fetchPosts = async (pageNum = page) => {
    try {
      setLoading(true);
      console.log('Fetching WordPress posts, page:', pageNum, 'perPage:', postsPerPage);
      const posts = await getWordPressPosts(pageNum, postsPerPage);
      console.log('WordPress posts received:', posts);
      
      if (posts.length < postsPerPage) {
        setHasMore(false);
        console.log('No more posts available');
      } else {
        setHasMore(true);
      }
      
      if (pageNum === 1) {
        console.log('Setting initial posts');
        setBlogPosts(posts);
      } else {
        console.log('Adding more posts to existing list');
        setBlogPosts(prevPosts => [...prevPosts, ...posts]);
      }
      
      setError(null);
    } catch (err) {
      setError('Failed to load blog posts. Please try again later.');
      console.error('Error fetching blog posts:', err);
    } finally {
      setLoading(false);
    }
  };

  // Refresh posts
  const refreshPosts = () => {
    setPage(1);
    fetchPosts(1);
  };

  // Fetch posts when page changes
  useEffect(() => {
    fetchPosts();
  }, [page]);

  const loadMorePosts = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F4' }}>
      <Header />
      
      {/* Page Title */}
      <section className="pt-24 pb-16" style={{ backgroundColor: '#3a2c1b' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-dream text-8xl font-medium text-white mb-4">Our Blog</h1>
          <p className="font-garet text-xl text-white/90 max-w-2xl mx-auto">
            Stay updated with the latest beauty tips, treatment insights, and wellness advice from our expert team
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="container mx-auto px-4">
          {error && (
            <div className="text-center py-8">
              <p className="text-red-500 font-garet">{error}</p>
              <Button 
                onClick={refreshPosts} 
                className="mt-4 font-garet" 
                style={{ backgroundColor: '#3a2c1b', color: '#FAF8F4' }}
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
            </div>
          )}

          {!error && (
            <div className="space-y-8">
              {blogPosts.length === 0 && !loading ? (
                <div className="text-center py-8">
                  <p className="font-garet text-lg" style={{ color: '#3a2c1b' }}>No blog posts found.</p>
                </div>
              ) : (
                blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      {/* Image */}
                      <div className="md:col-span-1">
                        <div className="aspect-[4/3] md:aspect-square overflow-hidden">
                          <img 
                            src={getPostImage(post)} 
                            alt={post.title.rendered}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="md:col-span-2">
                        <CardContent className="p-6 h-full flex flex-col justify-between">
                          <div>
                            <div className="flex items-center space-x-4 text-sm mb-3" style={{ color: '#3a2c1b' }}>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span className="font-garet">{formatDate(post.date)}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <User className="w-4 h-4" />
                                <span className="font-garet">{getPostAuthor(post)}</span>
                              </div>
                              <span className="px-2 py-1 rounded-full text-xs font-garet" style={{ backgroundColor: 'rgba(58, 44, 27, 0.1)', color: '#3a2c1b' }}>
                                {getPostCategory(post)}
                              </span>
                            </div>
                            
                            <h3 className="font-garet text-2xl font-bold mb-4 leading-tight" style={{ color: '#3a2c1b' }}>
                              {post.title.rendered}
                            </h3>
                            
                            <p className="font-garet mb-6 leading-relaxed" style={{ color: '#3a2c1b' }}>
                              {stripHtml(post.excerpt.rendered)}
                            </p>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            className="self-start font-garet group" 
                            style={{ borderColor: '#3a2c1b', color: '#3a2c1b' }}
                            onClick={() => navigate(`/blog/${post.id}`)}
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          )}
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            {loading ? (
              <Button size="lg" className="font-garet font-medium" style={{ backgroundColor: '#3a2c1b', color: '#FAF8F4' }} disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </Button>
            ) : hasMore ? (
              <Button 
                size="lg" 
                className="font-garet font-medium" 
                style={{ backgroundColor: '#3a2c1b', color: '#FAF8F4' }}
                onClick={loadMorePosts}
              >
                Load More Articles
              </Button>
            ) : blogPosts.length > 0 ? (
              <p className="font-garet text-sm mt-4" style={{ color: '#3a2c1b' }}>
                You've reached the end of our blog posts
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}