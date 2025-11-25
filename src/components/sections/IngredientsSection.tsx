import IngredientCard from "./IngredientCard";

interface Ingredient {
  name: string;
  benefit: string;
  image: string;
}

interface IngredientsSectionProps {
  ingredients: Ingredient[];
}

export default function IngredientsSection({ ingredients }: IngredientsSectionProps) {
  return (
    <section className="py-16" style={{ backgroundColor: '#3a2c1b' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-dream text-6xl font-medium text-white mb-4">Our Ingredients</h2>
          <p className="font-garet text-lg text-white/90 max-w-2xl mx-auto">
            We carefully select premium natural ingredients known for their therapeutic properties and gentle effectiveness.
          </p>
        </div>
        
        <div className="grid grid-cols-5 gap-4">
          {ingredients.map((ingredient, index) => (
            <IngredientCard key={index} ingredient={ingredient} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
