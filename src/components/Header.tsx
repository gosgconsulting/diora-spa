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
import headerSchema from "../../schemas/diora-header-cms-schema.json";
import { useGlobalSchema } from "../hooks/useGlobalSchema"; // Use the new dedicated hook

interface MenuItem {
  id: string;
  link: string;
  label: string;
}

interface HeaderSchema {
  logo?: {
    alt: string;
    src: string;
    height: string;
  };
  menu: MenuItem[];
  showCart?: boolean;
  showSearch?: boolean;
  showAccount?: boolean;
  bookNow?: {
    whatsapp: string;
    fresha: string;
  };
}

interface ApiResponse {
  data: {
    header: HeaderSchema;
    footer: any;
  };
  meta: {
    tenant_id: string;
    timestamp: string;
  };
  success: boolean;
}

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isFindUs = location.pathname.substring(1) === 'find-us';

  // Use the dedicated global schema hook that fetches once per session
  const { schema: globalData, loading, error } = useGlobalSchema();
  
  // Extract header data from API response structure
  const headerData = globalData?.data?.header || headerSchema;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Default book now links in case they're not in schema
  const defaultBookNow = {
    whatsapp: "https://wa.me/6592246789",
    fresha: "https://www.fresha.com/a/diora-spa-by-michelle-tran-singapore-far-east-plaza-14-scotts-road-rlk1uf2n"
  };

  const bookNowLinks = headerData.bookNow || defaultBookNow;

  // Show loading state if needed
  if (loading) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div></div>
            <div className="text-white">Loading...</div>
            <Button disabled>Book Now</Button>
          </div>
        </div>
      </header>
    );
  }

  // Show error state if needed
  if (error && !headerData) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#3a2c1b]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-sm">Error loading header</div>
            <Button className="font-garet font-medium bg-[#FAF8F4] text-[#3a2c1b] hover:bg-white/90">
              Book Now
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isFindUs ? 'border-b border-white/20 bg-[#3a2c1b]' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Only show if logo data exists in schema */}
          {headerData.logo?.src && (
            <Link to="/" className="flex items-center">
              <img 
                src={headerData.logo.src} 
                alt={headerData.logo.alt || "Diora Spa Logo"}
                className={headerData.logo.height || "h-8"}
              />
            </Link>
          )}
          
          {/* Spacer for layout if no logo */}
          {!headerData.logo?.src && <div></div>}

          {/* Navigation - Load menu items from schema */}
          <nav className="hidden md:flex items-center space-x-8">
            {headerData.menu?.map((item: MenuItem) => (
              <Link 
                key={item.id}
                to={item.link} 
                className={`font-garet font-medium transition-colors ${
                  isActive(item.link) ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Book Now Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className={`font-garet font-medium transition-colors ${
                isScrolled ? 'hover:bg-white/90 bg-[#FAF8F4] text-[#3a2c1b]' : 'hover:bg-white/30 bg-white/20 text-[#FAF8F4] border border-white/30'
              }`}>
                Book Now
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[120px] w-auto">
              <DropdownMenuItem asChild>
                <a 
                  href={bookNowLinks.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center w-full font-garet font-medium"
                >
                  WhatsApp
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a 
                  href={bookNowLinks.fresha} 
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

// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";
// import { ChevronDown } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export default function Header() {
//   const location = useLocation();
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const isActive = (path: string) => location.pathname === path;
//   const isFindUsPage = location.pathname === '/find-us';

//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       isFindUsPage || isScrolled ? 'border-b border-white/20' : 'bg-transparent'
//     }`} style={{ backgroundColor: isFindUsPage || isScrolled ? '#3a2c1b' : 'transparent' }}>
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Spacer for layout */}
//           <div></div>

//           {/* Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link 
//               to="/" 
//               className={`font-garet font-medium transition-colors ${
//                 isFindUsPage || isScrolled 
//                   ? (isActive('/') ? 'text-white' : 'text-white/80 hover:text-white')
//                   : (isActive('/') ? 'text-white' : 'text-white/80 hover:text-white')
//               }`}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/pricing" 
//               className={`font-garet font-medium transition-colors ${
//                 isFindUsPage || isScrolled 
//                   ? (isActive('/pricing') ? 'text-white' : 'text-white/80 hover:text-white')
//                   : (isActive('/pricing') ? 'text-white' : 'text-white/80 hover:text-white')
//               }`}
//             >
//               Pricing
//             </Link>
//             <Link 
//               to="/gallery" 
//               className={`font-garet font-medium transition-colors ${
//                 isFindUsPage || isScrolled 
//                   ? (isActive('/gallery') ? 'text-white' : 'text-white/80 hover:text-white')
//                   : (isActive('/gallery') ? 'text-white' : 'text-white/80 hover:text-white')
//               }`}
//             >
//               Gallery
//             </Link>
//             <Link 
//               to="/blog" 
//               className={`font-garet font-medium transition-colors ${
//                 isFindUsPage || isScrolled 
//                   ? (isActive('/blog') ? 'text-white' : 'text-white/80 hover:text-white')
//                   : (isActive('/blog') ? 'text-white' : 'text-white/80 hover:text-white')
//               }`}
//             >
//               Blog
//             </Link>
//             <Link 
//               to="/find-us" 
//               className={`font-garet font-medium transition-colors ${
//                 isFindUsPage || isScrolled 
//                   ? (isActive('/find-us') ? 'text-white' : 'text-white/80 hover:text-white')
//                   : (isActive('/find-us') ? 'text-white' : 'text-white/80 hover:text-white')
//               }`}
//             >
//               Find Us
//             </Link>
//           </nav>

//           {/* Book Now Dropdown */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button className={`font-garet font-medium transition-colors ${
//                 isFindUsPage || isScrolled ? 'hover:bg-white/90' : 'hover:bg-white/30'
//               }`} style={{ 
//                 backgroundColor: isFindUsPage || isScrolled ? '#FAF8F4' : 'rgba(250, 248, 244, 0.2)', 
//                 color: isFindUsPage || isScrolled ? '#3a2c1b' : '#FAF8F4',
//                 border: isFindUsPage || isScrolled ? 'none' : '1px solid rgba(250, 248, 244, 0.3)'
//               }}>
//                 Book Now
//                 <ChevronDown className="ml-2 h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="min-w-[120px] w-auto">
//               <DropdownMenuItem asChild>
//                 <a 
//                   href="https://wa.me/6592246789" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="flex items-center w-full font-garet font-medium"
//                 >
//                   WhatsApp
//                 </a>
//               </DropdownMenuItem>
//               <DropdownMenuItem asChild>
//                 <a 
//                   href="https://www.fresha.com/a/diora-spa-by-michelle-tran-singapore-far-east-plaza-14-scotts-road-rlk1uf2n" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="flex items-center w-full font-garet font-medium"
//                 >
//                   Fresha
//                 </a>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>

//         </div>
//       </div>
//     </header>
//   );
// }