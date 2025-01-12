import React, { useContext } from "react";
import { RecipeContext } from "../RecipeContext";
import Header from "../Header";
import Footer from "../Footer";
import MobileNav from "../MobileNav";
import RecipeCard from "../RecipeCard";

const SavedRecipe = () => {
  const { savedRecipes } = useContext(RecipeContext);

  return (
    <div className="bg-main-200 dark:bg-main-900 dark:text-main-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-4 mt-20">
        <h3 className="text-xl font-semibold mb-4">Saved Recipes</h3>
        {savedRecipes.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {savedRecipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No saved recipes yet.</p>
        )}
      </div>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default SavedRecipe;
