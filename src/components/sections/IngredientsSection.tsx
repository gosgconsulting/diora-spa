import IngredientCard from "./IngredientCard";

interface SchemaItem {
  key: string;
  type: string;
  content?: string;
  items?: SchemaItem[];
  [key: string]: any;
}

interface IngredientsSectionProps {
  items?: SchemaItem[];
}

export default function IngredientsSection({ items = [] }: IngredientsSectionProps) {
  // Extract data from schema items
  const getItemByKey = (key: string): SchemaItem | undefined => {
    return items.find(item => item.key === key);
  };

  const titleItem = getItemByKey('title');
  const subtitleItem = getItemByKey('subtitle');
  const ingredientsItem = getItemByKey('ingredients');

  const title = titleItem?.content || "Our Ingredients";
  const subtitle = subtitleItem?.content || "We carefully select premium natural ingredients known for their therapeutic properties and gentle effectiveness.";
  const ingredients = ingredientsItem?.items || [];

  return (
    <section className="py-16" style={{ backgroundColor: '#3a2c1b' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-dream text-6xl font-medium text-white mb-4">{title}</h2>
          {subtitle && (
            <p className="font-garet text-lg text-white/90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-5 gap-4">
          {ingredients.map((ingredient, index) => (
            <IngredientCard key={ingredient.key || index} ingredient={ingredient} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
