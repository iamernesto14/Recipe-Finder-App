import React from "react";
import { GoBookmark } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { TiThMenuOutline } from "react-icons/ti";

function MobileNav() {
  return (
    <div className="bg-white shadow-2xl fixed inset-x-0 bottom-0">
      <div className="flex justify-between items-center px-5 py-4">
        <div className="flex flex-col items-center">
          <TiThMenuOutline className="text-4xl" />
          <p className="text-lg">Recipe</p>
        </div>
        <div className="flex flex-col items-center">
          <GoHome className="text-4xl" />
          <p className="text-lg">Home</p>
        </div>
        <div className="flex flex-col items-center">
          <GoBookmark className="text-4xl" />
          <p className="text-lg">Saved</p>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;