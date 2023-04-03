import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <nav className="dark:bg-black max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-3xl">
      <a
        className="flex items-center font-bold p-2 bg-white rounded-full button-shadow"
        href="/src/assets/matejka_cv_en.pdf"
        target="_blank"
      >
        <span className="m-2">Resume</span>
        <FaFileDownload />
      </a>
      <div>
        <BsFillMoonFill size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
