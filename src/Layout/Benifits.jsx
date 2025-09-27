import React from 'react'
import { FaArrowRight } from "react-icons/fa";  
import { useNavigate } from 'react-router-dom';

const Benifits = () => {
  const navigate = useNavigate();

  const benifits = [
    {
      id: 1,
      title: "Account Opening  Charges",
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
    <div className="w-full  grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {benifits.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col justify-center items-center rounded-lg shadow-sm border border-blue-400 p-6 text-center  ${item.bg}`}
        >
          <h2 className="text-6xl font-bold text-gray-800 mb-2">{item.value}</h2>
          <p className="text-gray-600 text-sm">{item.title}</p>
        </div>
      ))}
      <h2 className='text-xs text-gray-500'>*Brokerage will not exceed the SEBI prescribed limit</h2>
     
       
        <button 
        onClick={() => navigate("/pricing")}
        className="flex items-center gap-2 text-lg font-semibold uppercase text-blue-600 hover:text-blue-800 transition m-7  ml-40 text-center">
        View Pricing <FaArrowRight />
      </button>
      </div>
  
     
  );
};

export default Benifits;
