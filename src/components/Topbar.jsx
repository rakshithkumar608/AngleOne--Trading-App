import React from 'react'
import myImage from "../assets/ipl.webp";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-white shadow-sm">
      {/* Left Section */}
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Logo */}
        <img
          src={myImage}
          alt="IPL Logo"
          className="h-12 w-auto cursor-pointer md:ml-80"
        />

        {/* Mobile Login + CTA */}
        <div className="flex md:hidden space-x-2">
          <button className="px-3 py-1 text-white bg-blue-600 rounded-md hover:bg-blue-700 text-sm font-semibold">
            Open Demat
          </button>
          <button
            className="px-3 py-1 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 text-sm font-semibold"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:w-96 mt-3 md:mt-0">
        <input
          type="text"
          placeholder="Search Stocks, News, Reports,..."
          className="w-full pl-8 pr-3 py-2 border rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
        />
        <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <button 
        onClick={() => navigate("/demat")}
        className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 cursor-pointer font-bold">
          Open Demat Account
        </button>
        <button
          className="px-6 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 font-semibold"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Topbar;
