import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHeroBanner from "@/components/sections/SimpleHeroBanner";
import GalleryImageGrid from "@/components/sections/GalleryImageGrid";
import cmsSchema from "../../schemas/diora-gallery-cms-schema.json";
import { useCMSSchema } from "../hooks/useCMSSchema";

interface Section {
  key: string;
  name: string;
  type: string;
  items: any[];
}

interface Layout {
  components: Section[];
}

interface ApiResponse {
  data: {
    layout: Layout;
  };
}

// Helper function to find section by key
const getSectionByKey = (sections: any[], key: string): Section | null => {
  if (Array.isArray(sections)) {
    return sections.find(section => section.key === key) || null;
  } else {
    // Type assertion to tell TypeScript the shape
    const response = sections as ApiResponse;
    return response.data.layout.components.find(section => section.key === key) || null;
  }
};


export default function Gallery() {
  // Fetch schema from API with fallback to local JSON
  const { schema: cmsData } = useCMSSchema('gallery', () => cmsSchema);
  const schema = cmsData || cmsSchema;
  
  // Load simple hero banner from CMS schema
  const simpleHeroBanner = getSectionByKey(schema as any[], 'SimpleHeroBanner');
  
  // Get all gallery sections from schema
  const galleryHeadSpa = getSectionByKey(schema as any[], 'GalleryHeadSpa');
  const galleryWaxing = getSectionByKey(schema as any[], 'GalleryWaxing');
  const galleryLashExtension = getSectionByKey(schema as any[], 'GalleryLashExtension');
  const galleryLaser = getSectionByKey(schema as any[], 'GalleryLaser');

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