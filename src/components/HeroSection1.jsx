import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const HeroSection1 = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Experience the Future of Technology with Us",
        "Empowering Your Journey with GIITech Drones",
        "Precision, Performance, and Innovation in Every Flight",
        "Take Flight and Discover Limitless Possibilities with GIITech",
      ], // Texts to auto-type
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy(); // Clean up the effect on unmount
    };
  }, []);

  return (
    <div className="s ml-0 md:ml-8 lg:col-span-8 rounded bg-gradient-to-r from-slate-800 via-gray-900 to-gray-950 p-4 shadow-lg w-full">
      {/* Auto-writing effect using Typed.js */}
      <h1 className="text-left text-cyan-500 font-thin text-3xl md:text-5xl">
        <span ref={typedRef}></span>
      </h1>

      {/* Desktop display: Visible on lg, hidden on md and smaller */}

      {/* Mobile display: Visible on md and smaller, hidden on lg */}
      <p className="block md:block  text-gray-300 mt-6 text-sm font-light">
        Power your tech dreams today with GiiTech Drones <br />
        <Link
          //   to="/products"
          className="btn btn-sm m-2 animate-pulse bg-neon-green hover:bg-green-500 transition duration-300 ease-in-out text-black font-medium"
        >
          Shop Now
        </Link>
      </p>
    </div>
  );
};

export default HeroSection1;
