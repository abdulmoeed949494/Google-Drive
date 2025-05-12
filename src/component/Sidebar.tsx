import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  HardDrive,
  Monitor,
  Users,
  Clock,
  Star,
  Trash2,
  Cloud,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: <Home size={20} />, label: "Home", path: "/home" },
    { icon: <HardDrive size={20} />, label: "My Drive", path: "/my-drive" },
    { icon: <Monitor size={20} />, label: "Computers", path: "/computers" },
    {
      icon: <Users size={20} />,
      label: "Shared with me",
      path: "/shared-with-me",
    },
    { icon: <Clock size={20} />, label: "Recent", path: "/recent" },
    { icon: <Star size={20} />, label: "Starred", path: "/starred" },
    { icon: <Trash2 size={20} />, label: "Trash", path: "/trash" },
    {
      icon: <Cloud size={20} />,
      label: "Storage",
      path: "/quota",
    //   extra: "40.1 MB of 15 GB used",
    },
  ];

  return (
    <div className="w-64 h-screen bg-gray-100 p-4 border-r">
      <button className="bg-blue-100 text-black py-2 px-4 rounded mb-6 w-full">
        + New
      </button>

      <ul className="space-y-4">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 text-sm px-3 py-2 rounded-xl hover:bg-gray-200 ${
                  isActive ? "bg-blue-200 font-semibold rounded-xl" : "text-gray-700 rounded-xl"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {/* {item.extra && (
                  <span className="ml-auto text-xs text-gray-500">
                    {item.extra}
                  </span>
                )} */}
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
    </div>
  );
};

export default Sidebar;
