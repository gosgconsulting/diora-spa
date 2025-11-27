import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FindUsSection from "@/components/sections/FindUsSection";
import cmsSchema from "../../schemas/diora-findus-cms-schema.json";
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

export default function FindUs() {
  // Fetch schema from API with fallback to local JSON
  const { schema: cmsData } = useCMSSchema('findus', () => cmsSchema);
  const schema = cmsData || cmsSchema;
  
  // Load sections from CMS schema
  const gmapSection = getSectionByKey(schema as any[], 'Gmap');
  const contactInfoSection = getSectionByKey(schema as any[], 'ContactInfoSection');

  return (
    <div className="min-h-screen">
      <Header />

      {/* Find Us Section - Using FindUsSection Component with CMS Schema Data */}
      <FindUsSection 
        gmapSection={gmapSection}
        contactInfoSection={contactInfoSection}
      />

      <Footer />
    </div>
  );
}
