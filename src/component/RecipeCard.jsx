// RecipeCard.jsx
import React from "react";

function RecipeCard({ recipe }) {
  return (
    <div className="p-4 border rounded shadow-md">
      <h3 className="text-lg font-semibold">{recipe.label}</h3>
      <img
        src={recipe.image}
        alt={recipe.label}
        className="w-full h-32 object-cover rounded"
      />
      <p className="mt-2 text-sm text-gray-600">
        Calories: {Math.round(recipe.calories)}
      </p>
      <a
        href={recipe.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline text-sm mt-2 inline-block"
      >
        View Recipe
      </a>
    </div>
  );
}

export default RecipeCard;
