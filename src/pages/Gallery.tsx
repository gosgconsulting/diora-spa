import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageContent } from '@/cms/usePageContent'
import { galleryDefaults, type GalleryContent } from '@/cms/content/schemas/gallery'

export default function Gallery() {
  const { data } = usePageContent<GalleryContent>('gallery', galleryDefaults)

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F4' }}>
      <Header />
      
      {/* Page Title */}
      <section className="pt-24 pb-16" style={{ backgroundColor: '#3a2c1b' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-dream text-8xl font-medium text-white mb-4">{data.title}</h1>
          {data.intro && (
            <p className="font-garet text-xl text-white/90 max-w-2xl mx-auto">{data.intro}</p>
          )}
        </div>
      </section>

      {data.sections.map((sec, sidx) => (
        <section key={sidx} className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-dream text-4xl font-bold mb-4" style={{ color: '#3a2c1b' }}>{sec.title}</h2>
              {sec.description && (
                <p className="font-garet text-lg max-w-2xl mx-auto" style={{ color: '#3a2c1b' }}>{sec.description}</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sec.images.map((item, index) => (
                <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group">
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}