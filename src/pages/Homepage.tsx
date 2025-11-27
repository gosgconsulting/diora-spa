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

// Helper function to find section by key
// const getSectionByKey = (sections: any[], key: string) => {

//   if ( Array.isArray(sections) ) {
//     return sections.find(section => section.key === key);
//   } else {
//     const response = sections.data.layout.components;
//     // console.log("Schema sections is not an array:", sections.data.layout.components);
//     return response.find(section => section.key === key);
//   }
// };

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

      {/* Reviews Section - Plugin Container */}
      <section className="relative py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${reviewImage})` }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(58, 44, 27, 0.8)' }}></div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dream text-5xl font-medium text-white mb-4">Reviews</h2>
          </div>
          
          {/* Reviews plugin will be rendered here */}
          <div className="max-w-6xl mx-auto relative min-h-[400px]">
            {/* Placeholder for external review plugin */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}




