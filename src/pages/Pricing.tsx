import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hairWashImage from "@/assets/hair-wash.jpg";
import waxingImage from "@/assets/waxing.jpg";

export default function Pricing() {
  const hairServices = [
    {
      name: "Signature Hair Wash",
      description: "Deep cleansing shampoo with scalp massage and conditioning treatment",
      image: hairWashImage,
      duration: "45 min"
    },
    {
      name: "Therapeutic Hair Treatment",
      description: "Intensive nourishing treatment with premium oils and proteins",
      image: hairWashImage,
      duration: "60 min"
    },
    {
      name: "Luxury Hair Spa",
      description: "Complete hair rejuvenation package with wash, mask, and styling",
      image: hairWashImage,
      duration: "90 min"
    }
  ];

  const waxingServices = [
    {
      name: "Eyebrow Shaping",
      description: "Professional eyebrow waxing and shaping for perfect definition",
      image: waxingImage,
      duration: "20 min"
    },
    {
      name: "Full Leg Waxing",
      description: "Complete leg waxing service using gentle, skin-friendly wax",
      image: waxingImage,
      duration: "45 min"
    },
    {
      name: "Brazilian Waxing",
      description: "Professional Brazilian wax with aftercare treatment",
      image: waxingImage,
      duration: "30 min"
    },
    {
      name: "Full Body Waxing",
      description: "Comprehensive body waxing package for silky smooth skin",
      image: waxingImage,
      duration: "120 min"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Title */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-primary mb-4">Pricing</h1>
          <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of treatments and services designed to pamper and rejuvenate
          </p>
        </div>
      </section>

      {/* Hair Wash Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Hair Wash Services</h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Luxurious hair cleansing treatments using premium organic products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hairServices.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">{service.name}</h3>
                  <p className="font-sans text-muted-foreground mb-3">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-sm text-accent">Duration: {service.duration}</span>
                  </div>
                  <Button className="w-full font-sans">Enquire Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Waxing Services */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Waxing Services</h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional waxing treatments using gentle, skin-friendly formulations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waxingServices.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-primary mb-2">{service.name}</h3>
                  <p className="font-sans text-sm text-muted-foreground mb-3">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-xs text-accent">Duration: {service.duration}</span>
                  </div>
                  <Button size="sm" className="w-full font-sans">Enquire Now</Button>
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