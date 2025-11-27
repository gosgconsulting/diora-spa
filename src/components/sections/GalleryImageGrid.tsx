interface SchemaItem {
  key: string;
  type: string;
  content?: string;
  level?: number;
  items?: SchemaItem[];
  src?: string;
  alt?: string;
  [key: string]: any;
}

interface GalleryImageGridProps {
  section: SchemaItem;
}

export default function GalleryImageGrid({ section }: GalleryImageGridProps) {
  // Helper to extract heading and description from section items
  const getItemByKey = (key: string): SchemaItem | undefined => {
    return section.items?.find(item => item.key === key);
  };

  // Helper to format file names as image captions
  const formatFileName = (filename: string) => {
    try {
      // Remove file extension
      const noExt = filename.split('/').pop()?.replace(/\.[^.]+$/, "") || "";
      return noExt
        .replace(/[\-_]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, (c) => c.toUpperCase());
    } catch {
      return "Image";
    }
  };

  // Extract heading and description from section items
  const headingItem = section.items?.find(item => item.type === 'heading');
  const descriptionItem = section.items?.find(item => item.type === 'text' && item.key !== 'title');
  const galleryArrayItem = section.items?.find(item => item.type === 'array' && item.key === 'GalleryImageGrid');

  const title = headingItem?.content || section.key || "Gallery";
  const description = descriptionItem?.content || "";
  const images = galleryArrayItem?.items || [];

  return (
    <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-dream text-4xl font-bold mb-4" style={{ color: '#3a2c1b' }}>
            {title}
          </h2>
          {description && (
            <p className="font-garet text-lg max-w-2xl mx-auto" style={{ color: '#3a2c1b' }}>
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, idx) => {
            const imgCaption = formatFileName(image.alt || "");
            return (
              <div key={image.key || idx} className="aspect-[4/3] overflow-hidden rounded-2xl relative group shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt || imgCaption}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white drop-shadow font-garet text-lg font-medium text-center px-4">
                    {imgCaption}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
