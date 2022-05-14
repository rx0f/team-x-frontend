import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navHidden, setNavHidden] = useState(true);

  return (
    <>
      <div className="w-full px-4 py-2">
        <div className="bg-white w-full p-2 lg:p-4 rounded-xl drop-shadow-md flex items-center justify-between">
          <img className="h-8" src="/assets/shared/logo.svg" alt="" />
          <div className="hidden lg:flex gap-x-4 lg:gap-x-8 font-semibold text-lg text-dark-blue-one">
            <Link to="/">Home</Link>
            <Link to="/doctors">Doctors</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/aboutus">About us</Link>
          </div>
          <div className="flex items-center gap-x-2">
            <img
              className="rounded-full h-10"
              src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
              alt=""
            />
            <button
              className="flex flex-col gap-y-1 md:gap-y-2"
              onClick={() => {
                setNavHidden(!navHidden);
              }}
            >
              <div className="w-6 md:w-8 h-1 rounded-full bg-black" />
              <div className="w-6 md:w-8 h-1 rounded-full bg-black" />
              <div className="w-6 md:w-8 h-1 rounded-full bg-black" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex-col items-end text-lg text-dark-blue-one ${
          navHidden ? "hidden" : "flex"
        }`}
      >
        <div className="flex z-50 flex-col items-start p-4 text-xl gap-y-2 bg-white mr-4 rounded-xl absolute top-20 lg:top-24 drop-shadow-md">
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Doctors</Link>
          <button>Disconnect</button>
          <div className="flex flex-col gap-y-2 lg:hidden">
            <Link to="/">Home</Link>
            <Link to="/doctors">Doctors</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/aboutus">About us</Link>
          </div>
        </div>
      </div>
    </>
  );
}
