import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#4B3022] border-b border-white/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={`text-2xl font-montserrat font-bold transition-colors ${
            isScrolled ? 'text-white' : 'text-white'
          }`}>
            Nail Queen
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-montserrat font-medium transition-colors ${
                isScrolled 
                  ? (isActive('/') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/') ? 'text-white' : 'text-white/80 hover:text-white')
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`font-montserrat font-medium transition-colors ${
                isScrolled 
                  ? (isActive('/services') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/services') ? 'text-white' : 'text-white/80 hover:text-white')
              }`}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
              className={`font-montserrat font-medium transition-colors ${
                isScrolled 
                  ? (isActive('/pricing') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/pricing') ? 'text-white' : 'text-white/80 hover:text-white')
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/find-us" 
              className={`font-montserrat font-medium transition-colors ${
                isScrolled 
                  ? (isActive('/find-us') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/find-us') ? 'text-white' : 'text-white/80 hover:text-white')
              }`}
            >
              Find Us
            </Link>
            <Link 
              to="/gallery" 
              className={`font-montserrat font-medium transition-colors ${
                isScrolled 
                  ? (isActive('/gallery') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/gallery') ? 'text-white' : 'text-white/80 hover:text-white')
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className={`font-montserrat font-medium transition-colors ${
                isScrolled 
                  ? (isActive('/about') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/about') ? 'text-white' : 'text-white/80 hover:text-white')
              }`}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className={`font-montserrat font-medium transition-colors ${
                isScrolled 
                  ? (isActive('/blog') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/blog') ? 'text-white' : 'text-white/80 hover:text-white')
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Book Now Button */}
          <Button className={`font-montserrat font-medium transition-colors ${
            isScrolled ? 'bg-white text-[#4B3022] hover:bg-white/90' : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
          }`}>
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
}