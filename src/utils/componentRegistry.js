// Import all your components that will be dynamically rendered
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import IngredientsSection from '../components/sections/IngredientsSection';
import TeamSection from '../components/sections/TeamSection';
import AboutSection from '../components/sections/AboutSection';
import SimpleHeroBanner from '../components/sections/SimpleHeroBanner';
import GalleryImageGrid from '../components/sections/GalleryImageGrid';
import PricingGrid from '../components/sections/PricingGrid';
import FindUsSection from '../components/sections/FindUsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactForm from '../components/sections/ContactForm';
import BlogSection from '../components/sections/BlogSection';

// Component registry maps component types to their implementations
const componentRegistry = {
  Header,
  Footer,
  HeroSection,
  ServicesSection,
  FeaturesSection,
  IngredientsSection,
  TeamSection,
  AboutSection,
  SimpleHeroBanner,
  GalleryImageGrid,
  PricingGrid,
  FindUsSection,
  TestimonialsSection,
  ContactForm,
  BlogSection,
};

export default componentRegistry;
 