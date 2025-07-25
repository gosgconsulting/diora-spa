import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Sparkles, Heart, Shield, Leaf, Droplets, Clock, Users, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";
import hairWashImage from "@/assets/hair-wash.jpg";
import waxingImage from "@/assets/waxing.jpg";
import teamImage from "@/assets/team.jpg";
import ingredientsImage from "@/assets/ingredients.jpg";

export default function Homepage() {
  const services = [
    {
      title: "Hair Wash",
      description: "Luxurious hair cleansing and scalp massage with premium organic products",
      image: hairWashImage,
      price: "$25"
    },
    {
      title: "Waxing", 
      description: "Professional waxing services using gentle, skin-friendly formulations",
      image: waxingImage,
      price: "$35"
    }
  ];

  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "Premium Products",
      description: "We use only the finest organic and natural beauty products for all treatments."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Caring Approach",
      description: "Our experienced therapists provide personalized care tailored to your needs."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Safe & Hygienic",
      description: "Maintaining the highest standards of cleanliness and safety protocols."
    }
  ];

  const ingredients = [
    { name: "Lavender Oil", benefit: "Calming and relaxing properties" },
    { name: "Argan Oil", benefit: "Deep nourishment and hydration" },
    { name: "Tea Tree", benefit: "Natural antibacterial benefits" },
    { name: "Chamomile", benefit: "Soothing and anti-inflammatory" }
  ];

  const teamMembers = [
    { name: "Sarah Johnson", role: "Senior Spa Director", experience: "12 years experience" },
    { name: "Maria Rodriguez", role: "Hair Specialist", experience: "8 years experience" },
    { name: "Emily Chen", role: "Waxing Expert", experience: "6 years experience" },
    { name: "Anna Williams", role: "Wellness Therapist", experience: "10 years experience" }
  ];

  const testimonials = [
    {
      text: "Absolutely amazing experience! The hair wash was so relaxing and my hair feels incredible.",
      author: "Jennifer L.",
      rating: 5
    },
    {
      text: "Professional waxing service with minimal discomfort. The staff is so caring and skilled.",
      author: "Rachel M.",
      rating: 5
    },
    {
      text: "This spa is my sanctuary. The atmosphere is perfect and the treatments are world-class.",
      author: "Lisa K.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
            Welcome to
            <br />
            Nail queen
            <br />
            by Michelle Tran
          </h1>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience our signature treatments crafted with care and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
                    <h3 className="font-serif text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="font-sans text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white font-serif text-xl font-bold">
                    {service.price}
                  </div>
                </div>
                <Button className="font-sans px-6 py-2 rounded-full w-fit mx-auto">Explore More</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16" style={{ backgroundColor: '#4B3022' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Why Choose Serenity Spa</h2>
            <p className="font-sans text-lg text-white/90 max-w-2xl mx-auto">
              Discover what makes our spa experience truly exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img 
                    src={teamImage} 
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="font-sans text-white/90 mb-6 leading-relaxed">{feature.description}</p>
                <Button size="lg" className="font-sans font-medium bg-white text-[#4B3022] hover:bg-white/90">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16" style={{ backgroundColor: '#4B3022' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Natural Ingredients</h2>
            <p className="font-sans text-lg text-white/90 max-w-2xl mx-auto">
              We carefully select premium natural ingredients known for their therapeutic properties and gentle effectiveness.
            </p>
          </div>
          
          <div className="grid grid-cols-5 gap-4">
            {Array.from({ length: 10 }, (_, index) => {
              const ingredient = ingredients[index % ingredients.length];
              return (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    <img 
                      src={ingredientsImage} 
                      alt={ingredient.name}
                      className="w-full h-24 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <h4 className="font-serif font-semibold text-white text-sm mb-2">{ingredient.name}</h4>
                  <p className="font-sans text-xs text-white/90">{ingredient.benefit}</p>
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
            <h2 className="font-serif text-4xl font-bold" style={{ color: '#4B3022' }}>Our Expert Team</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <img 
                    src={teamImage} 
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: '#4B3022' }}>{member.name}</h3>
                <p className="font-sans text-sm text-muted-foreground mb-1">{member.role}</p>
                <p className="font-sans text-xs text-accent">{member.experience}</p>
              </div>
            ))}
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
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: '#4B3022' }}>About Serenity Spa</h2>
              <p className="font-sans text-lg mb-6 leading-relaxed" style={{ color: '#4B3022' }}>
                For over a decade, Serenity Spa has been a sanctuary of wellness and beauty in our community. We believe that true beauty comes from within, and our treatments are designed to nurture both your physical and emotional well-being.
              </p>
              <p className="font-sans text-lg leading-relaxed" style={{ color: '#4B3022' }}>
                Our commitment to excellence means using only the finest natural products and maintaining the highest standards of service. Every visit to Serenity Spa is an opportunity to escape, rejuvenate, and rediscover your inner glow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${teamImage})` }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(75, 48, 34, 0.8)' }}></div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Reviews</h2>
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
                      <p className="font-sans text-white mb-6 italic text-lg leading-relaxed">
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