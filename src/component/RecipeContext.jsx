import axios from "axios";
import { createContext, useState } from "react";
import React from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [savedRecipes, setSavedRecipes] = useState(
    JSON.parse(localStorage.getItem("savedRecipes")) || []
  );

  // Cache object to store fetched recipes by query
  const recipeCache = new Map();

  const fetchRecipes = async (query) => {
    setLoading(true);
    setError(null); // Reset the error state

    // Check if the query is already cached
    if (recipeCache.has(query)) {
      console.log("Using cached data for query:", query);
      setRecipes(recipeCache.get(query)); // Use cached data
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`https://api.edamam.com/api/recipes/v2`, {
        params: {
          type: "public",
          q: query,
          app_id: "85d36345", // Your APP_ID
          app_key: "b87065da3b95b9f6399d2d6863812d1d", // Your API_KEY
        },
      });

      console.log("Fetched Data:", response.data); // Log the entire response
      console.log("Recipe Hits:", response.data.hits); // Log the hits array

      const fetchedRecipes = response.data.hits;

      // Cache the results
      recipeCache.set(query, fetchedRecipes);

      setRecipes(fetchedRecipes); // Set the fetched recipes
    } catch (err) {
      console.error("Error fetching recipes:", err);
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setLoading(false); // Stop loading after the request
    }
  };

  const saveRecipe = (recipe) => {
    const updatedSavedRecipes = [...savedRecipes, recipe];
    setSavedRecipes(updatedSavedRecipes);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedRecipes));
  };

  const removeRecipe = (recipeLabel) => {
    const updatedSavedRecipes = savedRecipes.filter(
      (saved) => saved.label !== recipeLabel
    );
    setSavedRecipes(updatedSavedRecipes);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedRecipes));
  };

  const toggleSaveRecipe = (recipe) => {
    if (
      savedRecipes.some(
        (savedRecipe) => savedRecipe.recipe.label === recipe.recipe.label
      )
    ) {
      setSavedRecipes(
        savedRecipes.filter(
          (savedRecipe) => savedRecipe.recipe.label !== recipe.recipe.label
        )
      );
    } else {
      setSavedRecipes([...savedRecipes, recipe]);
    }
  };

  return (
    <RecipeContext.Provider
      value={{
        error,
        loading,
        fetchRecipes,
        recipes,
        saveRecipe,
        savedRecipes,
        removeRecipe,
        toggleSaveRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
