import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RecipeContext } from "../RecipeContext";
import MobileNav from "../MobileNav";
import Header from "../Header";
import { GoBookmark } from "react-icons/go";
import Footer from "../Footer";

function RecipeDetail() {
  const { recipes } = useContext(RecipeContext);
  const { recipeLabel } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate(); // Use navigate for navigation

  useEffect(() => {
    // Find the selected recipe by label
    const foundRecipe = recipes.find(
      (rec) => rec.recipe.label === decodeURIComponent(recipeLabel)
    );
    setRecipe(foundRecipe ? foundRecipe.recipe : null);

    // Check if the recipe is already saved
    if (foundRecipe) {
        const isRecipeSaved = savedRecipes.some(
          (savedRecipe) => savedRecipe.recipe.label === foundRecipe.recipe.label
        );
        setIsSaved(isRecipeSaved);
      }
  }, [recipeLabel, recipes, savedRecipes]);

  const handleSaveClick = () => {
    if (recipe) {
      toggleSaveRecipe(recipe);
      setIsSaved(!isSaved); // Toggle saved state
    }
  };


  if (!recipe) {
    return <div className="p-4 text-center">Recipe not found!</div>;
  }

  return (
    <div>
      <Header />
      <div className="p-4 mt-8 dark:bg-main-900 dark:text-main-100">
        <div>
          {/* Back button */}
          <button
            onClick={() => navigate(-1)} // Navigate to the previous page
            className="inline-block mt-10 mb-6 bg-main-100 dark:bg-main-600 py-2 px-6 rounded shadow-[0_0_5px_rgba(0,0,0,0.3)] text-gray-700 hover:bg-main-200 transition-all duration-200"
          >
            &larr; Back
          </button>
          <img
            src={recipe.image}
            alt={recipe.label}
            className="w-full h-64 object-cover mb-4 rounded-lg"
          />
        </div>
        <div className="flex justify-between items-center gap-10">
          <h1 className="text-[26px] leading-7 font-bold mb-4">
            {recipe.label}
          </h1>

          {/* save button */}
          <button className="flex gap-1 bg-orange-400 p-3 rounded-md items-center">
          {isSaved ? <GoBookmarkFill /> : <GoBookmark />}
          {isSaved ? "Saved" : "Save"}
          </button>
        </div>
        <p className="text-[12px] text-main-400">by {recipe.source}</p>

        <div className="flex items-center justify-evenly my-10">
          <div className="flex items-center flex-col justify-center">
            <p className="text-2xl font-semibold">
              {recipe.ingredients[0]?.quantity || 0}
            </p>
            <p>Ingredients</p>
          </div>
          <div className="w-[2px] h-14 bg-main-900"></div>
          <div className="flex items-center flex-col justify-center">
            <p className="text-2xl font-semibold">{recipe.totalTime || 0}</p>
            <p>Minutes</p>
          </div>
          <div className="w-[2px] h-14 bg-main-900"></div>
          <div className="flex items-center flex-col justify-center">
            <p className="text-2xl font-semibold">
              {recipe.calories?.toFixed(2) || "0.00"}
            </p>
            <p>Calories</p>
          </div>
        </div>

        <div className="px-2 py-1 mb-10 bg-transparent border border-1 border-main-900 rounded-lg w- inline-block">
          {recipe.cuisineType[0]}
        </div>

        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <div className="w-full h-[1px] bg-main-900 my-5"></div>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        {/* <p>{recipe.instructions || "No instructions available."}</p> */}
      </div>
      <Footer />
      <MobileNav />
    </div>
  );
}

export default RecipeDetail;
