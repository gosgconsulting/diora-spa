import ServiceCard from "./ServiceCard";

interface Service {
  title: string;
  description: string;
  image: string;
  price: string;
}

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-dream text-4xl font-medium" style={{ color: '#3a2c1b' }}>Our Services</h2>
          <p className="font-garet text-lg text-muted-foreground mt-2 max-w-2xl mx-auto" style={{ color: '#3a2c1b' }}>
            Experience our signature treatments crafted with care and expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
