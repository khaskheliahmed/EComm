import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">

    <Link to = {`/`} >
      <img src={assets.logo} className="w-36" alt="" />
      </Link>

      <ul className="hidden sm:flex flex-row items-center gap-6">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
        </NavLink>
        <NavLink to="/contect" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
        </NavLink>
      </ul>

      <div className="flex items-center gap-5">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <div className="group relative">
          <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">MY Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/card" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-2 bg-black text-white aspect-square rounded text-[8px]">10</p>
        </Link>

        <img
          onClick={() => setVisible(!visible)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* Sidebar menu for small devices */}
     {/* Sidebar menu for small devices */}
<div
  className={`fixed top-0 right-0 h-screen bg-white transition-all duration-300 z-50 ${
    visible ? "w-64" : "w-0"
  } overflow-hidden shadow-lg`}
>
  <div className="flex flex-col text-gray-600 h-full">
    {/* Close / Back button */}
    <div
      onClick={() => setVisible(false)}
      className="flex items-center gap-4 p-4 cursor-pointer border-b"
    >
      <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
      <p>Back</p>
    </div>

    {/* Links */}
    <nav className="flex flex-col mt-4">
      <NavLink
        to="/"
        onClick={() => setVisible(false)}
        className="py-3 px-6 border-b hover:bg-gray-100"
      >
        HOME
      </NavLink>
      <NavLink
        to="/collection"
        onClick={() => setVisible(false)}
        className="py-3 px-6 border-b hover:bg-gray-100"
      >
        COLLECTION
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => setVisible(false)}
        className="py-3 px-6 border-b hover:bg-gray-100"
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/contect"
        onClick={() => setVisible(false)}
        className="py-3 px-6 border-b hover:bg-gray-100"
      >
        CONTACT
      </NavLink>
    </nav>
  </div>
</div>

            
    </div>
  );
};

export default Navbar;
