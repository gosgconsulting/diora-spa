interface SchemaItem {
  key: string;
  type: string;
  content?: string;
  [key: string]: any;
}

interface SimpleHeroBannerProps {
  items?: SchemaItem[];
}

export default function SimpleHeroBanner({ items = [] }: SimpleHeroBannerProps) {
  // Extract data from schema items
  const getItemByKey = (key: string): SchemaItem | undefined => {
    return items.find(item => item.key === key);
  };

  const titleItem = getItemByKey('title');
  const subtitleItem = getItemByKey('subtitle');

  const title = titleItem?.content || "Page Title";
  const subtitle = subtitleItem?.content || "";

  return (
    <section className="pt-24 pb-16" style={{ backgroundColor: '#3a2c1b' }}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-dream text-8xl font-medium text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="font-garet text-xl text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
