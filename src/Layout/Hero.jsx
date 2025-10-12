import React, { useState } from 'react';
import myImage from "../assets/side1.webp";
import { useNavigate } from 'react-router-dom';
import Hero1 from './Hero1.jsx';

const Hero = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ number: '' });
  const [errors, setErrors] = useState({ number: '' });

  // Regex for phone number validation
  const phoneRegex = /^[6-9]\d{9}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors when user types
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validatedForm = () => {
    let newErrors = { number: '' };
    let isValid = true;

    if (!formData.number) {
      newErrors.number = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.number)) {
      newErrors.number = 'Please enter a valid phone number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleGetStarted = () => {
    if (validatedForm()) {
      console.log('Number correct', formData);
      alert('Redirected to register page');
      navigate('/register');
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg max-w-7xl mx-auto mt-4 transition-all duration-300">
        {/* Left Section */}
        <div className="bg-white shadow-sm p-6 sm:p-8 rounded-2xl w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-tight">
            Your One-Stop Investment Platform
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            A trusted partner with 25 years of experience
          </p>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
            <div className="flex w-full border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
              <span className="flex items-center px-3 bg-gray-50 text-gray-600 text-sm font-medium border-r border-gray-300">
                +91
              </span>
              <input
                value={formData.number}
                onChange={handleChange}
                name="number"
                type="text"
                placeholder="Enter Mobile Number"
                className={`w-full px-4 py-2.5 text-sm sm:text-base focus:outline-none ${
                  errors.number ? 'border-red-500' : 'border-transparent'
                }`}
              />
            </div>

            <button
              onClick={handleGetStarted}
              className="w-full sm:w-auto bg-blue-600 text-white md:px-4  py-2  rounded-lg hover:bg-blue-700 transition-all text-sm sm:text-base font-medium"
            >
              Get Started
            </button>
          </div>

          {errors.number && (
            <p className="text-red-500 text-xs mt-1">{errors.number}</p>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-6 text-center sm:text-left">
            <div>
              <p className="font-semibold text-lg">₹0</p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Account Opening<br />Charges
              </p>
            </div>
            <div>
              <p className="font-semibold text-lg">3Cr+</p>
              <p className="text-gray-400 text-xs sm:text-sm">Users</p>
            </div>
            <div>
              <p className="font-semibold text-lg">₹0</p>
              <p className="text-gray-400 text-xs sm:text-sm">
                AMC for the<br />1st year
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=login"
                alt="QR"
                className="w-16 sm:w-20"
              />
              <p className="text-xs text-gray-400 mt-1 text-center">
                Scan QR to<br />Login/Register
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center sm:text-left">
            *Flat ₹0 brokerage for orders in the first 30 days
          </p>
        </div>

        {/* Right Section */}
        <div className="mt-8 md:mt-0 md:ml-8 w-full md:w-1/2 flex justify-center">
          <img
            onClick={() => navigate("/img")}
            src={myImage}
            alt="Investment"
            className="w-56 sm:w-72 md:w-80 object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <Hero1 />
    </>
  );
};

export default Hero;
