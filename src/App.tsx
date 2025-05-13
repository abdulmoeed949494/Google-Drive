import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/Sidebar';
import Home from './component/Sidebar/Home';
import MyDrive from './component/Sidebar/MyDrive';
import Computers from './component/Sidebar/Computers';
import SharedWithMe from './component/Sidebar/SharedWithMe';
import Recent from './component/Sidebar/Recent';
import Starred from './component/Sidebar/Starred';
import Spam from './component/Sidebar/Spam';
import Trash from './component/Sidebar/Trash';
import Storage from './component/Sidebar/Storage';
import Login from './component/Auth/Login';
import Signup from './component/Auth/Signup';
import ProtectedRoute from './component/ProtectedRoute/Protected'; // Import ProtectedRoute
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Router>
      {/* Toast container added here */}
      <ToastContainer position="top-center" autoClose={3000} />

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected Routes */}
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <Navbar />
              <div className="flex">
                <Sidebar />
                <div className="flex p-2">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/my-drive" element={<MyDrive />} />
                    <Route path="/computers" element={<Computers />} />
                    <Route path="/shared-with-me" element={<SharedWithMe />} />
                    <Route path="/recent" element={<Recent />} />
                    <Route path="/starred" element={<Starred />} />
                    <Route path="/spam" element={<Spam />} />
                    <Route path="/trash" element={<Trash />} />
                    <Route path="/quota" element={<Storage />} />
                  </Routes>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
