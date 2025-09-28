import React from 'react'
import myImage from "../assets/iphone-2x.webp";
import Img1 from "../assets/app1.webp";
import Img2 from "../assets/app2.webp"

const DownloadSection = () => {
  return (
    <div className='m-40 h-auto w-300 bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-center p-8 flex rounded-lg'>
      <div className="max-w-6xl w-full text-white flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center items-center">
        
        {/* Left side - iPhone image */}
        <div className="flex-shrink-0">
          <div className='w-60 h-80 flex items-center justify-center text-gray-600 rounded-3xl shadow-2xl'>
            <img src={myImage} alt='iphone'/>
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="flex flex-col gap-6 flex-1 max-w-2xl">
          
          {/* Top section - Downloads and Heading */}
          <div className="flex gap-8 lg:gap-16 items-start flex-col lg:flex-row">
            
            {/* Downloads section */}
            <div className="text-start">
              <div className="text-yellow-400 text-3xl font-bold mb-2">4.4 Cr+</div>
              <div className="text-yellow-400 text-2xl font-bold">DOWNLOADS</div>
            </div>
            
            {/* Main heading section */}
            <div className='text-start'>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-0">
                Enjoy ₹0 Account Opening<br />
                Charges
              </h1>
            </div>
            
          </div>
          
          {/* Input section */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-500 focus:outline-none focus:ring-2 "
            />
            <button className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold transition-colors ">
              Get Started
            </button>
          </div>
          
          {/* Bottom section - QR code and App Store buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            
            {/* QR Code placeholder */}
            <div className="bg-white p-4 rounded-lg">
              <div className="w-20 h-20 bg-gray-800 flex items-center justify-center text-white text-xs text-center border-b-white">
                <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=login"
                alt="QR"
                className="mx-auto w-16 sm:w-20"
              />
              </div>
            </div>
            
            {/* App store buttons */}
            <div className="flex flex-col gap-3">
              
              {/* App Store button */}
              <div className="px-6 py-3 flex items-center gap-3 min-w-48 cursor-pointer transition-colors">
                <div className=" flex items-center justify-center">
                 
                </div>
                <div className="text-left w-35 h-10">
                 <img src={Img1} alt='app1'/>
                </div>
              </div>
              
              {/* Google Play button */}
              <div className="px-6 py-3 flex items-center gap-3 min-w-48 cursor-pointer transition-colors">
                <div className=" flex items-center justify-center">
                  
                </div>
                <div className="text-left w-35 h-10">
                 <img src={Img2} alt='app2'/>
                </div>
              </div>
              
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default DownloadSection