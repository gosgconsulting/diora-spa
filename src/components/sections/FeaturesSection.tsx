import FeatureCard from "./FeatureCard";

interface SchemaItem {
  key: string;
  type: string;
  content?: string;
  items?: SchemaItem[];
  [key: string]: any;
}

interface FeaturesSectionProps {
  items?: SchemaItem[];
}

export default function FeaturesSection({ items = [] }: FeaturesSectionProps) {
  // Extract data from schema items
  const getItemByKey = (key: string): SchemaItem | undefined => {
    return items.find(item => item.key === key);
  };

  const titleItem = getItemByKey('title');
  const subtitleItem = getItemByKey('subtitle');
  const featuresItem = getItemByKey('features');

  const title = titleItem?.content || "Why Choose Diora spa";
  const subtitle = subtitleItem?.content || "Discover what makes our spa experience truly exceptional";
  const features = featuresItem?.items || [];

  return (
    <section className="py-16" style={{ backgroundColor: '#3a2c1b' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-dream text-5xl font-medium text-white mb-4">{title}</h2>
          {subtitle && (
            <p className="font-coco text-lg text-white/90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.key || index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
