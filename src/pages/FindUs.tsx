import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FindUsSection from "@/components/sections/FindUsSection";
import cmsSchema from "../../schemas/diora-findus-cms-schema.json";

// Helper function to find section by key
const getSectionByKey = (sections: any[], key: string) => {
  return sections.find(section => section.key === key);
};

export default function FindUs() {
  // Load sections from CMS schema
  const gmapSection = getSectionByKey(cmsSchema as any[], 'Gmap');
  const contactInfoSection = getSectionByKey(cmsSchema as any[], 'ContactInfoSection');

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
