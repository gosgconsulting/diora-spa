import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHeroBanner from "@/components/sections/SimpleHeroBanner";
import GalleryImageGrid from "@/components/sections/GalleryImageGrid";
import cmsSchema from "../../schemas/diora-gallery-cms-schema.json";

// Helper function to find section by key
const getSectionByKey = (sections: any[], key: string) => {
  return sections.find(section => section.key === key);
};

export default function Gallery() {
  // Load simple hero banner from CMS schema
  const simpleHeroBanner = getSectionByKey(cmsSchema as any[], 'SimpleHeroBanner');
  
  // Get all gallery sections from schema
  const galleryHeadSpa = getSectionByKey(cmsSchema as any[], 'GalleryHeadSpa');
  const galleryWaxing = getSectionByKey(cmsSchema as any[], 'GalleryWaxing');
  const galleryLashExtension = getSectionByKey(cmsSchema as any[], 'GalleryLashExtension');
  const galleryLaser = getSectionByKey(cmsSchema as any[], 'GalleryLaser');

  const gallerySections = [galleryHeadSpa, galleryWaxing, galleryLashExtension, galleryLaser].filter(Boolean);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F4' }}>
      <Header />

      {/* Simple Hero Banner - Using SimpleHeroBanner Component with CMS Schema Data */}
      <SimpleHeroBanner items={simpleHeroBanner?.items} />

      {/* Gallery Sections - Using GalleryImageGrid Component with CMS Schema Data */}
      {gallerySections.map((section: any, index: number) => (
        <GalleryImageGrid
          key={section?.key || index}
          section={section}
        />
      ))}

      <Footer />
    </div>
  );
}