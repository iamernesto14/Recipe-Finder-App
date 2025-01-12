import React, { useState } from "react";
import { GoBookmark } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { TiThMenuOutline } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

function MobileNav() {
  const location = useLocation(); // Get the current route
  const isActive = (path) => location.pathname === path; // Check if the route matches

  return (
    <div className="bg-white dark:bg-main-600 dark:text-main-100 shadow fixed inset-x-0 bottom-0">
      <div className="flex justify-between items-center md:hidden px-5 py-3">
        {/* All Recipe Button */}
        <Link to="/all-recipes">
          <div
            className={`flex flex-col items-center ${
              isActive("/all-recipes") ? "text-orange-500" : ""
            }`}
          >
            <TiThMenuOutline className="text-2xl" />
            {!isActive("/all-recipes") && <p className="text-sm">Recipe</p>}
            {isActive("/all-recipes") && (
              <div className="w-full border-t-2 border-orange-500 mt-2"></div>
            )}
          </div>
        </Link>

        {/* Home Button */}
        <Link to="/">
          <div
            className={`flex flex-col items-center ${
              isActive("/") ? "text-orange-500" : ""
            }`}
          >
            <GoHome className="text-2xl" />
            {!isActive("/") && <p className="text-sm">Home</p>}
            {isActive("/") && (
              <div className="w-full border-t-2 border-orange-500 mt-2"></div>
            )}
          </div>
        </Link>

        {/* Favorite Button */}
        <Link to="/saved-recipes">
          <div
            className={`flex flex-col items-center ${
              isActive("/saved-recipes") ? "text-orange-500" : ""
            }`}
          >
            <GoBookmark className="text-2xl" />
            {!isActive("/saved-recipes") && <p className="text-sm">Saved</p>}
            {isActive("/saved-recipes") && (
              <div className="w-full border-t-2 border-orange-500 mt-2"></div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
