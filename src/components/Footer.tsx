import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3a2d1a] text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* First Row - Site Name */}
        <div className="mb-8">
          <h1 className="font-serif text-2xl font-bold text-left">Nail Queen by Michelle Tran</h1>
        </div>

        {/* Second Row - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="border border-white p-6">
            <h3 className="font-serif text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="font-sans text-white">123 Wellness Ave, Spa District</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="font-sans text-white">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="font-sans text-white">hello@nailqueen.com</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="border border-white p-6">
            <h3 className="font-serif text-xl font-semibold mb-4 text-white">Working Hours</h3>
            <div className="space-y-3 font-sans text-white">
              <div>
                <div>Monday to Friday</div>
                <div>9:00 AM - 6:00 PM</div>
              </div>
              <div>
                <div>Saturday, Sunday</div>
                <div>9:00 AM - 12:00 noon</div>
              </div>
            </div>
          </div>

          {/* Get Social */}
          <div className="border border-white p-6">
            <h3 className="font-serif text-xl font-semibold mb-4 text-white">Get Social</h3>
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
            <div className="inline-block border-2 border-white rounded-full px-6 py-3 text-white font-sans text-sm">
              Tag us in your photos!
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}