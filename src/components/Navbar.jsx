import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="mx-auto max-w-[70%] my-6 px-6 py-3 bg-blue-gray-500 rounded-xl lg:w-1/3">
        <ul className="flex items-center text-white w-1/2 mx-auto justify-evenly gap-5 navbar">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
