import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero -mt-16 flex justify-center  ">
      <div className="hero-content text-center ">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold ">
            Welcome to{" "}
            <span className=" bg-gradient-to-r from-[#2a6e64] via-[#043b3466] to-[#488076a1] text-transparent bg-clip-text bg-300% animate-gradient">
              DevCrafted
            </span>
          </h1>
          <p className="py-6">
            DevCrafted is where coding becomes creation — tools, tips, and
            projects tailored for modern developers.
          </p>
          <div className="flex justify-center gap-2">
            <Link
              to="/blogs"
              className="w-40 text-center relative inline-flex items-center justify-center px-6 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group text-md hover:text-black"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-accent rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Read Blogs</span>
            </Link>

            <Link
              to="/bookmarks"
              className="w-40 text-center relative inline-flex items-center justify-center px-6 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group text-md hover:text-black"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-accent rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Bookmarks</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
