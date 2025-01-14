import React, { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../RecipeContext";
import Header from "../Header";
import Footer from "../Footer";
import MobileNav from "../MobileNav";
import { IoFilterSharp } from "react-icons/io5";
import RecipeCard from "../RecipeCard";
import FilterMenu from "../FilterMenu";
import { LuSearch } from "react-icons/lu";
import Button from "../Button";
import FilterAccordion from "../FilterAccordion"; // Import the new component

function AllRecipes() {
  const { fetchRecipes, recipes, loading, error } = useContext(RecipeContext);
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
  const [isButtonFixed, setButtonFixed] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    fetchRecipes("all");

    // Check screen size on initial load
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Adjust the threshold as needed
    };

    // Initial check and add resize event listener
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const isBottom = scrollY + windowHeight >= documentHeight;

      // Only set the button as fixed when scrolling past a certain point and not at the bottom
      if (scrollY > 100 && !isBottom && !isButtonFixed) {
        setButtonFixed(true); // Set button to fixed only if not already fixed
      } else if ((isBottom || scrollY <= 100) && isButtonFixed) {
        setButtonFixed(false); // Set button to non-fixed if at the top or bottom
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isButtonFixed]);

  const toggleAccordion = (accordionName) => {
    setActiveAccordion((prev) =>
      prev === accordionName ? null : accordionName
    );
  };

  // Extract unique dietLabels and healthLabels from the recipes
  const dietLabels = Array.from(
    new Set(
      recipes.flatMap((recipe) =>
        recipe.recipe.dietLabels ? recipe.recipe.dietLabels : []
      )
    )
  );

  const healthLabels = Array.from(
    new Set(
      recipes.flatMap((recipe) =>
        recipe.recipe.healthLabels ? recipe.recipe.healthLabels : []
      )
    )
  );

  const dishType = Array.from(
    new Set(
      recipes.flatMap((recipe) =>
        recipe.recipe.dishType ? recipe.recipe.dishType : []
      )
    )
  );
  const cuisineType = Array.from(
    new Set(
      recipes.flatMap((recipe) =>
        recipe.recipe.cuisineType ? recipe.recipe.cuisineType : []
      )
    )
  );
  const mealType = Array.from(
    new Set(
      recipes.flatMap((recipe) =>
        recipe.recipe.mealType ? recipe.recipe.mealType : []
      )
    )
  );

  return (
    <div className="bg-main-200 dark:bg-main-900 dark:text-main-100 min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <div className="lg:flex mt-16 h-full">

        {/* Side Menu */}
        <div
          className={`top-0 pt-16 left-0 hidden lg:flex flex-col w-full lg:w-[25%] h-screen bg-main-700 text-main-100 dark:bg-main-300 shadow-lg fixed`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-semibold">Filter Recipes</h2>
            <button className="text-2xl text-gray-600 dark:text-gray-300"></button>
          </div>

          {/* Search Input */}
          <div className="mx-4 pl-3 flex gap-1 items-center justify-center border border-main-100">
            <LuSearch className="" />
            <input
              type="text"
              placeholder="Search recipe..."
              className="w-full px-2 py-2 outline-none focus:outline-none bg-main-700 dark:bg-main-300 dark:border-main-600 dark:text-main-100"
            />
          </div>

          {/* FilterAccordion Component */}
          <FilterAccordion
            activeAccordion={activeAccordion}
            toggleAccordion={toggleAccordion}
            dietLabels={dietLabels}
            healthLabels={healthLabels}
            dishType={dishType}
            cuisineType={cuisineType}
            mealType={mealType}
          />

          {/* Apply and Clear Buttons */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between items-center gap-4 p-4 pb-10 dark:bg-main-800 border-t border-gray-200">
            <Button className="bg-main-400" name="Clear" />
            <Button className="bg-orange-500" name="Apply" />
          </div>
        </div>

        {/* All Recipe Part */}
        <div className="flex-grow lg:w-[75%] p-4 overflow-y-auto lg:ml-[25%]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">All Recipes</h3>
            {/* Filter button is hidden on large screens */}
            {!isLargeScreen && (
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
            )}
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
