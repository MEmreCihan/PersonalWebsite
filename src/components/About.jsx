import React from "react";
import myImg from "../assets/pp.jpg";
import myCv from "../assets/my-cv.pdf";

const About = () => {
  return (
    <div name="about" className="md:grid md:grid-cols-2 p-4 gap-2 drop-shadow-lg dark:bg-zinc-800 w-full h-full">
      <div className="flex justify-center items-center">
        <img src={myImg} alt="/" className="rounded-full h-[60%]"></img>
      </div>
      <div className="text-left grid h-screen">
        <p className="text-zinc-400 font-extralight text-xl dark:text-white my-2">Who am I?</p>
        <h2 className="text-sky-800 font-bold text-4xl my-2">About Me</h2>
        <p className="font-light text-zinc-500 dark:text-white text-lg my-4">
          After a number of bachelor's degrees in security science, public
          administration, and psychological counselling. I realise that the
          computer science and software development is my real focus of
          interest. I have recently started learning to code in front-end
          environments.
          <br /> I can describe myself as an ambitious individual who is eager
          to learn. I`d also describe myself as a social individual who enjoys
          being a team player. When it comes to my weaknesses, I find it hard to
          ignore small issues which ultimately turn into bigger problems.
          Finally my vision is all about productivity. I feel most satisfied
          when I create something. I want my projects to open doors to new
          explorations and creativity.
        </p>
        <a href={myCv} download="Cv">
          <button className="w-full h-12 rounded-3xl sm:w-32">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
