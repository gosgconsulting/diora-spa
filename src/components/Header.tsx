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
          <Link to="/" className={`text-2xl font-serif font-bold transition-colors ${
            isScrolled ? 'text-white' : 'text-primary'
          }`}>
            Serenity Spa
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-sans font-medium transition-colors ${
                isScrolled 
                  ? (isActive('/') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary')
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`font-sans font-medium transition-colors ${
                isScrolled 
                  ? (isActive('/services') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/services') ? 'text-primary' : 'text-foreground hover:text-primary')
              }`}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
              className={`font-sans font-medium transition-colors ${
                isScrolled 
                  ? (isActive('/pricing') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/pricing') ? 'text-primary' : 'text-foreground hover:text-primary')
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/find-us" 
              className={`font-sans font-medium transition-colors ${
                isScrolled 
                  ? (isActive('/find-us') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/find-us') ? 'text-primary' : 'text-foreground hover:text-primary')
              }`}
            >
              Find Us
            </Link>
            <Link 
              to="/gallery" 
              className={`font-sans font-medium transition-colors ${
                isScrolled 
                  ? (isActive('/gallery') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/gallery') ? 'text-primary' : 'text-foreground hover:text-primary')
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className={`font-sans font-medium transition-colors ${
                isScrolled 
                  ? (isActive('/about') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary')
              }`}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className={`font-sans font-medium transition-colors ${
                isScrolled 
                  ? (isActive('/blog') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/blog') ? 'text-primary' : 'text-foreground hover:text-primary')
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Book Now Button */}
          <Button className="font-sans font-medium">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
}