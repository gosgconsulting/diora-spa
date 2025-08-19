import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hairWashImage from "@/assets/hair-wash.jpg";
import waxingImage from "@/assets/waxing.jpg";
import heroImage from "@/assets/hero-spa.jpg";
import teamImage from "@/assets/team.jpg";
import ingredientsImage from "@/assets/ingredients.jpg";
import headSpaImage from "@/assets/our service head spa.jpg";
import laserHairRemovalImage from "@/assets/our service laser hair removal.jpg";
import lashImage from "@/assets/our service lash.png";
import aboutUsImage from "@/assets/about-us.jpg";
import reviewImage from "@/assets/review.jpg";

export default function Gallery() {
  const hairWashGallery = [
    { image: hairWashImage, alt: "Professional hair washing treatment" },
    { image: headSpaImage, alt: "Head spa and scalp massage service" },
    { image: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHdhc2hpbmd8ZW58MHx8MHx8fDA%3D", alt: "Professional hair washing treatment" },
    { image: heroImage, alt: "Luxurious spa ambiance for hair treatments" },
    { image: "https://images.unsplash.com/photo-1634449571017-5fecfd26ad76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFpciUyMHdhc2hpbmd8ZW58MHx8MHx8fDA%3D", alt: "Expert hair specialist providing professional treatment" },
    { image: aboutUsImage, alt: "Premium hair washing facilities" }
  ];

  const waxingGallery = [
    { image: waxingImage, alt: "Professional waxing service" },
    { image: "https://plus.unsplash.com/premium_photo-1661431392914-e3fc8ff0e51a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2F4aW5nfGVufDB8fDB8fHww", alt: "Professional eyebrow waxing treatment" },
    { image: "https://plus.unsplash.com/premium_photo-1726804940914-2cd542e5d7e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdheGluZ3xlbnwwfHwwfHx8MA%3D%3D", alt: "Expert waxing specialist providing treatment" },
    { image: "https://plus.unsplash.com/premium_photo-1664375246487-a55c9946c25b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdheGluZ3xlbnwwfHwwfHx8MA%3D%3D", alt: "Precision waxing for smooth skin results" },
    { image: "https://plus.unsplash.com/premium_photo-1664187387394-2708bd7e0419?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHdheGluZ3xlbnwwfHwwfHx8MA%3D%3D", alt: "Clean and hygienic waxing environment" },
    { image: "https://plus.unsplash.com/premium_photo-1664187387097-3bc0d6275fa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHx3YXhpbmd8ZW58MHx8MHx8fDA%3D", alt: "Professional waxing tools and equipment" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F4' }}>
      <Header />
      
      {/* Page Title */}
      <section className="pt-24 pb-16" style={{ backgroundColor: '#3a2c1b' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-dream text-8xl font-medium text-white mb-4">Gallery</h1>
          <p className="font-garet text-xl text-white/90 max-w-2xl mx-auto">
            Take a visual journey through our serene spa environment and professional treatments
          </p>
        </div>
      </section>

      {/* Hair Wash Gallery */}
      <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dream text-4xl font-bold mb-4" style={{ color: '#3a2c1b' }}>Hair Washing Treatments</h2>
            <p className="font-garet text-lg max-w-2xl mx-auto" style={{ color: '#3a2c1b' }}>
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
      <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dream text-4xl font-bold mb-4" style={{ color: '#3a2c1b' }}>Waxing Treatments</h2>
            <p className="font-garet text-lg max-w-2xl mx-auto" style={{ color: '#3a2c1b' }}>
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