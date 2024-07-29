import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar({darkMode,lightmode,darkmode}) {
  const [open, setOpen] = useState(false);
  const linkCss="relative  hover:text-orange-400  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-400 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:-top-1 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-400 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:-top-1 after:right-[50%]"
  const menu = () => {
    setOpen(!open);
  };
 
  return (
    <div className="mb-3">
      <header className=" md:px-16 px-4 py-1 sm:py-0  flex flex-wrap items-center  shadow-md shadow-orange-300">
        <div className="flex-1 flex justify-between items-center">
          <Link
            to="/porfolio"
            className=" relative text-3xl hover:text-orange-400  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-400 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-400 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:top-0 after:right-[50%] "
          >
            Javed
          </Link>
          {!darkMode?<button className="sm:text-2xl mx-6" onClick={darkmode}><FaMoon/></button>:<button className="sm:text-2xl mx-6" onClick={lightmode}><FaSun/></button>}
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor sm:hidden block">
          <span
            className="fill-current font-bold text-xl text-gray-900"
            onClick={menu}
          >
            {!open ? <span className="text-cyan-700 font-bold text-xl"><RiMenuFill /></span> : <span className="text-cyan-800 font-bold text-xl"><RiCloseFill /></span>}
          </span>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className={`sm:flex sm:items-center sm:w-auto w-full `} id="menu">
          <nav className="flex gap-4">
            <ul
              className={`sm:flex items-center z-10 justify-between sm:text-2xl font-semibold  pt-4 sm:pt-0 ${
                open
                  ? "block relative z-10  w-full ml-0  "
                  : "hidden"
              }`}
            >
              <li className="mx-2  sm:py-3">
                <Link
                className={linkCss }
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="mx-2 py-1 sm:py-3">
                <Link
                  className={linkCss}
                  to="/stack"
                >
                  Tech-Stack
                </Link>
              </li>
              <li className="mx-2 py-1 sm:py-3">
                <Link
                className={linkCss}
                to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="mx-2 py-1 sm:py-3">
                <Link
                className={linkCss}
                to="/contact"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
            </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
