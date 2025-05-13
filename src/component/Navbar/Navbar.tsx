import React, { useState } from "react";
import { Search, UserCircle, Menu } from "lucide-react"; // Import Menu icon for the hamburger menu
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "../redux/slices";
import { toggleOpenMenu } from "../redux/slices";
import ProfileModal from "./Profile";

const Navbar = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.global.isModalOpen);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Track hamburger menu open state

  // const dispatch = useDispatch();
  const openMenu = useSelector((state) => state.global.openMenu);

  return (
    <div className="bg-[#f8f9fa] shadow-sm px-4 py-2">
      {/* ==== Mobile Layout ==== */}
      <div className="flex flex-col md:hidden">
        {/* Top Row (Profile, Help, Settings) */}
        <div className="flex items-center justify-between mb-2">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png"
              alt="Drive Logo"
              className="w-10 h-10"
            />
            <span className="text-[22px] text-[#202124] font-normal">Drive</span>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            {/* Hamburger Menu for Mobile */}
            <div className="p-4 flex justify-between items-center md:hidden">
            <button className="text-2xl" onClick={() => dispatch(toggleOpenMenu())}>
        ☰ {/* or use an icon */}
      </button>
    </div>
            <button>
              <img
                src="https://img.icons8.com/material-outlined/24/5f6368/help.png"
                alt="Help"
                className="w-5 h-5"
              />
            </button>
            <button>
              <img
                src="https://img.icons8.com/material-outlined/24/5f6368/settings.png"
                alt="Settings"
                className="w-5 h-5"
              />
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              onClick={() => dispatch(setModalOpen(!isModalOpen))}
            >
              A
            </button>
          </div>
        </div>

        {/* Search Icon and Bar (Below the buttons) */}
        <div className="flex flex-col relative">
          {/* Search Icon */}
          <button
            className="self-end mb-1 z-10"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            <Search className="w-6 h-6 text-gray-600" />
          </button>

          {/* Search Bar - shown above */}
          {showMobileSearch && (
            <div className="mt-6 absolute top-0 left-0 w-full p-4 z-50">
              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
                  <Search className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  placeholder="Search in Drive"
                  className="w-full pl-10 pr-4 py-2 bg-white text-sm border border-[#dadce0] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Hamburger Menu Dropdown */}
        {isOpen && (
          <div className="mt-2 bg-white shadow-lg p-4 rounded-md space-y-2">
            <button
              className="block text-gray-800"
              onClick={() => dispatch(setModalOpen(!isModalOpen))}
            >
              Profile
            </button>
            <button className="block text-gray-800">Settings</button>
            <button className="block text-gray-800">Help</button>
          </div>
        )}
      </div>

      {/* ==== Desktop Layout ==== */}
      <div className="hidden md:flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png"
            alt="Drive Logo"
            className="w-10 h-10"
          />
          <span className="text-[25px] text-[#202124] font-normal">Drive</span>
        </div>

        {/* Search Bar */}
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

        {/* Desktop Right Icons */}
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
          <button
            onClick={() => dispatch(setModalOpen(!isModalOpen))}
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            A
          </button>
        </div>
      </div>

      {/* Profile Modal */}
      {isModalOpen && (
        <ProfileModal onClose={() => dispatch(setModalOpen(false))} />
      )}
    </div>
  );
};

export default Navbar;
