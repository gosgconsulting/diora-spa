import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SchemaItem {
  key: string;
  type: string;
  title?: string;
  alt?: string;
  src?: string;
  price?: string;
  link?: string;
  content?: string;
  [key: string]: any;
}

interface ServiceCardProps {
  imageItem?: SchemaItem;
  buttonItem?: SchemaItem;
  index: number;
}

export default function ServiceCard({ imageItem, buttonItem, index }: ServiceCardProps) {
  const title = imageItem?.title || "";
  const description = imageItem?.alt || "";
  const src = imageItem?.src || "";
  const price = imageItem?.price || "";
  const buttonLink = buttonItem?.link || "/pricing";
  const buttonText = buttonItem?.content || "Explore More";

  return (
    <div key={index} className="space-y-4">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
        <img 
          src={src} 
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
          <h3 className="font-montserrat text-2xl font-semibold mb-3">{title}</h3>
          <p className="font-garet text-sm leading-relaxed">{description}</p>
        </div>
        <div className="absolute bottom-4 left-4 text-white font-garet text-sm font-light">
          {price}
        </div>
      </div>
      <div className="flex justify-center">
        <Link to={buttonLink}>
          <Button 
            className="font-garet px-6 py-2 rounded-full w-fit" 
            style={{ backgroundColor: '#3a2c1b', color: '#FAF8F4' }}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
