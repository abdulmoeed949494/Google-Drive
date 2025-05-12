import React from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#f8f9fa] shadow-sm">
      <div className="flex items-center space-x-2">
        <img
          src="https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png"
          alt="Drive Logo"
          className="w-10 h-10"
        />
        <span className="text-[25px] text-[#202124] font-normal">Drive</span>
      </div>

      <div className="relative flex-1 mx-6 max-w-2xl">
        <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
          <Search className="w-4 h-4" />
        </span>
        <input
          type="text"
          placeholder="Search in Drive"
          className="w-full pl-10 pr-4 py-2 bg-white text-sm border border-[#dadce0] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="hover:bg-[#e8eaed] p-2 rounded-full transition">
          <img
            src="https://img.icons8.com/material-outlined/24/5f6368/help.png"
            alt="Help"
            className="w-5 h-5"
          />
        </button>

        <button className="hover:bg-[#e8eaed] p-2 rounded-full transition">
          <img
            src="https://img.icons8.com/material-outlined/24/5f6368/settings.png"
            alt="Settings"
            className="w-5 h-5"
          />
        </button>

        <button className="hover:bg-[#e8eaed] p-2 rounded-full transition">
          <img
            src="https://img.icons8.com/ios-filled/30/5f6368/user-male-circle.png"
            alt="Profile"
            className="w-7 h-7 rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
