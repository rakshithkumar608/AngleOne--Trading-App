import React, { useState } from 'react';
import myImage from '../assets/angel-one-R-logo.svg';
import myimage from '../assets/Login1.svg';
import { QrCode } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [loginType, setLogintype] = useState('mobile');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side content */}
      <div className="flex-1 bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center p-8  md:flex">
        <img src={myimage} alt="login logo" className="max-w-xs lg:max-w-sm mb-10" />
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-800">Get Advanced Portfolio Insights</h2>
          <p className="text-gray-600 text-sm mt-2">
            Track your portfolio performance with advanced insights like sector-wise breakup and returns, top drivers, and more.
          </p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-4 md:p-12">
        <div className="w-full max-w-md">
          <form className="w-full bg-white p-8 md:p-10 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-center md:justify-start mb-6">
              <img src={myImage} alt="logo1" className="w-32 h-auto md:w-40" />
            </div>

            <div className="border-t-2 border-dotted border-gray-400 my-4">
              <h3 className="mt-5 text-black font-medium text-lg text-center md:text-left">Welcome to India's fastest platform!</h3>
            </div>

            {/* Login form */}
            <div className="space-y-6">
              {/* Radio buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="loginType"
                    value="mobile"
                    checked={loginType === 'mobile'}
                    onChange={(e) => setLogintype(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700 font-medium text-xs">Login with Mobile Number</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="loginType"
                    value="client"
                    checked={loginType === 'client'}
                    onChange={(e) => setLogintype(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700 font-medium text-xs">Login with Client ID</span>
                </label>
              </div>

              {/* Input field */}
              <div>
                <input
                  type="text"
                  placeholder={loginType === 'mobile' ? 'Mobile Number' : 'Client ID'}
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Process Button */}
              <button
              onClick={() => navigate("/main")} 
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200 text-sm">
                PROCEED
              </button>

              {/* Divider */}
              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-sm text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* QR Code login */}
              <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-blue-50 transition duration-200">
                <QrCode size={20} />
                <span>INSTANT LOGIN WITH QR CODE</span>
              </button>

              {/* Register link */}
              <p className="text-center text-gray-600 text-sm mt-4">
                Don't have an account?{' '}
                <a 
                onClick={() => navigate("/register")}
                href="" className="text-blue-600 hover:underline">
                  Register Now!
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;