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

// Helper function to find section by key
const getSectionByKey = (sections: any[], key: string) => {
  return sections.find(section => section.key === key);
};

export default function Homepage() {
  // Load sections directly from CMS schema - no image mapping needed as paths are in schema
  const heroSection = getSectionByKey(cmsSchema as any[], 'HeroSection');
  const servicesSection = getSectionByKey(cmsSchema as any[], 'servicesSection');
  const featuresSection = getSectionByKey(cmsSchema as any[], 'featuresSection');
  const ingredientsSection = getSectionByKey(cmsSchema as any[], 'ingredientsSection');
  const teamSection = getSectionByKey(cmsSchema as any[], 'teamSection');
  const aboutSection = getSectionByKey(cmsSchema as any[], 'aboutSection');

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




