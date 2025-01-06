import axios from "axios";
import { createContext, useState } from "react";
import React from 'react'


export const RecipeContext = createContext();



export const RecipeProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

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
                app_id: '809e5243', // Your APP_ID
                app_key: '4725c532f0a3982d9d4192a67cbd39ae', // Your API_KEY
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

  return (
    <RecipeContext.Provider value={{error, loading, fetchRecipes, recipes, }}>
        {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider;
