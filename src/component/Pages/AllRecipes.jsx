import React, { useContext, useState } from "react";
import { RecipeContext } from "../RecipeContext";
import Header from "../Header";
import Footer from "../Footer";
import MobileNav from "../MobileNav";

function AllRecipes() {
  const { fetchRecipes, recipes, loading, error } = useContext(RecipeContext);
  return (
    <div className="bg-main-200 h-full">
      <Header />
      <div>
        <h3>All Recipes</h3>
        <div>
            
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {recipes.length > 0
          ? recipes.map((recipeObj, index) => (
              <RecipeCard key={index} recipe={recipeObj.recipe} />
            ))
          : !loading && (
              <p className="text-gray-500 col-span-2 md:col-span-3">
                Recipe not found.
              </p>
            )}
      </div>
      <Footer />
      <MobileNav />
    </div>
  );
}

export default AllRecipes;
