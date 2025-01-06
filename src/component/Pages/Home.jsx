// Home.jsx
import React, { useContext, useState, useEffect } from "react";
import Header from "../Header";
import MobileNav from "../MobileNav";
import RecipeCard from "../RecipeCard";
import { LuSearch } from "react-icons/lu";
import { GiKnifeFork } from "react-icons/gi";
import { RecipeContext } from "../RecipeContext";
import Footer from "../Footer";

function Home() {
  const { fetchRecipes, recipes, loading, error } = useContext(RecipeContext);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("breakfast");
  const [visibleRecipes, setVisibleRecipes] = useState(4);

  // Fetch default recipes on page load or when the active category changes
  useEffect(() => {
    if (activeCategory) {
      fetchRecipes(activeCategory);
      setVisibleRecipes(6); // Reset visible recipes on category change
    }
  }, [activeCategory]);

  const handleSearch = () => {
    if (query.trim()) {
      fetchRecipes(query);
      setActiveCategory(""); // Clear the active category when performing a search
      setVisibleRecipes(6); // Reset visible recipes on search
    }
  };

  const handleCategoryClick = (category) => {
    if (activeCategory !== category) {
      setActiveCategory(category); // Only set the active category if it changes
    }
  };

  const handleSeeMore = () => {
    setVisibleRecipes((prev) => Math.min(prev + 5, recipes.length));
  };

  return (
    <div className="bg-gray-100 h-[100vh]">
      <Header />
      {/* Hero Section */}
      <div className="relative flex items-center justify-center gap-4 flex-col h-[350px] bg-hero-bg bg-cover bg-center m-2 rounded-lg overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl text-white font-bold">Your desire dish?</h1>
          <div className="mt-4">
            <div className="flex justify-between items-center bg-white w-[320px] rounded-md overflow-hidden shadow-md">
              <GiKnifeFork className="m-3 text-black text-lg" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search recipe..."
                className="w-full outline-none px-2 py-2 text-gray-600"
              />
              <div
                className="flex items-center justify-center bg-yellow-600 p-3 text-white"
                onClick={handleSearch}
              >
                <LuSearch className="text-black text-lg cursor-pointer" />
              </div>
            </div>
          </div>
          <p className="text-white text-sm mt-2">
            Search any recipe. e.g burger, pizza, sandwich
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 my-4">
        {[
          { label: "Breakfast", value: "breakfast" },
          { label: "Lunch", value: "lunch" },
          { label: "Dinner", value: "dinner" },
          { label: "Snacks", value: "snacks" },
        ].map((category) => (
          <button
            key={category.value}
            onClick={() => handleCategoryClick(category.value)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === category.value
                ? "bg-yellow-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {recipes.length > 0 ? (
          recipes.slice(0, visibleRecipes).map((recipeObj, index) => (
            <RecipeCard key={index} recipe={recipeObj.recipe} />
          ))
        ) : (
          !loading && <p className="text-gray-500 col-span-2 md:col-span-3">Recipe not found.</p>
        )}
      </div>

      {recipes.length > visibleRecipes && (
        <div className="flex justify-center my-4">
          <button
            onClick={handleSeeMore}
            className="px-4 py-2 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700"
          >
            See More
          </button>
        </div>
      )}

      <Footer />
      <MobileNav />
    </div>
  );
}

export default Home;
