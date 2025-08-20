import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Gallery() {
  // Helper to load all images in a directory as URLs (vite will resolve to URLs)
  const loadImages = (glob: Record<string, { default: string }>) =>
    Object.values(glob).map((m) => m.default)

  // Import images from each service folder
  const headSpaImages = loadImages(
    import.meta.glob("/src/assets/gallery/head-spa/*.{png,jpg,jpeg,svg,webp}", { eager: true }) as Record<string, { default: string }>
  )
  const waxImages = loadImages(
    import.meta.glob("/src/assets/gallery/wax/*.{png,jpg,jpeg,svg,webp}", { eager: true }) as Record<string, { default: string }>
  )
  const laserImages = loadImages(
    import.meta.glob("/src/assets/gallery/laser/*.{png,jpg,jpeg,svg,webp}", { eager: true }) as Record<string, { default: string }>
  )
  const lashImages = loadImages(
    import.meta.glob("/src/assets/gallery/lash/*.{png,jpg,jpeg,svg,webp}", { eager: true }) as Record<string, { default: string }>
  )

  // Create a readable title from an image src URL
  const formatFileName = (src: string) => {
    try {
      const path = src.split("?")[0]
      const file = path.split("/").pop() || ""
      // remove extension, then strip trailing Vite hash segment like ".abc123"
      const noExt = file.replace(/\.[^.]+$/, "")
      const nameClean = noExt.replace(/\.[a-f0-9]{6,}$/i, "")
      return decodeURIComponent(nameClean)
        .replace(/[\-_]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, (c) => c.toUpperCase())
    } catch {
      return "Image"
    }
  }

  const Section = ({
    title,
    subtitle,
    images,
  }: {
    title: string;
    subtitle: string;
    images: string[];
  }) => (
    <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-dream text-4xl font-bold mb-4" style={{ color: '#3a2c1b' }}>{title}</h2>
          <p className="font-garet text-lg max-w-2xl mx-auto" style={{ color: '#3a2c1b' }}>
            {subtitle}
          </p>
        </div>

        <div className="relative">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {images.map((src, idx) => {
                const imgTitle = formatFileName(src)
                return (
                  <CarouselItem key={idx} className="basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="aspect-[1] md:aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-lg relative group">
                      <img
                        src={src}
                        alt={imgTitle}
                        className="w-full h-full object-contain transition duration-300 group-hover:brightness-75"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <h3 className="text-white drop-shadow font-garet text-lg font-medium text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {imgTitle}
                        </h3>
                      </div>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious
              variant="ghost"
              className="-left-4 md:-left-8 h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#3a2c1b] text-white hover:bg-[#2e2316] shadow-[0_8px_24px_rgba(0,0,0,0.15)] border-0"
            />
            <CarouselNext
              variant="ghost"
              className="-right-4 md:-right-8 h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#3a2c1b] text-white hover:bg-[#2e2316] shadow-[0_8px_24px_rgba(0,0,0,0.15)] border-0"
            />
          </Carousel>
        </div>
      </div>
    </section>
  )

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

      {/* Head Spa */}
      <Section
        title="Head Spa"
        subtitle="Experience our luxurious head spa and scalp massage treatments"
        images={headSpaImages}
      />

      {/* Waxing */}
      <Section
        title="Waxing"
        subtitle="Professional waxing services in our comfortable and hygienic environment"
        images={waxImages}
      />

      {/* Laser Hair Removal */}
      <Section
        title="Laser Hair Removal"
        subtitle="Advanced laser hair removal treatments for smooth, long-lasting results"
        images={laserImages}
      />

      {/* Lash Extensions */}
      <Section
        title="Lash Extensions"
        subtitle="Enhance your natural beauty with premium lash extension services"
        images={lashImages}
      />

      <Footer />
    </div>
  );
}