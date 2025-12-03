import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHeroBanner from "@/components/sections/SimpleHeroBanner";
import PricingGrid from "@/components/sections/PricingGrid";
import cmsSchema from "../../schemas/diora-pricing-cms-schema.json";
import { useCMSSchema } from "../hooks/useCMSSchema";
import { useSectionScroll } from "../hooks/useSectionScroll";

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
  
  // Initialize section scroll hook
  const { registerSection, handleHashScroll } = useSectionScroll();

  // Handle hash scroll on page load and when hash changes
  useEffect(() => {
    handleHashScroll(window.location.hash);
    
    // Listen for hash changes
    const handleHashChange = () => {
      handleHashScroll(window.location.hash);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [handleHashScroll]);
  
  return (
    <div>
      <Header />

      {/* Simple Hero Banner - Using SimpleHeroBanner Component with CMS Schema Data */}
      <div ref={(el) => registerSection('hero', el)}>
        <SimpleHeroBanner items={simpleHeroBanner?.items} />
      </div>

      {/* Pricing Grids - Using PricingGrid Component with CMS Schema Data */}
      {pricingGrid && (
        <div ref={(el) => registerSection(pricingGrid.key, el)}>
          <PricingGrid section={pricingGrid} />
        </div>
      )}
      {pricingGrid2 && (
        <div ref={(el) => registerSection(pricingGrid2.key, el)}>
          <PricingGrid section={pricingGrid2} />
        </div>
      )}

      <Footer />
    </div>
  );
}