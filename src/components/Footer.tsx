import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useGlobalSchema } from "../hooks/useGlobalSchema";
import footerSchema from "../../schemas/diora-footer-cms-schema.json";

import logo from "../assets/3.png";

interface FooterContactInfo {
  footerContactHeader: string;
  footerAddress: string;
  footerPhone: string;
  footerEmail: string;
}

interface FooterService {
  footerServiceHeader: string;
  footerServiceDay: string;
  footerServiceHour: string;
}

interface FooterSchema {
  logo?: {
    src: string;
    alt: string;
  };
  footerContactInfo?: FooterContactInfo[];
  footerService?: FooterService[];
  legalLinks?: Array<{
    label: string;
    url: string;
  }>;
  copyright?: string;
  description?: string;
  showCurrencySwitcher?: boolean;
  showLanguageSwitcher?: boolean;
}

interface ApiResponse {
  data: {
    footer: FooterSchema;
    header: any;
  };
  meta: {
    tenant_id: string;
    timestamp: string;
  };
  success: boolean;
}

export default function Footer() {
  // Use the same global schema hook that's already cached
  const { schema: globalData, loading, error } = useGlobalSchema();
  
  // Extract footer data from API response structure, fallback to local schema
  const apiResponse = globalData as ApiResponse;
  const footerData: FooterSchema = apiResponse?.data?.footer || footerSchema;

  // Use default values if API data is not available
  const contactInfo = footerData.footerContactInfo?.[0] || {
    footerContactHeader: "Contact Us",
    footerAddress: "14 Scotts Rd, #05-80 Far East Plaza, Singapore 228213",
    footerPhone: "+65 9224 6789",
    footerEmail: "dioraspabymichelletran@gmail.com"
  };

  const serviceInfo = footerData.footerService?.[0] || {
    footerServiceHeader: "Working Hours",
    footerServiceDay: "Monday to Sunday",
    footerServiceHour: "10:00 AM - 9:00 PM"
  };

  const legalLinks = footerData.legalLinks || [
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Terms & Conditions", url: "/terms-conditions" }
  ];

  const copyrightText = footerData.copyright || "© Diora Spa By Michelle Tran. All rights reserved.";

  // Use logo from assets if no logo in schema, or use schema logo if provided
  const logoSource = footerData.logo?.src || logo;
  const logoAlt = footerData.logo?.alt || "Diora spa by Michelle Tran";

  return (
    <footer style={{ backgroundColor: '#3a2c1b' }} className="text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* First Row - Site Name */}
        <div className="mb-8">
          <img 
            src={logoSource} 
            alt={logoAlt} 
            className="h-8 md:h-14 w-auto"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Second Row - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="border border-white p-6">
            <h3 className="font-garet text-xl font-semibold mb-4 text-white">
              {contactInfo.footerContactHeader}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="font-garet text-white">{contactInfo.footerAddress}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="font-garet text-white">{contactInfo.footerPhone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="font-garet text-white">{contactInfo.footerEmail}</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="border border-white p-6">
            <h3 className="font-garet text-xl font-semibold mb-4 text-white">
              {serviceInfo.footerServiceHeader}
            </h3>
            <div className="space-y-3 font-garet text-white">
              <div>
                <div>{serviceInfo.footerServiceDay}</div>
                <div>{serviceInfo.footerServiceHour}</div>
              </div>
            </div>
          </div>

          {/* Get Social */}
          <div className="border border-white p-6">
            <h3 className="font-garet text-xl font-semibold mb-4 text-white">Get Social</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.instagram.com/dioraspa_bymichelletran/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579251501889" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@dioraspa_bymichel" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all">
                <FaTiktok className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all opacity-50 cursor-not-allowed" title="Coming Soon">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <div className="inline-block border-2 border-white rounded-full px-6 py-3 text-white font-garet text-sm">
              Tag us in your photos!
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Privacy & Terms */}
        <div className="mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm font-garet text-white/80">
            <div className="mb-4 md:mb-0">
              <span>{copyrightText}</span>
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
// import { FaTiktok, FaTripadvisor } from "react-icons/fa";
// import { FaCrown } from "react-icons/fa6"; 
// import logo from "../assets/3.png"
// export default function Footer() {
//   return (
//     <footer style={{ backgroundColor: '#3a2c1b' }} className="text-primary-foreground">
//       <div className="container mx-auto px-4 py-12">
//         {/* First Row - Site Name */}
//         <div className="mb-8">
//           <img 
//             src={logo} 
//             alt="Diora spa by Michelle Tran" 
//             className="h-8 md:h-14 w-auto"
//             loading="lazy"
//             decoding="async"
//           />
//         </div>

//         {/* Second Row - Three Columns */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Contact Information */}
//           <div className="border border-white p-6">
//             <h3 className="font-garet text-xl font-semibold mb-4 text-white">Contact Us</h3>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3">
//                 <MapPin className="w-5 h-5 text-white" />
//                 <span className="font-garet text-white">14 Scotts Rd, #05-80 Far East Plaza, Singapore 228213</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-white" />
//                 <span className="font-garet text-white">+65 9224 6789</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-white" />
//                 <span className="font-garet text-white">dioraspabymichelletran@gmail.com</span>
//               </div>
//             </div>
//           </div>

//           {/* Working Hours */}
//           <div className="border border-white p-6">
//             <h3 className="font-garet text-xl font-semibold mb-4 text-white">Working Hours</h3>
//             <div className="space-y-3 font-garet text-white">
//               <div>
//                 <div>Monday to Sunday</div>
//                 <div>10:00 AM - 9:00 PM</div>
//               </div>
//             </div>
//           </div>

//           {/* Get Social */}
//           <div className="border border-white p-6">
//             <h3 className="font-garet text-xl font-semibold mb-4 text-white">Get Social</h3>
//             <div className="flex space-x-4 mb-6">
//               <a href="https://www.instagram.com/dioraspa_bymichelletran/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all">
//                 <Instagram className="w-6 h-6" />
//               </a>
//               <a href="https://www.facebook.com/profile.php?id=61579251501889" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all">
//                 <Facebook className="w-6 h-6" />
//               </a>
//               <a href="https://www.tiktok.com/@dioraspa_bymichel" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all">
//                 <FaTiktok className="w-6 h-6" />
//               </a>
//               <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all opacity-50 cursor-not-allowed" title="Coming Soon">
//                 <Youtube className="w-6 h-6" />
//               </a>
//             </div>
//             <div className="inline-block border-2 border-white rounded-full px-6 py-3 text-white font-garet text-sm">
//               Tag us in your photos!
//             </div>
//           </div>
//         </div>
        
//         {/* Bottom Section - Privacy & Terms */}
//         <div className="mt-8 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center text-sm font-garet text-white/80">
//             <div className="mb-4 md:mb-0">
//               <span>© Diora Spa By Michelle Tran. All rights reserved.</span>
//             </div>
//             <div className="flex space-x-6">
//               <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
//               <a href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }