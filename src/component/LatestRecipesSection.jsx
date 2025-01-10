import React from "react";
import RecipeCard from "./RecipeCard";

function LatestRecipesSection({ title, recipes }) {
  return (
    <div className="px-4 mt-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recipes.map((recipeObj, index) => (
          <RecipeCard key={index} recipe={recipeObj.recipe} />
        ))}
      </div>
    </div>
  );
}

export default LatestRecipesSection;
