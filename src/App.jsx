// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Pages/Home";
import RecipeDetail from "./component/Pages/RecipeDetail";
import { RecipeProvider } from "./component/RecipeContext";
import AllRecipes from "./component/Pages/AllRecipes";
import SavedRecipe from "./component/Pages/SavedRecipe";

function App() {
  return (
    <RecipeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeLabel" element={<RecipeDetail />} />
        <Route path="/all-recipes" element={<AllRecipes />} />
        <Route path="/saved-recipes" element={<SavedRecipe />} />
      </Routes>
    </RecipeProvider>
  );
}

export default App;
