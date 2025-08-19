import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Sparkles, Heart, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/home.png";
import hairWashImage from "@/assets/our service head spa.jpg";
import waxingImage from "@/assets/waxing.jpg";
import aboutUsImage from "@/assets/about-us.jpg";
import reviewImage from "@/assets/review.jpg";
import lashImage from "@/assets/our service lash.png";
import laserRemovalImage from "@/assets/our service laser hair removal.jpg";
import logo from "@/assets/3.png";

export default function Homepage() {
  const services = [
    {
      title: "Hair Spa",
      description: "Curated rituals to deeply relax, detoxify, and revive your scalp, skin, and senses — like a holiday for your whole being.",
      image: hairWashImage,
      price: "from $25"
    },
    {
      title: "Waxing", 
      description: "Instant smoothness with professional waxing for both men and women. Removes hair from the root, leaving skin clean, soft, and refreshed.",
      image: waxingImage,
      price: "from $35"
    },
    {
      title: "Laser Hair Removal",
      description: "Advanced laser technology for long-lasting hair reduction. Safe, effective, and visibly smoother skin from the very first session.",
      image: laserRemovalImage,
      price: "from $25"
    },
    {
      title: "Eyelash Extension Menu",
      description: "nhance your eyes with custom lash styles crafted to flatter your unique beauty. All lashes are applied by certified lash artists using premium materials and gentle adhesive.",
      image: lashImage,
      price: "from $25"
    }
  ];

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" style={{ color: '#3a2c1b' }} />,
      title: "Premium Products",
      description: "We use only the finest organic and natural beauty products for all treatments."
    },
    {
      icon: <Heart className="w-8 h-8" style={{ color: '#3a2c1b' }} />,
      title: "Caring Approach",
      description: "Our experienced therapists provide personalized care tailored to your needs."
    },
    {
      icon: <Shield className="w-8 h-8" style={{ color: '#3a2c1b' }} />,
      title: "Safe & Hygienic",
      description: "Maintaining the highest standards of cleanliness and safety protocols."
    }
  ];

  const ingredients = [
    { name: "White Truffle Extract", benefit: "Rich in fatty acids and vitamins, it deeply restores damaged hair and enhances unparalleled shine." },
    { name: "Caviar Extract", benefit: "Packed with Omega-3, proteins, and minerals; regenerates hair from within and combats scalp aging." },
    { name: "Pearl Powder", benefit: "Infuses hair with minerals, purifies the scalp, and imparts a luminous, silky gloss." },
    { name: "24K Gold Infusion", benefit: "Boosts circulation, delivers powerful antioxidants, and leaves hair and scalp with a radiant glow." },
    { name: "Saffron", benefit: "Known as 'red gold,' it soothes sensitive scalps while nourishing hair with potent antioxidants." },
    { name: "Camellia Oil", benefit: "Japan’s beauty secret, rich in oleic acid; absorbs quickly to soften and smooth hair like silk." },
    { name: "Premium Seaweed Complex (Kombu, Wakame)", benefit: "Provides marine minerals, restores hydration balance, and revitalizes weakened strands." },
    { name: "Royal Jelly", benefit: "A superfood for the scalp, abundant in proteins and B vitamins; strengthens and reduces breakage." },
    { name: "Japanese Hinoki Essential Oil", benefit: "Distilled from sacred cypress wood; deeply cleanses, purifies, and offers a calming, spa-like aroma." },
    { name: "Placenta Extract (Botanical / Biotech)", benefit: "Supports cell regeneration, revitalizes follicles, and promotes denser, healthier hair growth." }
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
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F4' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative text-center text-white -mt-16">
          <div className="space-y-4">
            <p className="font-coco text-lg md:text-xl font-bold tracking-[0.55em] uppercase">Welcome to</p>
            <img 
              src={logo} 
              alt="Diora spa by Michelle Tran" 
              className="h-24 md:h-32 lg:h-40 w-auto mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dream text-4xl font-medium" style={{ color: '#3a2c1b' }}>Our Services</h2>
            <p className="font-garet text-lg text-muted-foreground mt-2 max-w-2xl mx-auto" style={{ color: '#3a2c1b' }}>
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
                    <h3 className="font-montserrat text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="font-garet text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white font-garet text-sm font-light">
                    {service.price}
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button className="font-garet px-6 py-2 rounded-full w-fit" style={{ backgroundColor: '#3a2c1b', color: '#FAF8F4' }}>Explore More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16" style={{ backgroundColor: '#3a2c1b' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dream text-5xl font-medium text-white mb-4">Why Choose Diora spa</h2>
            <p className="font-coco text-lg text-white/90 max-w-2xl mx-auto">
              Discover what makes our spa experience truly exceptional
            </p>
          </div>
          
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {features.map((feature, index) => {
               const images = [
                 "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop",
                 "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop", 
                 "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop"
               ];
               return (
                 <div key={index} className="text-center">
                   <div className="mb-6">
                     <img 
                       src={images[index]} 
                       alt={feature.title}
                       className="w-full h-48 object-cover rounded-lg shadow-lg"
                     />
                   </div>
                   <h3 className="font-garet text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="font-garet text-white/90 mb-6 leading-relaxed">{feature.description}</p>
                     <Button size="lg" className="font-garet font-medium bg-transparent text-white border border-white hover:bg-white/10">
                      Learn More
                    </Button>
                 </div>
               );
             })}
           </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16" style={{ backgroundColor: '#3a2c1b' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dream text-6xl font-medium text-white mb-4">Our Ingredients</h2>
            <p className="font-garet text-lg text-white/90 max-w-2xl mx-auto">
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
                   <h4 className="font-garet font-semibold text-white text-sm mb-2">{ingredient.name}</h4>
                   <p className="font-garet text-xs text-white/90">{ingredient.benefit}</p>
                 </div>
               );
             })}
           </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dream text-6xl font-medium mb-4" style={{ color: '#3a2c1b' }}>Meet Our Team</h2>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <Carousel className="w-full">
              <CarouselContent>
                {teamMembers.map((member, index) => {
                  const images = [
                    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=300&h=300&fit=crop",
                  ]
                  return (
                    <CarouselItem key={index} className="md:basis-1/4">
                      <div className="p-6 text-center mx-2">
                        <div className="mb-4">
                          <img
                            src={images[index]}
                            alt={member.name}
                            className="w-full aspect-square object-cover rounded-lg shadow-lg"
                          />
                        </div>
                        <h3 className="font-garet text-lg font-semibold mb-2" style={{ color: '#3a2c1b' }}>{member.name}</h3>
                        <p className="font-garet text-sm text-muted-foreground mb-1" style={{ color: '#3a2c1b' }}>{member.role}</p>
                        <p className="font-garet text-xs" style={{ color: '#3a2c1b' }}>{member.experience}</p>
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <button
                aria-label="Previous team members"
                className="-left-20 absolute top-1/2 -translate-y-1/2 z-10 transition-opacity bg-[#3a2c1b] text-white rounded-full p-3 shadow-lg hover:opacity-90"
              >
                <ChevronLeft size={26} strokeWidth={3} />
              </button>
              <button
                aria-label="Next team members"
                className="-right-20 absolute top-1/2 -translate-y-1/2 z-10 transition-opacity bg-[#3a2c1b] text-white rounded-full p-3 shadow-lg hover:opacity-90"
              >
                <ChevronRight size={26} strokeWidth={3} />
              </button>
            </Carousel>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={aboutUsImage} 
                alt="Spa team"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="font-dream text-5xl font-medium mb-6" style={{ color: '#3a2c1b' }}>About Diora spa</h2>
              <p className="font-garet text-lg mb-6 leading-relaxed" style={{ color: '#3a2c1b' }}>
              At Diora Spa, beauty is more than appearance—it’s the harmony of confidence and inner calm. As the sister brand of Nail Queen, we bring over a decade of trusted expertise into luxurious head spa rituals, facials, and holistic treatments. With premium products, skilled therapists, and a serene escape in the heart of Singapore, Diora Spa offers an experience where professionalism meets indulgence, leaving you refreshed, radiant, and renewed.
              </p>
            </div>
          </div>
        </div>
      </section>

             {/* Reviews Section */}
       <section className="relative py-24">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${reviewImage})` }}
          />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(58, 44, 27, 0.8)' }}></div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dream text-5xl font-medium text-white mb-4">Reviews</h2>
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
                      <p className="font-garet text-white mb-6 italic text-lg leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <p className="font-garet font-semibold text-white text-lg">
                        — {testimonial.author}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <button
                aria-label="Previous reviews"
                className="-left-20 absolute top-1/2 -translate-y-1/2 z-10 transition-opacity bg-[#3a2c1b] text-white rounded-full p-3 shadow-lg hover:opacity-90"
              >
                <ChevronLeft size={56} strokeWidth={3} />
              </button>
              <button
                aria-label="Next reviews"
                className="-right-20 absolute top-1/2 -translate-y-1/2 z-10 transition-opacity bg-[#3a2c1b] text-white rounded-full p-3 shadow-lg hover:opacity-90"
              >
                <ChevronRight size={56} strokeWidth={3} />
              </button>
            </Carousel>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}