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
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTrustIndexReviews } from "../hooks/useTrustIndexReviews";
import heroImage from "@/assets/home.png";
import hairWashImage from "@/assets/our service head spa.jpg";
import waxingImage from "@/assets/waxing.jpg";
import aboutUsImage from "@/assets/about-us.jpg";
import reviewImage from "@/assets/review.jpg";
import lashImage from "@/assets/our service lash.png";
import laserRemovalImage from "@/assets/our service laser hair removal.jpg";
import logo from "@/assets/3.png";
import whiteTruffleImg from "@/assets/ingredients/White Truffle Extract.png";
import caviarExtractImg from "@/assets/ingredients/Caviar Extract.png";
import pearlPowderImg from "@/assets/ingredients/Pearl Powder.png";
import gold24kImg from "@/assets/ingredients/24K Gold Infusio.png";
import saffronImg from "@/assets/ingredients/Saffron.png";
import camelliaOilImg from "@/assets/ingredients/Camellia Oil.png";
import seaweedComplexImg from "@/assets/ingredients/Seaweed Complex.png";
import royalJellyImg from "@/assets/ingredients/royal jelly.png";
import hinokiOilImg from "@/assets/ingredients/Japanese Hinoki Essential Oil.png";
import placentaExtractImg from "@/assets/ingredients/placenta extrac.png";
import premiumProductsImg from "@/assets/why-choose-us/Premium Products.jpg";
import caringApproachImg from "@/assets/why-choose-us/Caring Approach.jpg";
import safeHygienicImg from "@/assets/why-choose-us/Safe and Hygienic.jpg";
import krisImg from "@/assets/team-members/kris.jpg";
import roseImg from "@/assets/team-members/Rose.jpg";
import shinaImg from "@/assets/team-members/Shina.jpg";
import linaImg from "@/assets/team-members/Lina.jpg";
import meiLingImg from "@/assets/team-members/Mei ling.jpg";
import servicesData from "../../schemas/services.json";
import featuresData from "../../schemas/features.json";
import ingredientsData from "../../schemas/ingredients.json";
import teamMembersData from "../../schemas/team-members.json";
import heroData from "../../schemas/hero.json";

// Image mapping for hero
const heroImageMap: Record<string, string> = {
  "hero-image": heroImage,
  "logo": logo,
};

// Image mapping for services
const serviceImageMap: Record<string, string> = {
  "hair-wash": hairWashImage,
  "waxing": waxingImage,
  "laser-removal": laserRemovalImage,
  "lash": lashImage,
};

// Image mapping for features
const featureImageMap: Record<string, string> = {
  "premium-products": premiumProductsImg,
  "caring-approach": caringApproachImg,
  "safe-hygienic": safeHygienicImg,
};

// Image mapping for ingredients
const ingredientImageMap: Record<string, string> = {
  "white-truffle": whiteTruffleImg,
  "caviar-extract": caviarExtractImg,
  "pearl-powder": pearlPowderImg,
  "gold-24k": gold24kImg,
  "saffron": saffronImg,
  "camellia-oil": camelliaOilImg,
  "seaweed-complex": seaweedComplexImg,
  "royal-jelly": royalJellyImg,
  "hinoki-oil": hinokiOilImg,
  "placenta-extract": placentaExtractImg,
};

// Image mapping for team members
const teamImageMap: Record<string, string> = {
  "kris": krisImg,
  "rose": roseImg,
  "shina": shinaImg,
  "lina": linaImg,
  "mei-ling": meiLingImg,
};

export default function Homepage() {
  // Load services with image mapping
  const services = servicesData.map((service: any) => ({
    ...service,
    image: serviceImageMap[service.image] || ""
  }));

  // Load features with image mapping
  const features = featuresData.map((feature: any) => ({
    ...feature,
    image: featureImageMap[feature.image] || ""
  }));

  // Load ingredients with image mapping
  const ingredients = ingredientsData.map((ingredient: any) => ({
    ...ingredient,
    image: ingredientImageMap[ingredient.image] || ""
  }));

  // Load team members with image mapping
  const teamMembers = teamMembersData.map((member: any) => ({
    ...member,
    image: teamImageMap[member.image] || ""
  }));

  // Load hero data with image mapping
  const heroConfig = heroData[0];
  const heroSlides = heroConfig.slides.map((slide: any) => ({
    ...slide,
    src: heroImageMap[slide.src] || slide.src,
  }));
  const heroLogo = heroImageMap[heroConfig.logo] || "";

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
      
      {/* Hero Section - Using HeroSection Component with Schema Data */}
      <HeroSection
        slides={heroSlides}
        logo={heroLogo}
        logoAlt={heroConfig.logoAlt}
        welcomeText={heroConfig.welcomeText}
        minHeight="h-screen md:h-[900px]"
      />

      {/* Services Section - Using ServicesSection Component */}
      <ServicesSection services={services} />

      {/* Features Section - Using FeaturesSection Component */}
      <FeaturesSection features={features} />

      {/* Ingredients Section - Using IngredientsSection Component */}
      <IngredientsSection ingredients={ingredients} />

      {/* Team Section - Using TeamSection Component */}
      <TeamSection teamMembers={teamMembers} />

      {/* About Section */}
      <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={aboutUsImage} 
                alt="Spa team"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <div>
              <h2 className="font-dream text-5xl font-medium mb-6" style={{ color: '#3a2c1b' }}>About Diora spa</h2>
              <p className="font-garet text-lg mb-6 leading-relaxed" style={{ color: '#3a2c1b' }}>
              At Diora Spa, beauty is more than appearanceâ€”itâ€™s the harmony of confidence and inner calm. As the sister brand of Nail Queen, we bring over a decade of trusted expertise into luxurious head spa rituals, facials, and holistic treatments. With premium products, skilled therapists, and a serene escape in the heart of Singapore, Diora Spa offers an experience where professionalism meets indulgence, leaving you refreshed, radiant, and renewed.
              </p>
            </div>
          </div>
        </div>
      </section>

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
