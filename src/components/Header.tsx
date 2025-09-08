import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const isFindUsPage = location.pathname === '/find-us';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isFindUsPage || isScrolled ? 'border-b border-white/20' : 'bg-transparent'
    }`} style={{ backgroundColor: isFindUsPage || isScrolled ? '#3a2c1b' : 'transparent' }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Spacer for layout */}
          <div></div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-garet font-medium transition-colors ${
                isFindUsPage || isScrolled 
                  ? (isActive('/') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/') ? 'text-white' : 'text-white/80 hover:text-white')
              }`}
            >
              Home
            </Link>
            <Link 
              to="/pricing" 
              className={`font-garet font-medium transition-colors ${
                isFindUsPage || isScrolled 
                  ? (isActive('/pricing') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/pricing') ? 'text-white' : 'text-white/80 hover:text-white')
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/gallery" 
              className={`font-garet font-medium transition-colors ${
                isFindUsPage || isScrolled 
                  ? (isActive('/gallery') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/gallery') ? 'text-white' : 'text-white/80 hover:text-white')
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/blog" 
              className={`font-garet font-medium transition-colors ${
                isFindUsPage || isScrolled 
                  ? (isActive('/blog') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/blog') ? 'text-white' : 'text-white/80 hover:text-white')
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/find-us" 
              className={`font-garet font-medium transition-colors ${
                isFindUsPage || isScrolled 
                  ? (isActive('/find-us') ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive('/find-us') ? 'text-white' : 'text-white/80 hover:text-white')
              }`}
            >
              Find Us
            </Link>
          </nav>

          {/* Book Now Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className={`font-garet font-medium transition-colors ${
                isFindUsPage || isScrolled ? 'hover:bg-white/90' : 'hover:bg-white/30'
              }`} style={{ 
                backgroundColor: isFindUsPage || isScrolled ? '#FAF8F4' : 'rgba(250, 248, 244, 0.2)', 
                color: isFindUsPage || isScrolled ? '#3a2c1b' : '#FAF8F4',
                border: isFindUsPage || isScrolled ? 'none' : '1px solid rgba(250, 248, 244, 0.3)'
              }}>
                Book Now
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[120px] w-auto">
              <DropdownMenuItem asChild>
                <a 
                  href="https://wa.me/6592246789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center w-full font-garet font-medium"
                >
                  WhatsApp
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a 
                  href="https://www.fresha.com/a/diora-spa-by-michelle-tran-singapore-far-east-plaza-14-scotts-road-rlk1uf2n" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center w-full font-garet font-medium"
                >
                  Fresha
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>
    </header>
  );
}