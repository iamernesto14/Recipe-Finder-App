// RecipeCard.jsx
import React, { useContext } from "react";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RecipeContext } from "./RecipeContext";

function RecipeCard({ recipe }) {
  const { saveRecipe, unsaveRecipe, savedRecipes } = useContext(RecipeContext);
  const isSaved = savedRecipes.some((r) => r.label === recipe.label);

  const toggleSave = () => {
    if (isSaved) {
      unsaveRecipe(recipe.label);
    } else {
      saveRecipe(recipe);
    }
  };
  return (
    <Link to={`/recipe/${encodeURIComponent(recipe.label)}`} className="block">
      <div className="rounded-lg shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow">
        <img
          src={recipe.image}
          alt={recipe.label}
          className="w-full h-40 object-cover"
        />
        <div className="p-3 bg-white">
          <h3 className="font-semibold mb-4">{recipe.label}</h3>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FiClock />
              <span className="text-sm">{recipe.totalTime} mins</span>
            </div>
            {isSaved ? <IoBookmark /> : <IoBookmarkOutline />}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
