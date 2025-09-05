import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logOut = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-7 font-medium"> 
      {/* Bigger Navbar height */}
      
      {/* Logo */}
      <Link to="/">
        <img
          src="https://i.ibb.co/spk2bZNf/Screenshot-2025-09-04-140749-removebg-preview.png"
          className="w-48"  // Bigger logo
          alt="logo"
        />
      </Link>

      {/* Navbar Links */}
      <ul className="hidden sm:flex gap-7 text-lg text-gray-700"> 
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/collection"} className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-8"> 
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-6 cursor-pointer"  // Bigger search icon
          alt="search_icon"
        />

        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            className="w-6 cursor-pointer"  // Bigger profile icon
            alt="profile_icon"
          />

          {/* Dropdown Menu */}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logOut} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-6 min-w-6"  // Bigger cart icon
            alt="cart_icon"
          />
          <p className="absolute right-[-6px] bottom-[-6px] w-5 text-center leading-5 bg-black text-white aspect-square rounded-full text-[10px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Menu Icon (Mobile) */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-6 cursor-pointer sm:hidden"  // Bigger menu icon
          alt="menu_icon"
        />
      </div>

     {/* Sidebar menu for small screen */}
<div
  className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ease-in-out shadow-lg ${
    visible ? "w-full" : "w-0"
  }`}
>
  <div className="flex flex-col items-center justify-center h-full text-gray-700 space-y-4">
    {/* Back Button */}
    <div
      onClick={() => setVisible(false)}
      className="absolute top-5 left-5 flex items-center gap-2 cursor-pointer"
    >
      <img
        src={assets.dropdown_icon}
        className="h-5 rotate-180"
        alt="dropdown_icon"
      />
      <p className="text-lg">Back</p>
    </div>

    {/* Menu Options with border but not full width */}
    <NavLink
      onClick={() => setVisible(false)}
      className="px-6 py-2 text-xl font-semibold border rounded-lg hover:bg-gray-100 hover:text-blue-500 transition"
      to="/"
    >
      HOME
    </NavLink>
    <NavLink
      onClick={() => setVisible(false)}
      className="px-6 py-2 text-xl font-semibold border rounded-lg hover:bg-gray-100 hover:text-blue-500 transition"
      to="/collection"
    >
      COLLECTION
    </NavLink>
    <NavLink
      onClick={() => setVisible(false)}
      className="px-6 py-2 text-xl font-semibold border rounded-lg hover:bg-gray-100 hover:text-blue-500 transition"
      to="/about"
    >
      ABOUT
    </NavLink>
    <NavLink
      onClick={() => setVisible(false)}
      className="px-6 py-2 text-xl font-semibold border rounded-lg hover:bg-gray-100 hover:text-blue-500 transition"
      to="/contact"
    >
      CONTACT
    </NavLink>
  </div>
</div>

    </div>
  );
};

export default Navbar;
