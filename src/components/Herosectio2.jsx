import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import accessoryImage1 from "../assets/accessoryImage1.jpg";
import accessoryImage2 from "../assets/accessoryImage2.jpg";
import accessoryImage3 from "../assets/accessoryImage3.jpg";

const Herosectio2 = () => {
  const typedRef2 = useRef(null); // Typing effect for the paragraph

  return (
    <div className="relative md:ml-8 lg:ml-8 lg:mt-24 md:col-span-8 text-center ">
      <div className="inset-0  absolute rounded bg-gradient-to-r from-cyan-800 via-cyan-900 to-cyan-950 opacity-70 p-6 shadow-lg"></div>
      {/* content div */}
      <div className="relative p-4 ">
        <h1 className="hidden md:flex text-left text-cyan-500 font-thin text-4xl md:text-4xl">
          <span>Accessories</span>
        </h1>

        {/* Header for mobile screens */}
        <h1 className="md:hidden text-left text-cyan-500 font-thin text-3xl pt-4">
          Accessories
        </h1>

        {/* Paragraph with typing effect for both screen sizes */}
        <p className="text-gray-300 text-left text-md mt-4">
          <span>
            Explore a wide range of drone accessories designed to enhance your
            flying experience. From high-capacity batteries that provide longer
            flight times to advanced gimbals that ensure smooth, stable footage,
            our selection caters to every need.
          </span>
        </p>

        {/* Accessories images */}
        <div className="flex gap-2 justify-center items-center py-6">
          <div className="bg-white rounded-md shadow-md w-full transition-transform transform hover:scale-105">
            <img
              src={accessoryImage1}
              className="w-full h-36 rounded-md"
              alt="Accessory 1"
            />
          </div>

          <div className="bg-white hidden md:flex rounded-md shadow-md w-full transition-transform transform hover:scale-105">
            <img
              src={accessoryImage2}
              className="w-full h-36 rounded-md "
              alt="Accessory 1"
            />
          </div>

          <div className="bg-white hidden md:flex rounded-md shadow-md w-full transition-transform transform hover:scale-105">
            <img
              src={accessoryImage2}
              className="w-full h-36 rounded-md "
              alt="Accessory 1"
            />
          </div>

          <div className="bg-white rounded-md shadow-md w-full transition-transform transform hover:scale-105">
            <img
              src={accessoryImage3}
              className="w-full h-36 rounded-md"
              alt="Accessory 3"
            />
          </div>
        </div>

        {/* Call to action button */}
        <Link
          className="btn btn-md bg-neon-green text-black font-semibold px-6 py-2 rounded-lg m-4 animate-bounce hover:bg-green-500 transition-all duration-300"
          to="/products"
        >
          Browse More
        </Link>
      </div>
    </div>
  );
};

export default Herosectio2;
