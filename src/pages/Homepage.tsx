import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Sparkles, Heart, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";
import heroImage from "@/assets/hero-spa.jpg";
import hairWashImage from "@/assets/our service head spa.jpg";
import waxingImage from "@/assets/waxing.jpg";
import aboutUsImage from "@/assets/about-us.jpg";
import reviewImage from "@/assets/review.jpg";
import lashImage from "@/assets/our service lash.png";
import laserRemovalImage from "@/assets/our service laser hair removal.jpg";
import logo from "@/assets/3.png";
import whiteTruffleImg from "@/assets/ingredients/White Truffle Extract.png";
import caviarExtractImg from "@/assets/ingredients/Caviar Extract.png";
import pearlPowderImg from "@/assets/ingredients/Pearl Powder.png";
import gold24kImg from "@/assets/ingredients/24K Gold Infusio.png";
import saffronImg from "@/assets/ingredients/Saffron.png";
import camelliaOilImg from "@/assets/ingredients/Camellia Oil.png";
import seaweedComplexImg from "@/assets/ingredients/Seaweed Complex.png";
import royalJellyImg from "@/assets/ingredients/royal jelly.png";
import hinokiOilImg from "@/assets/ingredients/Japanese Hinoki Essential Oil.png";
import placentaExtractImg from "@/assets/ingredients/placenta extrac.png";
import premiumProductsImg from "@/assets/why-choose-us/Premium Products.jpg";
import caringApproachImg from "@/assets/why-choose-us/Caring Approach.jpg";
import safeHygienicImg from "@/assets/why-choose-us/Safe and Hygienic.jpg";
import krisImg from "@/assets/team-members/kris.jpg";
import roseImg from "@/assets/team-members/Rose.jpg";
import shinaImg from "@/assets/team-members/Shina.jpg";
import linaImg from "@/assets/team-members/Lina.jpg";
import meiLingImg from "@/assets/team-members/Mei ling.jpg";

