import axios from "axios";
import { createContext, useState } from "react";
import React from 'react'


export const RecipeContext = createContext();



export const RecipeProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [savedRecipes, setSavedRecipes] = useState([]);

    const fetchRecipes = async (query) => {
        setLoading(true);
        setError(null); // Reset the error state
        try {
          const response = await axios.get(
            `https://api.edamam.com/api/recipes/v2`,
            {
              params: {
                type: 'public',
                q: query,
                app_id: 'e063f4ab', // Your APP_ID
                app_key: 'd756ed9de0bce4acf63116720d269f45', // Your API_KEY
              },
            }
          );
          console.log('Fetched Data:', response.data); // Log the entire response
          console.log('Recipe Hits:', response.data.hits); // Log the hits array
          setRecipes(response.data.hits); // Set the fetched recipes
        } catch (err) {
          console.error('Error fetching recipes:', err);
          setError('Failed to fetch recipes. Please try again.');
        } finally {
          setLoading(false); // Stop loading after the request
        }
      };

      const saveRecipe = (recipe) => {
        setSavedRecipes((prev) => {
          const alreadySaved = prev.find((r) => r.label === recipe.label);
          return alreadySaved ? prev : [...prev, recipe];
        });
      };
    
      const unsaveRecipe = (recipeLabel) => {
        setSavedRecipes((prev) =>
          prev.filter((recipe) => recipe.label !== recipeLabel)
        );
      };

  return (
    <RecipeContext.Provider value={{error, loading, fetchRecipes, recipes, saveRecipe, savedRecipes, unsaveRecipe }}>
        {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider;
