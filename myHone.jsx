// import React, { useContext, useEffect, useState } from 'react';
// import { RecipeContext } from '../RecipeContext';

// function Home() {
//   const { fetchRecipes, recipes, loading, error, setLoading, setRecipes } = useContext(RecipeContext);
//   const [query, setQuery] = useState('');

//   const handleSearch = () => {
//     fetchRecipes(query); // Call fetchRecipes from the context
//   };

//    // Fetch default recipes when the component mounts
//    useEffect(() => {
//     const fetchDefaultRecipes = async () => {
//       setLoading(true);
//       const defaultRecipes = await fetchRecipes('chicken'); // Fetch "chicken" recipes as default
//       setRecipes(defaultRecipes);
//       setLoading(false);
//     };

//     fetchDefaultRecipes();
//   }, [setRecipes, setLoading]);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Recipe Finder</h1>
//       <div className="mb-4">
//         <input
//           type="text"
//           className="border rounded px-4 py-2 w-full"
//           placeholder="Search for recipes..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button
//           className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={handleSearch}
//         >
//           Search
//         </button>
//       </div>
//       {loading && <p>Loading...</p>}
//       {error && <p className="text-red-500">{error}</p>}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {recipes.map((recipe, index) => (
//           <div key={index} className="p-4 border rounded">
//             <h3 className="text-lg font-semibold">{recipe.recipe.label}</h3>
//             <img
//               src={recipe.recipe.image}
//               alt={recipe.recipe.label}
//               className="w-full h-32 object-cover rounded"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;


