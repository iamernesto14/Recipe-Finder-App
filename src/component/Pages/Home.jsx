import React, { useContext, useState, useEffect } from "react";
import Header from "../Header";
import MobileNav from "../MobileNav";
import { LuSearch } from "react-icons/lu";
import { GiKnifeFork } from "react-icons/gi";
import { RecipeContext } from "../RecipeContext";
import RecipeCard from "../RecipeCard";
import Footer from "../Footer";
import LatestRecipesSection from "../LatestRecipesSection";

function Home() {
  const { fetchRecipes, recipes, loading, error } = useContext(RecipeContext);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("breakfast");
  const [visibleRecipes, setVisibleRecipes] = useState(4);
  const [chineseRecipes, setChineseRecipes] = useState([]);
  const [frenchRecipes, setFrenchRecipes] = useState([]);

  // Fetch default recipes on page load or when the active category changes
  useEffect(() => {
    if (activeCategory) {
      fetchRecipes(activeCategory);
      setVisibleRecipes(12); // Reset visible recipes on category change
    }
  }, [activeCategory]);

  useEffect(() => {
    // Fetch Chinese recipes
    fetchRecipes("chinese")
      .then((data) => {
        setChineseRecipes(Array.isArray(data) ? data.slice(0, 4) : []); // Ensure data is an array
      })
      .catch((err) => console.error("Error fetching Chinese recipes:", err));

    // Fetch French recipes
    fetchRecipes("french")
      .then((data) => {
        setFrenchRecipes(Array.isArray(data) ? data.slice(0, 4) : []); // Ensure data is an array
      })
      .catch((err) => console.error("Error fetching French recipes:", err));
  }, []);

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
    <div className="bg-main-200 dark:bg-main-900 dark:text-main-100 min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative flex items-center justify-center gap-4 flex-col h-[350px] mt-20 bg-hero-bg dark:bg-hero-bg2 bg-cover bg-center m-2 rounded-lg overflow-hidden">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold">Your desire dish?</h1>
            <div className="mt-4">
              <div className="flex justify-between items-center bg-white dark:bg-main-900 w-[320px] md:w-[700px] rounded-md overflow-hidden shadow-md">
                <div className="flex items-center justify-center dark:bg-main-600 p-3 text-white">
                <GiKnifeFork className="text-black text-lg dark:text-main-100" />
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search recipe..."
                  className="w-full outline-none px-2 py-2 text-gray-600 dark:text-main-100 dark:bg-main-900"
                />
                <div
                  className="flex items-center justify-center bg-yellow-600 p-3 text-white"
                  onClick={handleSearch}
                >
                  <LuSearch className="text-black text-lg cursor-pointer dark:text-main-100" />
                </div>
              </div>
            </div>
            <p className="text-white text-sm md:text-lg mt-2">
              Search any recipe. e.g burger, pizza, sandwich
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 md:gap-8 my-4">
          {[
            { label: "Breakfast", value: "breakfast" },
            { label: "Lunch", value: "lunch" },
            { label: "Dinner", value: "dinner" },
            { label: "Snacks", value: "snacks" },
          ].map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryClick(category.value)}
              className={`px-3 py-2 rounded-lg font-semibold transition-all duration-300 ${
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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
          {recipes.length > 0
            ? recipes
                .slice(0, visibleRecipes)
                .map((recipeObj, index) => (
                  <RecipeCard key={index} recipe={recipeObj.recipe} />
                ))
            : !loading && (
                <p className="text-gray-500 col-span-2 md:col-span-3">
                  Recipe not found.
                </p>
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

        {/* Latest Recipes Sections */}
        <LatestRecipesSection title="Latest Chinese Recipes" recipes={chineseRecipes} />
        <LatestRecipesSection title="Latest French Recipes" recipes={frenchRecipes} />
      </div>

      {/* Footer */}
      <Footer />
      <MobileNav />
    </div>
  );
}

export default Home;
