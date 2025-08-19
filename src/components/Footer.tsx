import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
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
                <span className="font-garet text-white">Far East Plaza #05-80 (228213)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="font-garet text-white">+65 92246789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="font-garet text-white">Dioraspabymichelletran@gmail.com</span>
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
              <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <div className="inline-block border-2 border-white rounded-full px-6 py-3 text-white font-garet text-sm">
              Tag us in your photos!
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}