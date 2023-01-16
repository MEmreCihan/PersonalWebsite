import React from "react";
import Form from "./Form";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <div name="contact" className="p-6 dark:bg-zinc-800">
      <div className="text-center">
        <p className="text-zinc-400 font-extralight text-xl my-4">
          How can you communicate?
        </p>
        <h1 className="text-sky-800 font-bold text-4xl my-4">Contact Me</h1>
      </div>
      <Form />
      <div>
        <div className="grid grid-cols-4 ">
          <hr className="bg-zinc-400 h-1 col-start-2 col-span-2" />
        </div>
        <div className="grid grid-cols-4">
          <div className="flex justify-between col-start-2 col-span-2 my-6 h-16">
            <div className="flex items-center">
              <p className="text-xl">Copyright 2023 ©</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center">
                <a
                  href="https://www.linkedin.com/in/emre-cihan/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full w-12 h-12 hover:bg-sky-800  outline-none outline-offset-0 outline-sky-800 items-center flex justify-center"
                >
                  <FaLinkedinIn className=" text-sky-600 hover:text-white w-9 h-9" />
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="https://github.com/MEmreCihan"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full w-12 h-12 hover:bg-sky-800  outline-none outline-offset-0 outline-sky-800 items-center flex justify-center"
                >
                  <BsGithub className="w-9 h-9 text-sky-600 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
