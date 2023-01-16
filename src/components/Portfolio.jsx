import React from "react";
import movieList from "../assets/MovieList.png";
import eCommerce from "../assets/e-commerce.png";
import gitHub from "../assets/GitHub.png";
import Hire from "./Hire";

const Portfolio = () => {
  return (
    <div className="dark:bg-zinc-800 h-full py-12" name="portfolio">
      <div className="text-center mb-8 py-12">
        <p className="text-zinc-400 dark:text-white font-extralight text-xl py-4">What I Did</p>
        <h1 className="text-sky-800 font-bold text-4xl my-4">Portfolio</h1>
      </div>
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 pb-12">
        <div className="mx-2 my-4 grid h-[480px] place-items-center">
          <a href="https://memrecihan.github.io/MovieList-React/" target="_blank" rel="noreferrer">
            <img
              src={movieList}
              alt="/"
              className="h-[230px] rounded-2xl"
            ></img>
          </a>
          <p className="font-semibold text-sky-800 text-lg my-4 text-center">
            Movie List
          </p>
          <div>
            <p className="my-2 font-semibold text-xl dark:text-zinc-300">User functions:</p>
              <p className="p-1 dark:text-white">Add movie</p>
              <p className="p-1 dark:text-white">Remove movie</p>
              <p className="p-1 dark:text-white">Mark the movie you watched</p>
          </div>
        </div>
        <hr className="sm:hidden h-[2px] bg-black" />
        <div className="mx-2 my-4 grid h-[480px] place-items-center">
          <a href="https://MEmreCihan.github.io/MyShoppingApp" target="_blank" rel="noreferrer">
            <img
              src={eCommerce}
              alt="/"
              className="h-[230px] rounded-2xl"
            ></img>
          </a>
          <p className="font-semibold text-sky-800 text-lg my-4 text-center">
            E-Commerce
          </p>
          <div>
            <p className="my-2 font-semibold text-xl dark:text-zinc-300">Used Technologies:</p>
              <p className="p-1 dark:text-white">Redux</p>
              <p className="p-1 dark:text-white">React-Router</p>
              <p className="p-1 dark:text-white">API Services</p>
              <p className="p-1 dark:text-white">Tailwind.css</p>
          </div>
        </div>
        <hr className="sm:hidden h-[2px] bg-black" />

        <div className="mx-2 my-4 grid h-[480px] place-items-center">
          <a href="https://github.com/MEmreCihan" target="_blank" rel="noreferrer">
            <img src={gitHub} alt="/" className="h-[230px] rounded-2xl"></img>
          </a>
          <p className="font-semibold text-sky-800 text-lg my-4 text-center">
            More Project
          </p>
        </div>
      </div>
      <Hire />
    </div>
  );
};

export default Portfolio;
