import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-sans">123 Wellness Ave, Spa District</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-sans">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="font-sans">hello@serenityspa.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Hours</h3>
            <div className="space-y-2 font-sans">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-accent hover:text-primary-foreground transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-accent hover:text-primary-foreground transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-accent hover:text-primary-foreground transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <p className="font-sans text-sm mt-4 text-primary-foreground/80">
              Stay connected for the latest spa news and beauty tips.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-sans text-sm text-primary-foreground/80">
            © 2024 Serenity Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}