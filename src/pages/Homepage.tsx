import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Sparkles, Heart, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import teamImage from "@/assets/team.jpg";
import ingredientsImage from "@/assets/ingredients.jpg";
import { services, features, ingredients, teamMembers, testimonials } from "@/data";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";

export default function Homepage() {

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Services Preview */}
      <ServicesSection />

      {/* Why Choose Us */}
      <FeaturesSection />

      {/* Ingredients Section */}
      <section className="py-16" style={{ backgroundColor: '#4B3022' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-6xl font-medium text-white mb-4">Our Ingredients</h2>
            <p className="font-montserrat text-lg text-white/90 max-w-2xl mx-auto">
              We carefully select premium natural ingredients known for their therapeutic properties and gentle effectiveness.
            </p>
          </div>
          
           <div className="grid grid-cols-5 gap-4">
             {Array.from({ length: 10 }, (_, index) => {
               const ingredient = ingredients[index % ingredients.length];
               const images = [
                 "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=150&h=96&fit=crop",
                 "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=150&h=96&fit=crop",
                 "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=96&fit=crop",
                 "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=150&h=96&fit=crop",
                 "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=96&fit=crop",
                 "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=150&h=96&fit=crop",
                 "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=150&h=96&fit=crop",
                 "https://images.unsplash.com/photo-1552693673-1bf958298935?w=150&h=96&fit=crop",
                 "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=150&h=96&fit=crop",
                 "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=150&h=96&fit=crop"
               ];
               return (
                 <div key={index} className="text-center">
                   <div className="mb-4">
                      <img 
                        src={images[index]} 
                        alt={ingredient.name}
                        className="w-full aspect-square object-cover rounded-lg shadow-lg"
                      />
                   </div>
                   <h4 className="font-serif font-semibold text-white text-sm mb-2">{ingredient.name}</h4>
                   <p className="font-montserrat text-xs text-white/90">{ingredient.benefit}</p>
                 </div>
               );
             })}
           </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-6xl font-medium" style={{ color: '#4B3022' }}>Meet Our Team</h2>
          </div>
          
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {teamMembers.map((member, index) => {
               const images = [
                 "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
                 "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
                 "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
                 "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=300&h=300&fit=crop"
               ];
               return (
                 <div key={index} className="text-center">
                   <div className="mb-4">
                      <img 
                        src={images[index]} 
                        alt={member.name}
                        className="w-full aspect-square object-cover rounded-lg shadow-lg"
                      />
                   </div>
                   <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: '#4B3022' }}>{member.name}</h3>
                    <p className="font-montserrat text-sm text-muted-foreground mb-1">{member.role}</p>
                    <p className="font-montserrat text-xs text-accent">{member.experience}</p>
                 </div>
               );
             })}
           </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Spa team"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="font-dream text-5xl font-medium mb-6" style={{ color: '#4B3022' }}>About Diora spa</h2>
              <p className="font-coco text-lg mb-6 leading-relaxed" style={{ color: '#4B3022' }}>
                For over a decade, Diora spa has been a sanctuary of wellness and beauty in our community. We believe that true beauty comes from within, and our treatments are designed to nurture both your physical and emotional well-being.
              </p>
              <p className="font-coco text-lg leading-relaxed" style={{ color: '#4B3022' }}>
                Our commitment to excellence means using only the finest natural products and maintaining the highest standards of service. Every visit to Diora spa is an opportunity to escape, rejuvenate, and rediscover your inner glow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative py-24">
         <div 
           className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: `url(https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&h=1080&fit=crop)` }}
         />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(75, 48, 34, 0.8)' }}></div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl font-medium text-white mb-4">Reviews</h2>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/3">
                    <div className="p-8 text-center mx-4">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-white text-white" />
                        ))}
                      </div>
                      <p className="font-montserrat text-white mb-6 italic text-lg leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <p className="font-serif font-semibold text-white text-lg">
                        — {testimonial.author}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <button className="-left-20 absolute top-1/2 -translate-y-1/2 z-10 hover:opacity-70 transition-opacity" style={{ color: '#D6C8BB' }}>
                <ChevronLeft size={48} strokeWidth={3} />
              </button>
              <button className="-right-20 absolute top-1/2 -translate-y-1/2 z-10 hover:opacity-70 transition-opacity" style={{ color: '#D6C8BB' }}>
                <ChevronRight size={48} strokeWidth={3} />
              </button>
            </Carousel>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}