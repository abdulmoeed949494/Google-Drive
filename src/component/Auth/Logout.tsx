import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/login');
//   };

const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/login'; // Redirect to login page after logout
  };
  

  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
