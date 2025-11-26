import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHeroBanner from "@/components/sections/SimpleHeroBanner";
import PricingGrid from "@/components/sections/PricingGrid";
import cmsSchema from "../../schemas/diora-pricing-cms-schema.json";

// Helper function to find section by key
const getSectionByKey = (sections: any[], key: string) => {
  return sections.find(section => section.key === key);
};

export default function Pricing() {
  // Load simple hero banner from CMS schema
  const simpleHeroBanner = getSectionByKey(cmsSchema as any[], 'SimpleHeroBanner');
  // Load pricing grids from CMS schema
  const pricingGrid = getSectionByKey(cmsSchema as any[], 'PricingGrid');
  const pricingGrid2 = getSectionByKey(cmsSchema as any[], 'PricingGrid2');
  
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