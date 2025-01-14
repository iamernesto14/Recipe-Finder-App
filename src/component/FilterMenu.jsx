import React, { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import Button from "./Button";
import { RecipeContext } from "./RecipeContext";
import FilterAccordion from "./FilterAccordion";

const FilterMenu = ({ isOpen, onClose }) => {
  const { recipes } = useContext(RecipeContext);
  const [activeAccordion, setActiveAccordion] = useState(null); // Track the active accordion

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

  // Toggle accordion state
  const toggleAccordion = (accordionName) => {
    setActiveAccordion((prev) =>
      prev === accordionName ? null : accordionName
    );
  };

  return (
    <div
      className={`fixed top-0 right-0 w-[350px] h-screen bg-main-700 text-main-100 dark:bg-main-300 shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      {/* Close Button */}
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-semibold">Filter Recipes</h2>
        <button
          className="text-2xl text-gray-600 dark:text-gray-300"
          onClick={onClose}
        >
          <IoCloseSharp className="text-main-100" />
        </button>
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

      {/* Accordion Menu */}
      <FilterAccordion
                  activeAccordion={activeAccordion}
                  toggleAccordion={toggleAccordion}
                  dietLabels={dietLabels}
                  healthLabels={healthLabels}
                  dishType={dishType}
                  cuisineType={cuisineType}
                  mealType={mealType} />

      {/* Apply and Clear Buttons */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-center gap-4 p-4 pb-10 dark:bg-main-800 border-t border-gray-200">
        <Button className="bg-main-400" name="Clear" />
        <Button className="bg-orange-500" name="Apply" />
      </div>
    </div>
  );
};

export default FilterMenu;
