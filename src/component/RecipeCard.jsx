// RecipeCard.jsx
import React, { useContext } from "react";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RecipeContext } from "./RecipeContext";

function RecipeCard({ recipe }) {
  const { saveRecipe, removeRecipe, savedRecipes } = useContext(RecipeContext);
  const isSaved = savedRecipes.some((saved) => saved.label === recipe.label);

  const toggleSave = () => {
    if (isSaved) {
      removeRecipe(recipe.label);
    } else {
      saveRecipe(recipe);
    }
  };
  return (
    <div className="rounded-lg shadow-sm overflow-hidden bg-white dark:bg-main-600 dark:text-main-100 hover:shadow-md transition-shadow">
      <img
        src={recipe.image}
        alt={recipe.label}
        className="w-full h-40 object-cover"
      />
      <div className="p-3 bg-white dark:bg-main-600">
        <Link
          to={`/recipe/${encodeURIComponent(recipe.label)}`}
          className="block"
        >
          <h3 className="font-semibold mb-4">{recipe.label}</h3>
        </Link>
        <div className="flex justify-between items-center dark:bg-main-600">
          <div className="flex items-center gap-2">
            <FiClock />
            <span className="text-sm">{recipe.totalTime} mins</span>
          </div>
          <button onClick={toggleSave}>
            {isSaved ? <IoBookmark /> : <IoBookmarkOutline />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
