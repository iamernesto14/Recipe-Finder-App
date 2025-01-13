import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import Button from "./Button";

const FilterMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-[350px] h-screen bg-main-700 text-main-100 dark:bg-main-300 shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      {/* Close Button */}
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-semibold">Filter Recipes</h2>
        <button
          className="text-2xl text-gray-600 dark:text-gray-300"
          onClick={onClose}
        >
          <IoCloseSharp className="text-main-100" />
        </button>
      </div>

      {/* Search Input */}
      <div className="mx-4 pl-3 flex gap-1 items-center justify-center border border-main-100">
        <LuSearch className="" />
        <input
          type="text"
          placeholder="Search recipe..."
          className="w-full px-2 py-2 outline-none focus:outline-none bg-main-700 dark:bg-main-300 dark:border-main-600 dark:text-main-100"
        />
      </div>

      {/* Accordion Menu */}
      <div className="p-4 pb-[80px]"> {/* Add padding to avoid overlap */}
        <div className="space-y-4">
          {/* <details>
            <summary className="cursor-pointer font-semibold">Cuisine</summary>
            <div className="mt-2 space-y-2">
              <label className="block">
                <input type="checkbox" className="mr-2" /> Italian
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" /> Indian
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" /> Chinese
              </label>
            </div>
          </details> */}
          <details>
            <summary className="cursor-pointer font-semibold">Diet</summary>
            <div className="mt-2 space-y-2">
              <label className="block">
                <input type="checkbox" className="mr-2" /> Vegetarian
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" /> Vegan
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" /> Gluten-Free
              </label>
            </div>
          </details>
        </div>
      </div>

      {/* Apply and Clear Buttons */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-center gap-4 p-4 dark:bg-main-800 border-t border-gray-200">
        <Button className="bg-main-400" name="Clear" />
        <Button className="bg-orange-500" name="Apply" />
      </div>
    </div>
  );
};

export default FilterMenu;
