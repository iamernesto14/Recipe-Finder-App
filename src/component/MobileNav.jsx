import React from "react";
import { GoBookmark } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <div className="bg-white shadow fixed inset-x-0 bottom-0">
      <div className="flex justify-between items-center md:hidden px-5 py-3">
        {/* All recipe button */}
        <Link to='/all-recipes'>
        <div className="flex flex-col items-center">
          <TiThMenuOutline className="text-2xl" />
          <p className="text-sm">Recipe</p>
        </div>
        </Link>
        {/* Home button */}
        <Link to='/'>
        <div className="flex flex-col items-center">
          <GoHome className="text-2xl" />
          <p className="text-sm">Home</p>
        </div>
        </Link>
        
        {/* Favorite button */}
        <Link to="/saved-recipes">
        <div className="flex flex-col items-center">
          <GoBookmark className="text-2xl" />
          <p className="text-sm">Saved</p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
