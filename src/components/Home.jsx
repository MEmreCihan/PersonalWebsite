import { useState } from "react";
import Navbar from "./Navbar";
import off from "../assets/off.jpg";
import on from "../assets/on.jpg";

const Home = () => {
  const [bgDark, setBgDark] = useState(false);
  const setBg = () => {
    setBgDark(!bgDark);
  };
  return (
    <div name="home" className="w-full h-screen">
      <Navbar onSetBg={setBg} />
      <div className="w-full h-full absolute shadow-md bg-gradient-to-b from-transparent to-zinc-200">
        {bgDark ? (
          <img
            src={on}
            alt="/"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        ) : (
          <img
            src={off}
            alt="/"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        )}
      </div>
      <div className="grid relative h-screen place-items-center">
        <div className="p-4">
          <h1 className="text-6xl font-bold text-gray-700 font-serif my-2">
            Hi!
          </h1>
          <h1 className="text-4xl font-bold text-gray-800 font-serif my-2">
            I am Mülayim Emre Cihan
          </h1>
          <p className="text-4xl text-gray-700 font-extralight my-4">
            FRONTEND WEB DEVELOPER
          </p>
          <a
            href="https://github.com/MEmreCihan"
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full h-12 rounded-3xl sm:w-32 ">
              Visit My Work
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
