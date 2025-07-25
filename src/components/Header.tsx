import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold text-primary">
            Serenity Spa
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-sans font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/pricing" 
              className={`font-sans font-medium transition-colors hover:text-primary ${
                isActive('/pricing') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/gallery" 
              className={`font-sans font-medium transition-colors hover:text-primary ${
                isActive('/gallery') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/blog" 
              className={`font-sans font-medium transition-colors hover:text-primary ${
                isActive('/blog') ? 'text-primary' : 'text-foreground'
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