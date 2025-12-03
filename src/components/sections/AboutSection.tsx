interface SchemaItem {
  key: string;
  type: string;
  content?: string;
  src?: string;
  alt?: string;
  items?: SchemaItem[];
  [key: string]: any;
}

interface AboutSectionProps {
  items?: SchemaItem[];
}

export default function AboutSection({ items = [] }: AboutSectionProps) {
  // Extract data from schema items
  const getItemByKey = (key: string): SchemaItem | undefined => {
    return items.find(item => item.key === key);
  };

  const titleItem = getItemByKey('title');
  const descriptionItem = getItemByKey('description');
  const imageItem = getItemByKey('image');

  const title = titleItem?.content || "About Diora Spa";
  const description = descriptionItem?.content || "";
  const image = imageItem?.src;
  const imageAlt = imageItem?.alt || "Diora Spa";

  return (
    <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={image}
              alt={imageAlt}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          <div>
            <h2 className="font-dream text-5xl font-medium mb-6" style={{ color: '#3a2c1b' }}>
              {title}
            </h2>
            {description && (
              <p className="font-garet text-lg mb-6 leading-relaxed" style={{ color: '#3a2c1b' }}>
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
