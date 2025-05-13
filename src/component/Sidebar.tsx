import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, HardDrive, Monitor, Users, Clock, Star, Trash2, Cloud, FolderPlus, Upload, UploadCloud } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../component/redux/slices";
import { toast } from "react-toastify";

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.global.open);
  const openMenu = useSelector((state) => state.global.openMenu);

  const menuItems = [
    { icon: <Home size={20} />, label: "Home", path: "/home" },
    // { icon: <HardDrive size={20} />, label: "My Drive", path: "/my-drive" },
    // { icon: <Monitor size={20} />, label: "Computers", path: "/computers" },
    // { icon: <Users size={20} />, label: "Shared with me", path: "/shared-with-me" },
    // { icon: <Clock size={20} />, label: "Recent", path: "/recent" },
    // { icon: <Star size={20} />, label: "Starred", path: "/starred" },
    // { icon: <Trash2 size={20} />, label: "Trash", path: "/trash" },
    // { icon: <Cloud size={20} />, label: "Storage", path: "/quota" },
  ];

  const newMenuItems = [
    {
      label: "New folder",
      icon: <FolderPlus className="w-4 h-4" />,
      action: () => toast("New folder created!"),
    },
    {
      label: "File upload",
      icon: <Upload className="w-4 h-4" />,
      action: () => document.getElementById("fileInput")?.click(),
    },
    {
      label: "Folder upload",
      icon: <UploadCloud className="w-4 h-4" />,
      action: () => document.getElementById("folderInput")?.click(),
    },
  ];

  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth < 768) {
        setShouldShow(openMenu);
      } else {
        setShouldShow(true);
      }
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => window.removeEventListener("resize", checkWindowSize);
  }, [openMenu]);

  return (
    <>
    {shouldShow && <div className="w-64 h-screen bg-gray-100 p-4 border-r lg:w-80 xl:w-64">
      <div className="p-6 max-w-xl mx-auto">
        {/* New Button */}
        <div className="relative">
          <button
            className="bg-white text-black py-2 px-4 rounded border w-full shadow-sm"
            onClick={() => dispatch(setOpen(!open))} 
          >
            + New
          </button>

          {/* Conditionally render the New Menu if open is true */}
          {open && (
            <ul className="absolute z-10 bg-white border rounded shadow w-full mt-2 py-2">
              {newMenuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    item.action();
                    dispatch(setOpen(false)); 
                  }}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Hidden Inputs for Upload */}
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) toast(`Selected file: ${file.name}`);
          }}
        />
        <input
          type="file"
          id="folderInput"
          className="hidden"
          webkitdirectory="true"
          directory=""
          onChange={(e) => {
            const files = e.target.files;
            if (files?.length)
              alert(`Uploaded folder with ${files.length} files`);
          }}
        />
      </div>

      <ul className="space-y-4">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 text-sm px-3 py-2 rounded-xl hover:bg-gray-200 ${
                  isActive
                    ? "bg-blue-200 font-semibold rounded-xl"
                    : "text-gray-700 rounded-xl"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center item-center mt-10 border-2 border-gray-400 rounded-2xl p-2 m-5">
        <a
          href="https://one.google.com/dynamic-plans?i=m&utm_source=drive&utm_medium=web&utm_campaign=g1_widget_normal&g1_landing_page=75#upgrade"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-blue-500 text-sm underline">
            Get more storage
          </button>
        </a>
      </div>
    </div> }
    </>
  );
};

export default Sidebar;
