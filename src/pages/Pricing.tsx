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
    <div className="min-h-screen" style={{ backgroundColor: '#4B3022' }}>
      <Header />
      
      {/* Page Title */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-white mb-4">Pricing</h1>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Hair Wash Services Column */}
            <div className="bg-white rounded-lg p-8">
              {/* Header with Image and Title */}
              <div className="text-center mb-12">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
                  <img 
                    src={hairWashImage} 
                    alt="Hair Wash Services"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="font-serif text-3xl font-bold text-black mb-4">Hair Wash Services</h2>
              </div>
              
              {/* Zig-zag Layout */}
              <div className="space-y-12">
                {hairServices.map((service, index) => (
                  <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold text-black mb-3">{service.name}</h3>
                      <p className="font-sans text-gray-700 mb-3">{service.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-sans text-sm text-gray-600">Duration: {service.duration}</span>
                      </div>
                      <Button className="font-sans">Enquire Now</Button>
                    </div>
                    <div className="flex-1">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg">
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Waxing Services Column */}
            <div className="bg-white rounded-lg p-8">
              {/* Header with Image and Title */}
              <div className="text-center mb-12">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
                  <img 
                    src={waxingImage} 
                    alt="Waxing Services"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="font-serif text-3xl font-bold text-black mb-4">Waxing Services</h2>
              </div>
              
              {/* Zig-zag Layout */}
              <div className="space-y-12">
                {waxingServices.map((service, index) => (
                  <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold text-black mb-3">{service.name}</h3>
                      <p className="font-sans text-gray-700 mb-3">{service.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-sans text-sm text-gray-600">Duration: {service.duration}</span>
                      </div>
                      <Button className="font-sans">Enquire Now</Button>
                    </div>
                    <div className="flex-1">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg">
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}