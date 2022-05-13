import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="w-full px-4 py-2">
      <div className="bg-white w-full p-2 lg:p-4 rounded-xl drop-shadow-md flex items-center justify-between">
        <h1>Logo here</h1>
        <div className="hidden md:flex gap-x-4 lg:gap-x-8 font-semibold text-lg text-dark-blue-one">
            <Link to="/">Home</Link>
            <Link to="/doctors">Doctors</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/aboutus">About us</Link>
        </div>
        <div className="flex items-center gap-x-2">
            <img className="rounded-full h-10" src="https://images.generated.photos/Vnt71-C7QSF6mEaQCu636HMzkxZQp9rUtgQ8dVRKGCs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjAxMzY0LmpwZw.jpg" alt="" />
            <button className="flex flex-col gap-y-1 md:gap-y-2">
                <div className="w-6 md:w-8 h-1 rounded-full bg-black"/>
                <div className="w-6 md:w-8 h-1 rounded-full bg-black"/>
                <div className="w-6 md:w-8 h-1 rounded-full bg-black"/>
            </button>
        </div>
      </div>
    </div>
  );
}
