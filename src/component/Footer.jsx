import React from "react";

function Footer() {
  return (
    <div className="text-sm pb-[104px] md:pb-5 pt-10 dark:bg-main-900 text-center dark:text-main-100">
      <hr className="bg-black mb-3 h-[2px]" />

      <div className="mx-5 md:flex justify-between items-center">
        <p>All Right Reserved &copy; 2025</p>

        <p className="text-center mt-2">Powered by <img src="" alt="" /> </p>
      </div>
    </div>
  );
}

export default Footer;
