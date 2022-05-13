import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

export default function Layout() {
  return (
    <div className="relative">
      <div className="fixed top-0 h-screen w-screen overflow-hidden">
        <div className="w-full h-full relative">
          <div className="bg-[#FFAB35] h-96 w-96 rounded-full blur-[200px] absolute top-0 right-0" />
          <div className="bg-[#54A4DE] h-[600px] w-[600px] rounded-full blur-[250px] absolute top-1/2 left-1/2 -translate-x-1/2" />
          <div className="bg-[#FFAB35] h-72 w-72 rounded-full blur-[200px] absolute bottom-0 left-0" />
        </div>
      </div>
      <div className="relative">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
