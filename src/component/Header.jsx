import React from "react";
import { BsMoon } from "react-icons/bs";
import { GoBookmark } from "react-icons/go";

function Header() {
  return (
    <div className="flex justify-between items-center fixed top-0 w-full z-40 bg-white px-5 h-[4.5rem] shadow">
      <div className="font-bold text-xl">LOGO</div>
      <ul className="hidden md:flex uppercase gap-10 items-center justify-center">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Recipe</a>
        </li>
      </ul>
      <div className="flex gap-5 justify-center items-center">
        <BsMoon className="text-2xl text-black" />
        <button className="hidden md:flex bg-orange-400 p-3 gap-1 justify-center rounded-md items-center ">
          <GoBookmark className="text-[22px]" /> 
          <p>Saved Recipes</p>
        </button>
      </div>
    </div>
  );
}

export default Header;
