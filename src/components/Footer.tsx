import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok, FaTripadvisor } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import logo from "../assets/3.png"
export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#3a2c1b' }} className="text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* First Row - Site Name */}
        <div className="mb-8">
          <img 
            src={logo} 
            alt="Diora spa by Michelle Tran" 
            className="h-8 md:h-14 w-auto"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Second Row - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="border border-white p-6">
            <h3 className="font-garet text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="font-garet text-white">14 Scotts Rd, #05-80 Far East Plaza, Singapore 228213</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="font-garet text-white">+65 9224 6789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="font-garet text-white">example@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="border border-white p-6">
            <h3 className="font-garet text-xl font-semibold mb-4 text-white">Working Hours</h3>
            <div className="space-y-3 font-garet text-white">
              <div>
                <div>Monday to Sunday</div>
                <div>10:00 AM - 9:00 PM</div>
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
              <span>© Diora Spa By Michelle Tran. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}