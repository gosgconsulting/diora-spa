interface Ingredient {
  name: string;
  benefit: string;
  image: string;
}

interface IngredientCardProps {
  ingredient: Ingredient;
  index: number;
}

export default function IngredientCard({ ingredient, index }: IngredientCardProps) {
  return (
    <div key={index} className="text-center">
      <div className="mb-4">
        <img 
          src={ingredient.image}
          alt={ingredient.name}
          className="w-full aspect-square object-cover rounded-lg shadow-lg"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h4 className="font-garet font-semibold text-white text-sm mb-2">{ingredient.name}</h4>
      <p className="font-garet text-xs text-white/90">{ingredient.benefit}</p>
    </div>
  );
}
