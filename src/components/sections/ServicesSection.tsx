import ServiceCard from "./ServiceCard";

interface SchemaItem {
  key: string;
  type: string;
  content?: string;
  items?: SchemaItem[];
  [key: string]: any;
}

interface ServicesSectionProps {
  items?: SchemaItem[];
}

export default function ServicesSection({ items = [] }: ServicesSectionProps) {
  // Extract data from schema items
  const getItemByKey = (key: string): SchemaItem | undefined => {
    return items.find(item => item.key === key);
  };

  const titleItem = getItemByKey('title');
  const subtitleItem = getItemByKey('subtitle');
  const servicesItem = getItemByKey('services');

  const title = titleItem?.content || "Our Services";
  const subtitle = subtitleItem?.content || "";
  const services = servicesItem?.items || [];

  return (
    <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-dream text-4xl font-medium" style={{ color: '#3a2c1b' }}>{title}</h2>
          {subtitle && (
            <p className="font-garet text-lg text-muted-foreground mt-2 max-w-2xl mx-auto" style={{ color: '#3a2c1b' }}>
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.key || index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
