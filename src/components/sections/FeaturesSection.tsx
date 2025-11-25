import FeatureCard from "./FeatureCard";

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="py-16" style={{ backgroundColor: '#3a2c1b' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-dream text-5xl font-medium text-white mb-4">Why Choose Diora spa</h2>
          <p className="font-coco text-lg text-white/90 max-w-2xl mx-auto">
            Discover what makes our spa experience truly exceptional
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
