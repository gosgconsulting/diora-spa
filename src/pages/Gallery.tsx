import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hairWashImage from "@/assets/hair-wash.jpg";
import waxingImage from "@/assets/waxing.jpg";
import heroImage from "@/assets/hero-spa.jpg";
import teamImage from "@/assets/team.jpg";
import ingredientsImage from "@/assets/ingredients.jpg";

export default function Gallery() {
  const hairWashGallery = [
    { image: hairWashImage, alt: "Hair washing treatment" },
    { image: heroImage, alt: "Spa ambiance" },
    { image: ingredientsImage, alt: "Natural hair products" },
    { image: teamImage, alt: "Hair specialist at work" },
    { image: hairWashImage, alt: "Scalp massage therapy" },
    { image: heroImage, alt: "Relaxing hair treatment" }
  ];

  const waxingGallery = [
    { image: waxingImage, alt: "Professional waxing service" },
    { image: heroImage, alt: "Waxing treatment room" },
    { image: ingredientsImage, alt: "Waxing products" },
    { image: teamImage, alt: "Waxing specialist" },
    { image: waxingImage, alt: "Eyebrow waxing" },
    { image: heroImage, alt: "Post-treatment care" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Title */}
      <section className="pt-24 pb-16" style={{ backgroundColor: '#4B3022' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-elsie text-8xl font-medium text-white mb-4">Gallery</h1>
          <p className="font-montserrat text-xl text-white/90 max-w-2xl mx-auto">
            Take a visual journey through our serene spa environment and professional treatments
          </p>
        </div>
      </section>

      {/* Hair Wash Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-bold text-primary mb-4">Hair Washing Treatments</h2>
            <p className="font-montserrat text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience our luxurious hair cleansing and scalp massage treatments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hairWashGallery.map((item, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waxing Gallery */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-bold text-primary mb-4">Waxing Treatments</h2>
            <p className="font-montserrat text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional waxing services in our comfortable and hygienic environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waxingGallery.map((item, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}