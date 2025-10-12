import React from 'react'
import { FaArrowRight } from "react-icons/fa";  
import { useNavigate } from 'react-router-dom';

const Benefits = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      id: 1,
      title: "Account Opening Charges",
      value: "₹0",
      bg: "bg-purple-100",
    },
    {
      id: 2,
      title: "Brokerage per order for Equity Delivery, Intraday, F&O, Currencies & Commodities for first 30 days",
      value: "₹0",
      bg: "bg-blue-100",
    },
    {
      id: 3,
      title: "Interest on MTF for first 30 days",
      value: "₹0",
      bg: "bg-green-100",
    },
    {
      id: 4,
      title: "Commission for Mutual Funds & IPO Investments",
      value: "₹0",
      bg: "bg-orange-100",
    },
  ];

  return (
    <div className="w-full px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-10">
      {/* Benefits Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
        {benefits.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col justify-center items-center rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-400 p-4 xs:p-5 sm:p-6 text-center ${item.bg}`}
          >
            <h2 className="text-4xl xs:text-5xl sm:text-6xl font-bold text-gray-800 mb-2 sm:mb-3">
              {item.value}
            </h2>
            <p className="text-gray-600 text-xs xs:text-sm leading-relaxed">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 px-2 sm:px-4">
        {/* Disclaimer */}
        <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
          *Brokerage will not exceed the SEBI prescribed limit
        </p>

        {/* View Pricing Button */}
        <button 
          onClick={() => navigate("/pricing")}
          className="flex items-center justify-center gap-2 text-sm xs:text-base sm:text-lg font-semibold uppercase text-blue-600 hover:text-blue-800 transition-colors group"
        >
          View Pricing 
          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default Benefits;