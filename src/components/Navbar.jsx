import React, { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(()=>{
    if(theme==="dark"){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },[theme])

  const toggleTheme = () => {
    setTheme(theme==="dark" ? "light" : "dark");
    props.onSetBg();
  }
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200/80 dark:bg-zinc-900/80 dark:text-white dark:hover:bg-black/90 fixed drop-shadow-lg hover:bg-sky-800/90 hover:text-white text-xl">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="hidden md:flex ">
          <p className="border-none bg-transparent ml-4 hover:cursor-pointer hover:-translate-y-2 hover:duration-700 hover:text-green-500">
            <Link to="home" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </p>
        </div>
        <div className="flex items-center pr-4">
          <ul className="hidden md:flex">
            <li>
              <Link to="about" smooth={true} offset={50} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} offset={50} duration={500}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="hire" smooth={true} offset={50} duration={500}>
                Hire
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} offset={50} duration={500}>
                Contact
              </Link>
            </li>
            <LightBulbIcon onClick={toggleTheme} className="w-6 m-4 hover:cursor-pointer hover:-translate-y-2 hover:duration-700 hover:text-green-500" />
          </ul>
        </div>
        <div className="md:hidden pr-12" onClick={handleClick}>
          {!nav ? <Bars3Icon className="w-9 cursor-pointer" /> : <XMarkIcon className="w-9 cursor-pointer" />}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 hover:text-black text-black"
        }
      >
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="home" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="portfolio" smooth={true} offset={50} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="hire" smooth={true} offset={50} duration={500}>
            Hire
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
        <LightBulbIcon onClick={toggleTheme} className="w-10 m-2 hover:cursor-pointer hover:-translate-y-2 hover:duration-700 hover:text-green-500" />
        </li>
        <div className="flex flex-col my-4">
          <button className="px-8 py-3" onClick={handleClick}>
            Close
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
