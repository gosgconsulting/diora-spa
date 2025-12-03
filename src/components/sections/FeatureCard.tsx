interface SchemaItem {
  key: string;
  type: string;
  title?: string;
  description?: string;
  src?: string;
  [key: string]: any;
}

interface FeatureCardProps {
  feature: SchemaItem;
  index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <div key={index} className="text-center">
      <div className="mb-6">
        <img 
          src={feature.src} 
          alt={feature.title}
          className="w-full h-48 object-cover rounded-lg shadow-lg"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className="font-garet text-xl font-semibold text-white mb-4">{feature.title}</h3>
      <p className="font-garet text-white/90 mb-6 leading-relaxed">{feature.description}</p>
    </div>
  );
}
