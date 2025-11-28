import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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

interface PricingGridProps {
  section: SchemaItem;
}

// Helper to get item by key
const getItemByKey = (items: SchemaItem[] | undefined, key: string): SchemaItem | undefined => {
  return items?.find(item => item.key === key);
};

// Helper to get items by type
const getItemsByType = (items: SchemaItem[] | undefined, type: string): SchemaItem[] => {
  return items?.filter(item => item.type === type) || [];
};

// Helper to normalize image paths (decode URL encoding)
const normalizeImagePath = (path: string | undefined): string | undefined => {
  if (!path) return undefined;
  // Decode URL encoding (e.g., %20 -> space)
  return decodeURIComponent(path);
};

// Render a service header (image + heading)
const ServiceHeader = ({ items }: { items: SchemaItem[] }) => {
  const imageItem = getItemByKey(items, 'HeadSpaServiceImage') || getItemsByType(items, 'image')[0];
  const headingItem = getItemByKey(items, 'HeadSpaServiceHeading') || getItemsByType(items, 'heading')[0];

  if (!imageItem && !headingItem) return null;

  const imageSrc = normalizeImagePath(imageItem?.src || imageItem?.content);

  return (
    <div className="text-center mb-12">
      {imageSrc && (
        <div className="mb-6">
          <img
            src={imageSrc}
            alt={imageItem?.alt || headingItem?.content || "Service"}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      {headingItem && (
        <h2 className="font-dream text-4xl font-bold" style={{ color: '#3a2c1b' }}>
          {headingItem.content}
        </h2>
      )}
    </div>
  );
};

// Render a single service item
const ServiceItem = ({ items, index }: { items: SchemaItem[]; index: number }) => {
  const headingItem = getItemsByType(items, 'heading')[0];
  const descriptionItem = getItemsByType(items, 'text')[0];
  const buttonItem = getItemByKey(items, 'ServiceButton1') || getItemsByType(items, 'button')[0];
  const coverImageItem = getItemByKey(items, 'ServiceCover1') || getItemsByType(items, 'image').find(img => img.key?.includes('Cover'));
  const lightboxImageItem = getItemByKey(items, 'ServiceLightBox1') || getItemsByType(items, 'image').find(img => img.key?.includes('LightBox'));

  const title = headingItem?.content || "";
  const description = descriptionItem?.content || "";
  const buttonText = buttonItem?.content || "Enquire now";
  const lightboxImage = normalizeImagePath(lightboxImageItem?.src || lightboxImageItem?.content);
  const coverImage = normalizeImagePath(coverImageItem?.src || coverImageItem?.content);

  if (!title && !description) return null;

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} ${index > 0 ? 'mt-12' : ''}`}>
      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
        <h3 className="font-garet text-2xl font-bold mb-2" style={{ color: '#3a2c1b' }}>
          {title}
        </h3>
        <div className="min-h-[120px] mb-6">
          <p className="font-garet text-gray-700">{description}</p>
        </div>
        {lightboxImage && (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-garet rounded-full" style={{ backgroundColor: '#3a2c1b', color: '#FAF8F4' }}>
                {buttonText}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 overflow-hidden">
              <img
                src={lightboxImage}
                alt={`${title} Menu`}
                className="w-full h-auto max-h-[90vh] object-contain"
                loading="lazy"
                decoding="async"
              />
            </DialogContent>
          </Dialog>
        )}
      </div>
      {coverImage && (
        <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
          <img
            src={coverImage}
            alt={title}
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
    </div>
  );
};

// Render a pricing column
const PricingColumn = ({ column }: { column: SchemaItem }) => {
  const columnItems = column.items || [];
  
  // Find service header (item with key like "HeadSpaService" or first item with image + heading)
  const serviceHeaderItem = columnItems.find(item => 
    item.key?.includes('Head') && item.key?.includes('Service')
  ) || columnItems.find(item => 
    item.items?.some(subItem => subItem.type === 'image') && 
    item.items?.some(subItem => subItem.type === 'heading')
  );

  // Find all service items (items that start with "Service" and have heading + description, but not the header)
  const serviceItems = columnItems.filter(item => 
    item.key?.startsWith('Service') && 
    item.key !== serviceHeaderItem?.key &&
    item.items?.some(subItem => subItem.type === 'heading')
  );

  return (
    <div className="bg-white rounded-2xl p-8">
      {serviceHeaderItem && <ServiceHeader items={serviceHeaderItem.items || []} />}
      
      <div className="space-y-12">
        {serviceItems.map((service, index) => (
          <ServiceItem
            key={service.key || index}
            items={service.items || []}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default function PricingGrid({ section }: PricingGridProps) {
  const gridItems = section.items || [];
  
  // Find left and right columns
  const leftColumn = gridItems.find(item => item.key === 'PricingColumnLeft');
  const rightColumn = gridItems.find(item => item.key === 'PricingColumnRight');
  const gridID = section.key;

  return (
    <section id={gridID} className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {leftColumn && <PricingColumn column={leftColumn} />}
          {rightColumn && <PricingColumn column={rightColumn} />}
        </div>
      </div>
    </section>
  );
}

