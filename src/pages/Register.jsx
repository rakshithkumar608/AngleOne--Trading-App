import React from 'react';
import myImage from '../assets/Register2.svg';
import MyImg from "../assets/register.svg";
import myimg from "../assets/Register1.svg";

const Register = () => {
  return (
    
    <div className="flex flex-col md:flex-row h-screen">
      
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-6 md:p-0">
        <div className="text-center">
          <img 
            src={myImage} 
            alt='register illustration' 
            className="mx-auto mb-4 md:mb-6 w-48 sm:w-64 md:w-auto"
          />
          <h4 className="text-sm sm:text-base font-bold text-gray-700 mb-2">
            Get Context. Make Smart Decisions.
          </h4>
          <p className="text-gray-500 text-xs sm:text-sm">
            Understand the what and the why behind the market. Learn on-the-go.
          </p>
        </div>
      </div>

      {/* Right Section - Registration Section */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6 md:p-0">
        <div className="text-center w-full max-w-md">
          
          {/* Top Images */}
          <div className="flex flex-col sm:flex-row justify-center items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
            <img 
              src={MyImg} 
              alt='register' 
              className="w-32 sm:w-40 md:w-48"
            />
            <img 
              src={myimg}
              alt='register 1'
              className="w-22 sm:w-40 md:w-38"
            />
          </div>

          {/* Form */}
          <h2 className="text-2xl sm:text-xl font-semibold mb-4 text-start ">Register with your Mobile Number</h2>
          <input 
            type="text" 
            placeholder="Enter Your Mobile Number Here" 
            className="border border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:ring focus:ring-indigo-300 text-sm h-10"
            required
          />
          <input 
            type="text" 
            placeholder="Enter Introducer Code (Optional)" 
            className="border border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:ring focus:ring-indigo-300 text-sm h-10"
            required
          />
          <p className="text-gray-400 mb-4 text-sm sm:text-base text-start mt-8">
            We will send an OTP to your mobile number
          </p>
          <button className="bg-indigo-300 hover:bg-indigo-400 text-white p-2 rounded w-full">
            NEXT
          </button>
        </div>
      </div>

    </div>
  );
};

export default Register;
