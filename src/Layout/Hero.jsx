import React from 'react';
import myImage from "../assets/side1.webp";
import { useNavigate } from 'react-router-dom';
import Hero1 from './Hero1.jsx';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-4 sm:p-6 md:p-12 rounded-xl shadow-md max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="bg-white shadow p-4 sm:p-6 rounded-xl w-full md:w-1/2 h-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2 font-stretch-ultra-condensed">
            Your One-Stop Investment Platform
          </h2>
          <p className="text-gray-500 mb-4 text-sm sm:text-base">
            A trusted partner with 25 years of experience
          </p>

          {/* Input Field */}
          <div className="flex flex-col sm:flex-row items-center mb-4 space-y-3 sm:space-y-0 sm:space-x-3">
            <div className="flex items-center w-full sm:w-auto">
              <span className="px-2 py-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md text-gray-600 text-sm">
                +91
              </span>
              <input
                type="text"
                placeholder="Enter your Mobile number"
                className="flex-1 border border-gray-300 rounded-r-md px-3 py-2 outline-none focus:ring focus:ring-blue-300 text-sm sm:text-base"
              />
            </div>
            <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm sm:text-base">
              Get Started
            </button>
          </div>

          {/* Bottom Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-sm text-gray-700">
            <div>
              <p className="font-semibold">₹0</p>
              <p className="text-gray-400 text-xs sm:text-sm">Account Opening<br />Charges</p>
            </div>
            <div>
              <p className="font-semibold">3Cr+</p>
              <p className="text-gray-400 text-xs sm:text-sm">Users</p>
            </div>
            <div>
              <p className="font-semibold">₹0</p>
              <p className="text-gray-400 text-xs sm:text-sm">AMC for the<br />1st year</p>
            </div>
            <div className="text-center">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=login"
                alt="QR"
                className="mx-auto w-16 sm:w-20"
              />
              <p className="text-xs text-gray-400">Scan the QR Code to<br />Login/Register</p>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            *Flat ₹0 brokerage for any orders placed in the first 30 days
          </p>
        </div>

        {/* Right Section */}
        <div className="mt-6 md:mt-0 md:ml-6 w-full md:w-1/2 flex justify-center">
          <img
            onClick={() => navigate("/img")}
            src={myImage}
            alt="Investment"
            className="w-48 sm:w-64 md:w-80 cursor-pointer object-contain"
          />
        </div>
      </div>
      <Hero1 />
    </>
  );
};

export default Hero;