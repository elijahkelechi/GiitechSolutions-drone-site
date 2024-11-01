import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const BigScreenNavBar = () => {
  return (
    <div className="hidden md:flex navbar z-50 bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="navbar-start">
        <NavLink to="/">
          <img
            className="border border-solid border-white rounded-full h-12 w-12 object-cover"
            src={logo}
            alt="Logo"
          />
        </NavLink>
      </div>
      <div className="navbar-center flex-grow text-cyan-900 font-extrabold">
        <NavLink
          className={({ isActive }) =>
            `mx-4 text-white hover:text-cyan-300 transition duration-300 ${
              isActive ? "text-cyan-300 font-bold" : ""
            }`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `mx-4 text-white hover:text-cyan-300 transition duration-300 ${
              isActive ? "text-cyan-300 font-bold" : ""
            }`
          }
          to="/aboutUs"
        >
          About Us
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `mx-4 text-white hover:text-cyan-300 transition duration-300 ${
              isActive ? "text-cyan-300 font-bold" : ""
            }`
          }
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `mx-4 text-white hover:text-cyan-300 transition duration-300 ${
              isActive ? "text-cyan-300 font-bold" : ""
            }`
          }
          to="/gallery"
        >
          Gallery
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `btn btn-md mx-4 font-normal text-lg bg-cyan-500 text-white px-4 py-2 rounded-xl hover:bg-cyan-600 transition duration-300 ${
              isActive ? "bg-cyan-600" : ""
            }`
          }
          // to="/products"
        >
          Shop Now!
        </NavLink>
      </div>
      <div className="navbar-end text-gray-900">
        <NavLink
          className={({ isActive }) =>
            `mx-4 text-white hover:text-cyan-300 transition duration-300 ${
              isActive ? "text-cyan-300 font-bold" : ""
            }`
          }
          to="/events"
        >
          Events
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `btn first:md:mx-1 lg:mx-2 bg-cyan-500 text-white px-4 py-2 rounded-xl hover:bg-cyan-600 transition duration-300 ${
              isActive ? "bg-cyan-600" : ""
            }`
          }
          to="/training"
        >
          Get Trained!
        </NavLink>
      </div>
    </div>
  );
};

export default BigScreenNavBar;
