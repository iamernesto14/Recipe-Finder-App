import React, { useContext, useEffect } from "react";
import { RecipeContext } from "../RecipeContext";
import Header from "../Header";
import Footer from "../Footer";
import MobileNav from "../MobileNav";
import { IoFilterSharp } from "react-icons/io5";
import RecipeCard from "../RecipeCard";

function AllRecipes() {
  const { fetchRecipes, recipes, loading, error } = useContext(RecipeContext);

  useEffect(() => {
    // Fetch all recipes when the component loads
    fetchRecipes("all");
  }, []);

  return (
    <div className="bg-main-200 dark:bg-main-900 dark:text-main-100 h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <div className="flex-grow p-4 mt-20">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">All Recipes</h3>
          <div className="bg-gray-400 px-2 py-1 rounded">
            <button className="flex items-center gap-2">
              <IoFilterSharp /> Filter
            </button>
          </div>
        </div>

        {/* Loading and Error States */}
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Recipe Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
      </div>

      <Footer />
      <MobileNav />
    </div>
  );
}

export default AllRecipes;
