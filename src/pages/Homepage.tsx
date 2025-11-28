import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import IngredientsSection from "@/components/sections/IngredientsSection";
import TeamSection from "@/components/sections/TeamSection";
import AboutSection from "@/components/sections/AboutSection";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTrustIndexReviews } from "../hooks/useTrustIndexReviews";

// Images only needed for Reviews
import reviewImage from "@/assets/review.jpg";

import cmsSchema from "../../schemas/diora-home-cms-schema.json";
import { useCMSSchema } from "../hooks/useCMSSchema";

interface Section {
  key: string;
  name: string;
  type: string;
  items: any[];
}

interface Layout {
  components: Section[];
}

interface ApiResponse {
  data: {
    layout: Layout;
  };
}

// Helper function to find section by key
const getSectionByKey = (sections: any[], key: string): Section | null => {
  if (Array.isArray(sections)) {
    return sections.find(section => section.key === key) || null;
  } else {
    // Type assertion to tell TypeScript the shape
    const response = sections as ApiResponse;
    return response.data.layout.components.find(section => section.key === key) || null;
  }
};

export default function Homepage() {
  // Fetch schema from API with fallback to local JSON
  const { schema: cmsData, loading: schemaLoading } = useCMSSchema('home', () => cmsSchema);
  
  // Use API data if available, otherwise fall back to local schema
  const schema = cmsData || cmsSchema;
  
  // Load sections from CMS schema - no image mapping needed as paths are in schema
  const heroSection = getSectionByKey(schema as any[], 'HeroSection');
  const servicesSection = getSectionByKey(schema as any[], 'servicesSection');
  const featuresSection = getSectionByKey(schema as any[], 'featuresSection');
  const ingredientsSection = getSectionByKey(schema as any[], 'ingredientsSection');
  const teamSection = getSectionByKey(schema as any[], 'teamSection');
  const aboutSection = getSectionByKey(schema as any[], 'aboutSection');

  const [activeReviewTab, setActiveReviewTab] = useState('google');
  const { reviews: trustIndexReviewsData, loading: trustIndexLoading } = useTrustIndexReviews();
  const [api, setApi] = useState<CarouselApi>();
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

  // Separate TrustIndex reviews by platform
  const googleReviews = trustIndexReviewsData.filter(review => review.source === 'Google');
  const tripadvisorReviews = trustIndexReviewsData.filter(review => review.source === 'TripAdvisor');

  const getCurrentReviews = () => {
    switch (activeReviewTab) {
      case 'google':
        return googleReviews;
      case 'tripadvisor':
        return tripadvisorReviews;
      default:
        return googleReviews;
    }
  };

  const currentReviews = getCurrentReviews();

  const scrollToPrevious = () => {
    if (api) {
      api.scrollPrev();
    }
  };

  const scrollToNext = () => {
    if (api) {
      api.scrollNext();
    }
  };

  const toggleReviewExpansion = (index: number) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedReviews(newExpanded);
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F4' }}>
      <Header />
      
      {/* Hero Section - Using HeroSection Component with CMS Schema Data */}
      <HeroSection items={heroSection?.items} />

      {/* Services Section - Using ServicesSection Component with CMS Schema Data */}
      <ServicesSection items={servicesSection?.items} />

      {/* Features Section - Using FeaturesSection Component with CMS Schema Data */}
      <FeaturesSection items={featuresSection?.items} />

      {/* Ingredients Section - Using IngredientsSection Component with CMS Schema Data */}
      <IngredientsSection items={ingredientsSection?.items} />

      {/* Team Section - Using TeamSection Component with CMS Schema Data */}
      <TeamSection items={teamSection?.items} />

      {/* About Section - Using AboutSection Component with CMS Schema Data */}
      <AboutSection items={aboutSection?.items} />

      {/* Reviews Section - Fixed with complete functionality */}
      <section className="relative py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${reviewImage})` }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(58, 44, 27, 0.8)' }}></div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dream text-5xl font-medium text-white mb-4">Reviews</h2>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 inline-flex">
                <button
                  onClick={() => setActiveReviewTab('google')}
                  className={`px-6 py-3 rounded-full font-garet font-medium transition-all duration-300 ${
                    activeReviewTab === 'google'
                      ? 'bg-white text-[#3a2c1b] shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  Google Reviews
                </button>
                <button
                  onClick={() => setActiveReviewTab('tripadvisor')}
                  className={`px-6 py-3 rounded-full font-garet font-medium transition-all duration-300 ${
                    activeReviewTab === 'tripadvisor'
                      ? 'bg-white text-[#3a2c1b] shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  TripAdvisor Reviews
                </button>
              </div>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            {activeReviewTab === 'tripadvisor' && tripadvisorReviews.length === 0 ? (
              <div className="p-8 text-center mx-4 flex flex-col items-center justify-center min-h-[300px]">
                <p className="font-garet text-white text-xl mb-6">
                  Be the first to share your experience!
                </p>
                <a 
                  href="https://www.tripadvisor.com/UserReviewEdit-g294265-d33415494-Diora_Spa_By_Michelle_Tran-Singapore.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-[#3a2c1b] rounded-full font-garet font-medium hover:bg-white/90 transition-all shadow-lg inline-flex items-center gap-2"
                >
                  <span>Write a Review</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </a>
              </div>
            ) : (
              <Carousel className="w-full" key={activeReviewTab} setApi={setApi} opts={{ align: "start", loop: true }}>
                <CarouselContent>
                  {currentReviews.map((review, index) => {
                    const isExpanded = expandedReviews.has(index);
                    const shouldTruncate = review.text.length > 150;
                    const displayText = isExpanded ? review.text : truncateText(review.text);
                    
                    return (
                      <CarouselItem key={index} className="md:basis-1/3">
                        <div className="p-8 text-center mx-4 h-full flex flex-col">
                          <div className="flex justify-center mb-6">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-6 h-6 fill-white text-white" />
                            ))}
                          </div>
                          <div className="flex-grow mb-6">
                            <p className="font-garet text-white italic">
                              "{displayText}"
                            </p>
                            {shouldTruncate && (
                              <button
                                onClick={() => toggleReviewExpansion(index)}
                                className="mt-2 text-white/70 hover:text-white text-sm underline transition-colors"
                              >
                                {isExpanded ? 'Read less' : 'Read more'}
                              </button>
                            )}
                          </div>
                          <div>
                            <p className="font-garet font-semibold text-white">
                              {review.author}
                            </p>
                            <p className="font-garet text-sm text-white/80">
                              {review.source}
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <button
                  onClick={scrollToPrevious}
                  aria-label="Previous reviews"
                  className="-left-20 absolute top-1/2 -translate-y-1/2 z-10 transition-all rounded-full p-3 shadow-lg bg-[#3a2c1b] text-white hover:opacity-90 cursor-pointer"
                >
                  <ChevronLeft size={56} strokeWidth={3} />
                </button>
                <button
                  onClick={scrollToNext}
                  aria-label="Next reviews"
                  className="-right-20 absolute top-1/2 -translate-y-1/2 z-10 transition-all rounded-full p-3 shadow-lg bg-[#3a2c1b] text-white hover:opacity-90 cursor-pointer"
                >
                  <ChevronRight size={56} strokeWidth={3} />
                </button>
              </Carousel>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}