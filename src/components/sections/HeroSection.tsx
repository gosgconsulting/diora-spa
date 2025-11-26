import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SchemaItem {
  key: string;
  type: string;
  content?: string;
  src?: string;
  alt?: string;
  settings?: {
    layout?: "full";
  };
  items?: SchemaItem[];
  [key: string]: any;
}

interface HeroSectionProps {
  items?: SchemaItem[];
}

export default function HeroSection({ items = [] }: HeroSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Extract data from schema items
  const getItemByKey = (key: string): SchemaItem | undefined => {
    return items.find(item => item.key === key);
  };

  const slidesItem = getItemByKey('slides');
  const logoItem = getItemByKey('logo');
  const welcomeTextItem = getItemByKey('welcomeText');

  const slides = slidesItem?.items || [];
  const logo = logoItem?.src;
  const logoAlt = logoItem?.alt || "Logo";
  const welcomeText = welcomeTextItem?.content || "Welcome to";

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, [api]);

  const handlePrevious = () => {
    api?.scrollPrev();
  };

  const handleNext = () => {
    api?.scrollNext();
  };

  // If no slides provided, render minimal hero
  if (!slides || slides.length === 0) {
    return (
      <section
        className="relative h-screen md:h-[900px] flex items-center justify-center"
        style={{ backgroundColor: "#FAF8F4" }}
      >
        <div className="relative text-center text-white -mt-16">
          <div className="space-y-4">
            {welcomeText && (
              <p className="font-coco text-lg md:text-xl font-bold tracking-[0.55em] uppercase">
                {welcomeText}
              </p>
            )}
            {logo && (
              <img
                src={logo}
                alt={logoAlt}
                className="h-24 md:h-32 lg:h-40 w-auto mx-auto"
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
        </div>
      </section>
    );
  }

  // Carousel-based hero with multiple slides
  return (
    <section className="relative h-screen md:h-[900px] flex items-center justify-center overflow-hidden">
      <Carousel
        className="w-full h-full"
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full" style={{height: "100vh"}}>
              <div
                className="relative h-full w-full bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: `url(${slide.src})`,
                }}
              >
                {/* Optional overlay for text visibility */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Content overlay */}
                <div className="relative text-center text-white z-10">
                  <div className="space-y-4">
                    {welcomeText && (
                      <p className="font-coco text-lg md:text-xl font-bold tracking-[0.55em] uppercase">
                        {welcomeText}
                      </p>
                    )}
                    {logo && (
                      <img
                        src={logo}
                        alt={logoAlt}
                        className="h-24 md:h-32 lg:h-40 w-auto mx-auto"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons - only show if multiple slides */}
        {slides.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              disabled={!canScrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canScrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all backdrop-blur-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </Carousel>
    </section>
  );
}
