import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Sparkles, Heart, Shield, Leaf, Droplets, Clock, Users } from "lucide-react";
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
    },
    {
      title: "Waxing",
      description: "Professional waxing services using gentle, skin-friendly formulations",
      image: waxingImage,
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
      <section className="relative h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 text-white">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Experience Pure
              <br />
              <span className="text-accent">Serenity</span>
            </h1>
            <p className="font-sans text-xl mb-8 text-white/90 leading-relaxed">
              Discover our luxury spa treatments designed to rejuvenate your body and soul in an atmosphere of complete tranquility.
            </p>
            <Button size="lg" className="font-sans font-medium">
              Book Your Treatment
            </Button>
          </div>
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
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="font-sans text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" className="font-sans">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Why Choose Serenity Spa</h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what makes our spa experience truly exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="font-sans text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">Natural Ingredients</h2>
              <p className="font-sans text-lg text-muted-foreground mb-8">
                We carefully select premium natural ingredients known for their therapeutic properties and gentle effectiveness.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <h4 className="font-serif font-semibold text-primary mb-2">{ingredient.name}</h4>
                    <p className="font-sans text-sm text-muted-foreground">{ingredient.benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={ingredientsImage} 
                alt="Natural spa ingredients"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Our Expert Team</h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our skilled professionals dedicated to providing you with exceptional care
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-primary mb-2">{member.name}</h3>
                  <p className="font-sans text-sm text-muted-foreground mb-1">{member.role}</p>
                  <p className="font-sans text-xs text-accent">{member.experience}</p>
                </CardContent>
              </Card>
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
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">About Serenity Spa</h2>
              <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">
                For over a decade, Serenity Spa has been a sanctuary of wellness and beauty in our community. We believe that true beauty comes from within, and our treatments are designed to nurture both your physical and emotional well-being.
              </p>
              <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">
                Our commitment to excellence means using only the finest natural products and maintaining the highest standards of service. Every visit to Serenity Spa is an opportunity to escape, rejuvenate, and rediscover your inner glow.
              </p>
              <Button size="lg" className="font-sans font-medium">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Read testimonials from our valued clients who have experienced our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="font-sans text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-serif font-semibold text-primary">
                    — {testimonial.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}