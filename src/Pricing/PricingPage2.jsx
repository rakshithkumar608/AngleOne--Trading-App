import React, { useState } from 'react';
import { Info } from 'lucide-react';

const PricingPage2 = () => {
  const menu = ["Equity", "Currency", "Commodities", "Other Charges"];
  const [active, setActive] = useState();

  return (
    <div className=' bg-white px-4 md:px-16 py-10 mt-10'>
      {/* tabs */}
      <div className="flex space-x-6 border-b border-gray-200 mb-8 md:ml-65">
        {menu.map((items) => (
          <button
            key={items}
            onClick={() => setActive(items)}
            className={`relative pb-2 font-medium text-sm md:text-base transition-colors duration-300 ${
              active === items ? "text-blue-700" : "text-gray-600 hover:text-blue-700"
            } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 ${
              active === items ? "after:w-full" : "after:w-0 hover:after:w-full"
            }`}
          >
            {items}
          </button>
        ))}
      </div>

      {/* Table Section */}
      <div className="border border-gray-300">
        <div className="grid grid-cols-4 border-b border-gray-300">
          <div className="p-5 border-r border-gray-300"></div>
          <div className="p-5 border-r border-gray-300">
            <h3 className='text-gray-400 font-normal text-base'>Stock Investments</h3>
          </div>
          <div className="p-5 border-r border-gray-300">
            <h3 className='text-gray-400 font-normal text-base'>Intraday Trading</h3>
          </div>
          <div className="p-5">
            <h3 className='text-gray-400 font-normal text-base'>Futures & Options</h3>
          </div>
        </div>

        {/* Brokerage Row */}
        <div className="grid grid-cols-4">
          <div className="p-5 border-r border-gray-300">
            <div className="flex items-center gap-2 justify-center mt-4">
              <span className="text-gray-800 font-bold text-xl">Brokerage</span>
              <Info className='w-4 h-4 text-gray-800'/>
            </div>
          </div>

          {/* Stock investment */}
          <div className='p-5 border-r border-gray-300'>
            <div className="text-sm">
              <p className="text-gray-900 leading-relaxed mb-2">
                ₹0 brokerage upto ₹500 for first 30 days*
              </p>
              <p className="text-gray-700 leading-relaxed">
                Then lower of ₹20 or 0.1% per executed order, minimum ₹2**
              </p>
            </div>
          </div>

          {/* Intraday Trading */}
          <div className="p-5 border-r border-gray-300">
            <div className="text-sm">
              <p className="text-gray-900 leading-relaxed mb-2">
                ₹0 brokerage upto ₹500 for first 30 days*
              </p>
              <p className="text-gray-700 leading-relaxed">
                Then lower of ₹20 or 0.03%
              </p>
            </div>
          </div>

          {/* Futures & Options */}
          <div className="p-5">
            <div className="text-sm">
              <p className="text-gray-900 leading-relaxed mb-2">
                ₹0 brokerage upto ₹500 for first 30 days*
              </p>
              <p className="text-gray-700 leading-relaxed">
                Then, ₹20 per executed order
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="p-6 text-sm text-gray-600 space-y-3">
        <p>
          *Brokerage up to ₹500 will not be charged for the first 30 days time period after onboarding. The offer will expire either on completion of 30 days from onboarding or complete consumption of ₹500 brokerage discount within the same period. Post the offer-period, a normal brokerage fee is charged.
        </p>
        <p>
          **Brokerage levied to your trading account will never exceed more than the maximum brokerage permissible as per SEBI rules and regulations.
        </p>
        <p>## The above pricing of Stock Investments is applicable from 1st November 2024.</p>
      </div>

      {/* Calculate Section - Responsive */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg mt-10 p-6 md:p-8 text-center mx-auto max-w-full md:max-w-3xl">
        <h2 className='text-lg md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6'>
          Calculate the complete brokerage & get updated
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
          <button className='bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow transition-colors w-full sm:w-auto'>
            Brokerage Calculator
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-blue-700 px-6 py-3 rounded-lg shadow transition-colors w-full sm:w-auto">
            Margin Calculator
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage2;