import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCMSSchema } from "../hooks/useCMSSchema";
import tosSchema from "../../schemas/diora-tos-cms-schema.json";

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
    const response = sections as ApiResponse;
    return response.data.layout.components.find(section => section.key === key) || null;
  }
};

// Helper function to get content by key from section items
const getContentByKey = (section: Section | null, key: string): string => {
  if (!section) return '';
  const item = section.items.find(item => item.key === key);
  return item?.content || '';
};

export default function TermsConditions() {
  // Fetch schema from API with fallback to local JSON
  const { schema: cmsData } = useCMSSchema('terms', () => tosSchema);
  const schema = cmsData || tosSchema;
  
  // Load sections from CMS schema
  const heroSection = getSectionByKey(schema as any[], 'SimpleHeroBanner');
  const contentSection = getSectionByKey(schema as any[], 'sectionTOS');

  // Get content from sections
  const pageTitle = getContentByKey(heroSection, 'title') || 'Terms & Conditions';
  const updatedDate = getContentByKey(contentSection, 'updatedDate') || 'September 10, 2025';

  // Filter out the updatedDate item from the content section items
  const contentItems = contentSection ? contentSection.items.filter(item => item.key !== 'updatedDate') : [];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F4' }}>
      <Header />

      {/* Page Title */}
      <section className="pt-24 pb-16" style={{ backgroundColor: '#3a2c1b' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-dream text-8xl font-medium text-white mb-4">{pageTitle}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <div className="font-garet" style={{ color: '#3a2c1b' }}>
                  <p className="text-lg mb-6">
                    Last Updated: {updatedDate}
                  </p>

                  {/* Dynamically render content from CMS schema (excluding updatedDate) */}
                  {contentItems.map((item, index) => {
                    if (item.type === 'heading') {
                      return (
                        <h2 
                          key={item.key || index}
                          className="font-dream text-3xl font-medium mb-4"
                        >
                          {item.content}
                        </h2>
                      );
                    } else if (item.type === 'text') {
                      return (
                        <p 
                          key={item.key || index}
                          className="mb-6"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      );
                    } else if (item.type === 'list') {
                      return (
                        <ul key={item.key || index} className="list-disc pl-6 mb-6">
                          {item.items?.map((listItem: any, listIndex: number) => (
                            <li key={listIndex} className="mb-2">
                              {listItem.content}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}

                  {/* Fallback content if no CMS data */}
                  {contentItems.length === 0 && (
                    <>
                      <h2 className="font-dream text-3xl font-medium mb-4">1. Introduction</h2>
                      <p className="mb-6">
                        These Terms and Conditions ("Terms") govern your use of the Diora Spa by Michelle Tran website and services. By accessing our website, booking appointments, or using our services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access our website or use our services.
                      </p>

                      <h2 className="font-dream text-3xl font-medium mb-4">13. Contact Us</h2>
                      <p className="mb-6">
                        If you have any questions about these Terms, please contact us at:<br />
                        Email: dioraspabymichelletran@gmail.com<br />
                        Phone: +65 9224 6789<br />
                        Address: 14 Scotts Rd, #05-80 Far East Plaza, Singapore 228213
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}