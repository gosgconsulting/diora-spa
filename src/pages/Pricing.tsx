import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHeroBanner from "@/components/sections/SimpleHeroBanner";
import PricingGrid from "@/components/sections/PricingGrid";
import cmsSchema from "../../schemas/diora-pricing-cms-schema.json";
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


export default function Pricing() {
  // Fetch schema from API with fallback to local JSON
  const { schema: cmsData } = useCMSSchema('pricing', () => cmsSchema);
  const schema = cmsData || cmsSchema;
  
  // Load simple hero banner from CMS schema
  const simpleHeroBanner = getSectionByKey(schema as any[], 'SimpleHeroBanner');
  // Load pricing grids from CMS schema
  const pricingGrid = getSectionByKey(schema as any[], 'PricingGrid');
  const pricingGrid2 = getSectionByKey(schema as any[], 'PricingGrid2');
  
  return (
    <div>
      <Header />

      {/* Simple Hero Banner - Using SimpleHeroBanner Component with CMS Schema Data */}
      <SimpleHeroBanner items={simpleHeroBanner?.items} />

      {/* Pricing Grids - Using PricingGrid Component with CMS Schema Data */}
      {pricingGrid && <PricingGrid section={pricingGrid} />}
      {pricingGrid2 && <PricingGrid section={pricingGrid2} />}

      <Footer />
    </div>
  );
}