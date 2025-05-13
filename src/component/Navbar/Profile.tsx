import React from 'react';
import Logout from '../Auth/Logout';

const ProfileModal = ({ onClose }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50 mr-2">
      <div className="flex justify-center items-center px-4 py-3 text-sm text-gray-700">👤 Abdul Hai</div>
      <hr />
      <ul className="text-sm text-gray-700">
        <li className="flex justify-center items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">My Account</li>
        <li className="flex justify-center items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
        <li className="flex justify-center items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600" onClick={onClose}><Logout /></li>
      </ul>
    </div>
  );
};

export default ProfileModal;
