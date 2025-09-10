import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function FindUs() {
  const handleOpenChat = () => {
    // This will be connected to your chat system later
    console.log("Opening chat...");
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Full Screen Map with Overlay Contact Information */}
      <section className="relative h-screen">
        {/* Google Maps - Full Screen */}
        <div className="absolute inset-0  pt-[4.5rem]">
          <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7937851068216!2d103.83101307584752!3d1.3069183617520304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1935b9656b1f%3A0xdd8a252b6e41872b!2sDiora%20Spa%20By%20Michelle%20Tran!5e0!3m2!1sen!2sth!4v1694171376653!5m2!1sen!2sth"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Diora Spa Location"
          />
        </div>

        {/* Contact Information Overlay */}
        <div className="absolute top-32 right-8 z-10 w-96 max-w-md">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {/* Find Us Title */}
            <h1 className="font-dream text-4xl font-bold mb-8 text-center" style={{ color: '#3a2c1b' }}>
              Find Us
            </h1>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <MapPin className="w-6 h-6" style={{ color: '#3a2c1b' }} />
                </div>
                <div>
                  <h3 className="font-garet font-semibold text-lg mb-2" style={{ color: '#3a2c1b' }}>
                    Address
                  </h3>
                  <p className="font-garet text-base leading-relaxed" style={{ color: '#3a2c1b' }}>
                    14 Scotts Rd, #05-80 Far East Plaza, Singapore 228213
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <Phone className="w-6 h-6" style={{ color: '#3a2c1b' }} />
                </div>
                <div>
                  <h3 className="font-garet font-semibold text-lg mb-2" style={{ color: '#3a2c1b' }}>
                    Phone
                  </h3>
                  <a 
                    href="tel:+6592246789" 
                    className="font-garet text-base hover:underline"
                    style={{ color: '#3a2c1b' }}
                  >
                    +65 9224 6789
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <Mail className="w-6 h-6" style={{ color: '#3a2c1b' }} />
                </div>
                <div>
                  <h3 className="font-garet font-semibold text-lg mb-2" style={{ color: '#3a2c1b' }}>
                    Email
                  </h3>
                  <a 
                    href="mailto:example@gmail.com" 
                    className="font-garet text-base hover:underline"
                    style={{ color: '#3a2c1b' }}
                  >
                    dioraspabymichelletran@gmail.com
                  </a>
                </div>
              </div>

              {/* Open Chat Button */}
              <div className="pt-4">
                <Button
                  onClick={handleOpenChat}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-garet font-medium py-3 px-6 rounded-full transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Open Chat</span>
                </Button>
              </div>

              {/* Social Media Icons */}
              <div className="pt-4">
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://www.instagram.com/dioraspa_bymichelletran/" 
                    className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://www.facebook.com/profile.php?id=61579251501889" 
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://www.tiktok.com/@dioraspa_bymichel" 
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                    aria-label="TikTok"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
