import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { usePageContent } from '@/cms/usePageContent'
import { footerDefaults, type FooterContent } from '@/cms/content/schemas/layout'
import { FaCrown } from "react-icons/fa6";
export default function Footer() {
  const { data } = usePageContent<FooterContent>('footer', footerDefaults)
  return (
    <footer style={{ backgroundColor: '#3a2c1b' }} className="text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* First Row - Site Name */}
        <div className="mb-8">
          <h1 className="font-dream text-4xl font-bold text-left text-white">{data.siteTitle}</h1>
          <p className="font-signature text-2xl text-left text-white">{data.siteSubtitle}</p>
        </div>

        {/* Second Row - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="border border-white p-6">
            <h3 className="font-garet text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="font-garet text-white">{data.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="font-garet text-white">{data.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="font-garet text-white">{data.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="border border-white p-6">
            <h3 className="font-garet text-xl font-semibold mb-4 text-white">Working Hours</h3>
            <div className="space-y-3 font-garet text-white">
              {data.hours.map((h, idx) => (
                <div key={idx}>
                  <div>{h.label}</div>
                  <div>{h.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Get Social */}
          <div className="border border-white p-6">
            <h3 className="font-garet text-xl font-semibold mb-4 text-white">Get Social</h3>
            <div className="flex space-x-4 mb-6">
              {data.socials.map((s, idx) => (
                <a key={idx} href={s.href} className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all">
                  {s.icon === 'facebook' && <Facebook className="w-6 h-6" />}
                  {s.icon === 'twitter' && <Twitter className="w-6 h-6" />}
                  {s.icon === 'instagram' && <Instagram className="w-6 h-6" />}
                  {s.icon === 'youtube' && <Youtube className="w-6 h-6" />}
                </a>
              ))}
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