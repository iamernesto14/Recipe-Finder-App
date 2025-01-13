import React, { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../RecipeContext";
import Header from "../Header";
import Footer from "../Footer";
import MobileNav from "../MobileNav";
import { IoFilterSharp } from "react-icons/io5";
import RecipeCard from "../RecipeCard";
import FilterMenu from "../FilterMenu";

function AllRecipes() {
  const { fetchRecipes, recipes, loading, error } = useContext(RecipeContext);
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
  const [isButtonFixed, setButtonFixed] = useState(false);

  useEffect(() => {
    fetchRecipes("all");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const isBottom = scrollY + windowHeight >= documentHeight;

      if (scrollY > 100 && !isBottom) {
        setButtonFixed(true);
      } else if (isBottom || scrollY <= 100) {
        setButtonFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-main-200 dark:bg-main-900 dark:text-main-100 min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <div className="flex-grow p-4 mt-20">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">All Recipes</h3>
          {/* Filter button */}
          <div
            className={`bg-gray-400 px-4 py-2 text-xl rounded transition-all duration-300 ${
              isButtonFixed
                ? "fixed bottom-[calc(4rem+15px)] right-4 shadow-lg z-50"
                : ""
            }`}
          >
            <button
              className="flex items-center gap-2"
              onClick={() => setFilterMenuOpen(true)}
            >
              <IoFilterSharp /> Filter
            </button>
          </div>
        </div>

        {/* Loading and Error States */}
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Recipe Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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

      {/* Filter Menu */}
      <FilterMenu
        isOpen={isFilterMenuOpen}
        onClose={() => setFilterMenuOpen(false)}
      />
    </div>
  );
}

export default AllRecipes;