export default function Homepage() {
  const services = [
    {
      title: "Head Spa",
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
      description: "Enhance your eyes with custom lash styles crafted to flatter your unique beauty. All lashes are applied by certified lash artists using premium materials and gentle adhesive.",
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
    { name: "White Truffle Extract", benefit: "Rich in fatty acids and vitamins, it deeply restores damaged hair and enhances unparalleled shine.", image: whiteTruffleImg },
    { name: "Caviar Extract", benefit: "Packed with Omega-3, proteins, and minerals; regenerates hair from within and combats scalp aging.", image: caviarExtractImg },
    { name: "Pearl Powder", benefit: "Infuses hair with minerals, purifies the scalp, and imparts a luminous, silky gloss.", image: pearlPowderImg },
    { name: "24K Gold Infusion", benefit: "Boosts circulation, delivers powerful antioxidants, and leaves hair and scalp with a radiant glow.", image: gold24kImg },
    { name: "Saffron", benefit: "Known as 'red gold,' it soothes sensitive scalps while nourishing hair with potent antioxidants.", image: saffronImg },
    { name: "Camellia Oil", benefit: "Japan’s beauty secret, rich in oleic acid; absorbs quickly to soften and smooth hair like silk.", image: camelliaOilImg },
    { name: "Premium Seaweed Complex (Kombu, Wakame)", benefit: "Provides marine minerals, restores hydration balance, and revitalizes weakened strands.", image: seaweedComplexImg },
    { name: "Royal Jelly", benefit: "A superfood for the scalp, abundant in proteins and B vitamins; strengthens and reduces breakage.", image: royalJellyImg },
    { name: "Japanese Hinoki Essential Oil", benefit: "Distilled from sacred cypress wood; deeply cleanses, purifies, and offers a calming, spa-like aroma.", image: hinokiOilImg },
    { name: "Placenta Extract (Botanical / Biotech)", benefit: "Supports cell regeneration, revitalizes follicles, and promotes denser, healthier hair growth.", image: placentaExtractImg }
  ];
  

  const teamMembers = [
    {
      name: "Kris",
      role: "Lash & Head Spa Specialist",
      description:
        "Trained in advanced lash artistry and Japanese scalp therapy, Kris delivers flawless lash designs and deeply restorative head spa treatments. Her expertise ensures every guest enjoys both beauty and true relaxation.",
      image: krisImg,
    },
    {
      name: "Rose",
      role: "Head Spa & Laser Specialist",
      description:
        "Specialized in scalp therapy and advanced laser hair removal, Rose combines technical expertise with a caring touch. She helps clients achieve both deep relaxation and long-lasting smoothness with confidence.",
      image: roseImg,
    },
    {
      name: "Shina",
      role: "Head Spa, Laser, Waxing & Massage Therapist",
      description:
        "With multi-disciplinary training in spa wellness, Shina offers everything from rejuvenating head spa rituals to precise waxing and soothing massage. Her versatility makes every treatment tailored and complete.",
      image: shinaImg,
    },
    {
      name: "Lina",
      role: "Head Spa, Laser & Waxing Therapist",
      description:
        "Lina is skilled in combining effective hair removal with scalp relaxation therapies. Detail-oriented and gentle, she ensures clients leave with both refreshed skin and a calm mind.",
      image: linaImg,
    },
    {
      name: "Mei Ling",
      role: "Spa Manager",
      description:
        "With years of hands-on experience across all beauty and wellness services, Mei Ling now leads Diora Spa as Manager. Her deep expertise, professionalism, and passion for client care ensure the highest standards across every treatment.",
      image: meiLingImg,
    },
  ];

  const [activeReviewTab, setActiveReviewTab] = useState('google');
  const { reviews: googleReviewsData, loading: googleLoading } = useGoogleReviews();
  const [api, setApi] = useState<CarouselApi>();
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

  // Transform Google API reviews to match our component structure
  const googleReviews = googleReviewsData.map(review => ({
    text: review.text,
    author: review.author_name,
    rating: review.rating,
    source: "Google",
    time: review.relative_time_description
  }));

  const tripadvisorReviews = [
    {
      text: "Hidden gem in Far East Plaza! The head spa treatment was incredibly relaxing and rejuvenating. Staff are friendly and professional. Definitely worth a visit!",
      author: "TravelLover_SG",
      rating: 5,
      source: "TripAdvisor"
    },
    {
      text: "Excellent spa experience! Clean facilities, skilled therapists, and great value. The scalp massage was the highlight of my Singapore trip.",
      author: "WellnessSeeker",
      rating: 5,
      source: "TripAdvisor"
    },
    {
      text: "Professional and hygienic spa services. Michelle and her team provide personalized care and attention. Highly recommend for anyone looking for quality spa treatments.",
      author: "SpaEnthusiast_2024",
      rating: 5,
      source: "TripAdvisor"
    },
    {
      text: "Amazing experience! The lash extension service was perfect and lasted for weeks. Great location and reasonable prices. Will definitely return!",
      author: "BeautyLover_Asia",
      rating: 5,
      source: "TripAdvisor"
    }
  ];

  const currentReviews = activeReviewTab === 'google' ? googleReviews : tripadvisorReviews;


  const scrollToPrevious = () => {
    if (api) {
      api.scrollPrev();
    }
  };

  const scrollToNext = () => {
    if (api) {
      api.scrollNext();
    }
  };

  const toggleReviewExpansion = (index: number) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedReviews(newExpanded);
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F4' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[900px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative text-center text-white">
          <div className="space-y-6">
            <p className="font-coco text-lg md:text-xl font-bold tracking-[0.35em] uppercase">WELCOME TO</p>
            <h1 className="font-dream text-6xl md:text-7xl lg:text-8xl font-medium text-white">Diora spa</h1>
            <p className="font-shamson text-2xl md:text-3xl lg:text-4xl text-white/90">by Michelle Tan</p>
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
                    loading="lazy"
                    decoding="async"
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
                  <Link to="/pricing">
                    <Button className="font-garet px-6 py-2 rounded-full w-fit" style={{ backgroundColor: '#3a2c1b', color: '#FAF8F4' }}>Explore More</Button>
                  </Link>
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
                 premiumProductsImg,
                 caringApproachImg,
                 safeHygienicImg
               ];
               return (
                 <div key={index} className="text-center">
                   <div className="mb-6">
                     <img 
                       src={images[index]} 
                       alt={feature.title}
                       className="w-full h-48 object-cover rounded-lg shadow-lg"
                       loading="lazy"
                       decoding="async"
                     />
                   </div>
                   <h3 className="font-garet text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="font-garet text-white/90 mb-6 leading-relaxed">{feature.description}</p>
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
             {ingredients.map((ingredient, index) => (
               <div key={index} className="text-center">
                 <div className="mb-4">
                    <img 
                      src={ingredient.image}
                      alt={ingredient.name}
                      className="w-full aspect-square object-cover rounded-lg shadow-lg"
                      loading="lazy"
                      decoding="async"
                    />
                 </div>
                 <h4 className="font-garet font-semibold text-white text-sm mb-2">{ingredient.name}</h4>
                 <p className="font-garet text-xs text-white/90">{ingredient.benefit}</p>
               </div>
             ))}
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
            <Carousel
              className="w-full"
              opts={{ align: "start", containScroll: "trimSnaps", dragFree: false, loop: false, slidesToScroll: 1 }}
            >
              <CarouselContent>
                {teamMembers.map((member, index) => (
                  <CarouselItem key={index} className="md:basis-1/4">
                    <div className="p-6 text-center">
                      <div className="mb-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full aspect-square object-cover rounded-lg shadow-lg"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <h3 className="font-garet text-lg font-semibold mb-2" style={{ color: '#3a2c1b' }}>{member.name}</h3>
                      <p className="font-garet text-sm text-muted-foreground mb-2" style={{ color: '#3a2c1b' }}>{member.role}</p>
                      <p className="font-garet text-xs" style={{ color: '#3a2c1b' }}>{member.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className="-left-20 bg-[#3a2c1b] text-white hover:opacity-90 h-12 w-12 p-0"
                aria-label="Previous team members"
              />
              <CarouselNext
                className="-right-20 bg-[#3a2c1b] text-white hover:opacity-90 h-12 w-12 p-0"
                aria-label="Next team members"
              />
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
                loading="lazy"
                decoding="async"
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
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 inline-flex">
                <button
                  onClick={() => setActiveReviewTab('google')}
                  className={`px-6 py-3 rounded-full font-garet font-medium transition-all duration-300 ${
                    activeReviewTab === 'google'
                      ? 'bg-white text-[#3a2c1b] shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  Google Reviews
                </button>
                <button
                  onClick={() => setActiveReviewTab('tripadvisor')}
                  className={`px-6 py-3 rounded-full font-garet font-medium transition-all duration-300 ${
                    activeReviewTab === 'tripadvisor'
                      ? 'bg-white text-[#3a2c1b] shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  TripAdvisor Reviews
                </button>
              </div>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            <Carousel className="w-full" key={activeReviewTab} setApi={setApi} opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {currentReviews.map((review, index) => {
                  const isExpanded = expandedReviews.has(index);
                  const shouldTruncate = review.text.length > 150;
                  const displayText = isExpanded ? review.text : truncateText(review.text);
                  
                  return (
                    <CarouselItem key={index} className="md:basis-1/3">
                      <div className="p-8 text-center mx-4 h-full flex flex-col">
                        <div className="flex justify-center mb-6">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-white text-white" />
                          ))}
                        </div>
                        <div className="flex-grow mb-6">
                          <p className="font-garet text-white italic">
                            "{displayText}"
                          </p>
                          {shouldTruncate && (
                            <button
                              onClick={() => toggleReviewExpansion(index)}
                              className="mt-2 text-white/70 hover:text-white text-sm underline transition-colors"
                            >
                              {isExpanded ? 'Read less' : 'Read more'}
                            </button>
                          )}
                        </div>
                        <div>
                          <p className="font-garet font-semibold text-white">
                            {review.author}
                          </p>
                          <p className="font-garet text-sm text-white/80">
                            {review.source}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <button
                onClick={scrollToPrevious}
                aria-label="Previous reviews"
                className="-left-20 absolute top-1/2 -translate-y-1/2 z-10 transition-all rounded-full p-3 shadow-lg bg-[#3a2c1b] text-white hover:opacity-90 cursor-pointer"
              >
                <ChevronLeft size={56} strokeWidth={3} />
              </button>
              <button
                onClick={scrollToNext}
                aria-label="Next reviews"
                className="-right-20 absolute top-1/2 -translate-y-1/2 z-10 transition-all rounded-full p-3 shadow-lg bg-[#3a2c1b] text-white hover:opacity-90 cursor-pointer"
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