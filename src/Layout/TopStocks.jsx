import React from 'react'
import myImage from '../assets/RTB-Banners.webp'
import { LucideChevronRight } from 'lucide-react';

const TopStocks = () => {
  const stocks = [
    "IRFC share price",
    "Suzlon share price",
    "IREDA share price",
    "Tata Motors share price",
    "Yes Bank share price",
    "HDFC Bank share price",
    "NHPC share price",
    "RVNL share price",
    "SBI share price",
    "Tata Power share price",
    "Tata Steel share price",
    "Adani Power share price",
    "PNB share price",
    "Zomato share price",
    "BEL share price",
    "Reliance share price",
    "Infosys share price",
    "ITC share price",
    "Jio Finance share price",
    "LIC share price",
  ];

  return (
    <div className="flex justify-center items-center py-12 bg-gray-100">
      <div className="max-w-4xl w-full px-4 md:px-0 py-8">
        
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Top 20 Stocks
        </h2>

        {/* Stock Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-200 rounded-xl overflow-hidden">
          {stocks.map((stock, index) => (
            <div
              key={index}
              className="border border-gray-200 px-4 py-6 text-center text-blue-600 text-sm font-medium hover:bg-blue-50 cursor-pointer"
            >
              {stock}
            </div>
          ))}
        </div>

        {/* Tagline Section */}
        <div className="flex flex-col items-center text-center mt-10">
          <h1 className="font-bold text-2xl md:text-4xl">
            Angel One for Everyone
          </h1>
          <h3 className="text-lg md:text-2xl font-bold mt-2">
            #AppforSmartInvesting
          </h3>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mt-10">
          <img
            src={myImage}
            alt="banner"
            className="w-full md:w-[80%] lg:w-[70%] rounded-lg"
          />
        </div>

       <div className="flex items-center justify-center mt-10 cursor-pointer text-blue-600 font-medium hover:underline">
  <span>READ MORE</span>
  <LucideChevronRight className="ml-2 w-5 h-5" />
</div>
      </div>
    </div>
  )
}

export default TopStocks
