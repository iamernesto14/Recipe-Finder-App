// import React, { createContext, useState } from 'react';
// import axios from 'axios';

// export const RecipeContext = createContext();

// export const RecipeProvider = ({ children }) => {
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchRecipes = async (query) => {
//     try {
//       const response = await axios.get(
//         `https://api.edamam.com/api/recipes/v2`,
//         {
//           params: {
//             type: 'public',
//             q: query,
//             app_id: '809e5243',
//             app_key: '4725c532f0a3982d9d4192a67cbd39ae',
//           },
//         }
//       );
      
//       return response.data.hits;
//     } catch (error) {
//       if (error.response && error.response.status === 429) {
//         console.error('Rate limited, retrying in 5 seconds...');
//         await new Promise((resolve) => setTimeout(resolve, 5000));
//         return fetchRecipes(query); // Retry after 5 seconds
//       } else {
//         console.error('Error fetching recipes:', error);
//         return [];
//       }
//     }
//   };

//   return (
//     <RecipeContext.Provider
//       value={{ recipes, setError, loading, error, setLoading, setRecipes }}
//     >
//       {children}
//     </RecipeContext.Provider>
//   );
// };

