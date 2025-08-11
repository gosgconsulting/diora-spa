import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import { usePageContent } from '@/cms/usePageContent'
import { blogDefaults, type BlogContent } from '@/cms/content/schemas/blog'

export default function Blog() {
  const { data } = usePageContent<BlogContent>('blog', blogDefaults)

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F4' }}>
      <Header />
      
      {/* Page Title */}
      <section className="pt-24 pb-16" style={{ backgroundColor: '#3a2c1b' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-dream text-8xl font-medium text-white mb-4">{data.title}</h1>
          {data.intro && (
            <p className="font-garet text-xl text-white/90 max-w-2xl mx-auto">{data.intro}</p>
          )}
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {data.posts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="md:col-span-1">
                    <div className="aspect-[4/3] md:aspect-square overflow-hidden">
                      <img 
                        src={post.image.src} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                            <span className="font-garet">{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span className="font-garet">{post.author}</span>
                          </div>
                          <span className="px-2 py-1 rounded-full text-xs font-garet" style={{ backgroundColor: 'rgba(58, 44, 27, 0.1)', color: '#3a2c1b' }}>
                            {post.category}
                          </span>
                        </div>
                        
                        <h3 className="font-garet text-2xl font-bold mb-4 leading-tight" style={{ color: '#3a2c1b' }}>
                          {post.title}
                        </h3>
                        
                        <p className="font-garet mb-6 leading-relaxed" style={{ color: '#3a2c1b' }}>
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <Button variant="outline" className="self-start font-garet group" style={{ borderColor: '#3a2c1b', color: '#3a2c1b' }}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" className="font-garet font-medium" style={{ backgroundColor: '#3a2c1b', color: '#FAF8F4' }}>
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}