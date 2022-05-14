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
              src="https://scontent.falg2-2.fna.fbcdn.net/v/t1.6435-9/106904416_834570883950575_2444049961754063289_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_eui2=AeFW8hpOv6JebeeWXDJz1DMfG6o0E_yHUOsbqjQT_IdQ62uikP860q0J_3xXljtCE0lgkjPzK4Hrki1cZdKlMXJR&_nc_ohc=KfLOroSSE2AAX_2vSc2&tn=_TZPD1ds9n9MCXVP&_nc_ht=scontent.falg2-2.fna&oh=00_AT821qzKUH5Cm8dioU7WIX1lJC6T6U1VxKg9VTKFoAeNXQ&oe=62A54B06"
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
