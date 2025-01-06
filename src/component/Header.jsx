import React from "react";
import { BsMoon } from "react-icons/bs";

function Header() {
  return (
    <div className="flex justify-between items-center bg-white px-5 h-20 shadow">
      <div className="font-bold text-xl">LOGO</div>
      <BsMoon className="text-2xl text-black" />
    </div>
  );
}

export default Header;
