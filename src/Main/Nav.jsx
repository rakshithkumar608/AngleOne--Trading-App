import React, { useEffect, useRef, useState } from "react";
import img from "../assets/logo.png";
import { Bell, ChevronDown, Home } from "lucide-react";

const Nav = () => {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [indicesOpen, setIndicesOpen] = useState(false);

  const indicesRef = useRef(null);
  const toolsRef = useRef(null);

  // ✅ Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (indicesRef.current && !indicesRef.current.contains(event.target)) &&
        (toolsRef.current && !toolsRef.current.contains(event.target))
      ) {
        setIndicesOpen(false);
        setToolsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const indices = [
    { name: "SENSEX", value: "84,778.84", change: "+566.96", percent: "+0.67%" },
    { name: "NIFTY", value: "25,966.05", change: "+170.90", percent: "+0.66%" },
    { name: "BANKEX", value: "65,512.60", change: "+422.56", percent: "+0.65%" },
    { name: "BANKNIFTY", value: "58,114.25", change: "+414.65", percent: "+0.72%" },
    { name: "NIFTYNXT50", value: "69,612.20", change: "+256.30", percent: "+0.37%" },
    { name: "INDIA VIX", value: "11.86", change: "+0.27", percent: "+2.33%" },
    { name: "FINNIFTY", value: "27,519.00", change: "+123.70", percent: "+0.45%" },
    { name: "MIDCPNIFTY", value: "13,345.30", change: "+180.45", percent: "+1.37%" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm px-4 py-2 flex flex-wrap items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img src={img} alt="Logo" className="w-6 h-6" />

        {/* Sensex and Nifty */}
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <div>
            <p className="font-semibold text-xs">SENSEX</p>
            <p className="text-green-600">
              84,778.84{" "}
              <span className="ml-1 text-xs text-black">
                ▲ +566.96 (+0.67%)
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-xs">NIFTY</p>
            <p className="text-green-600">
              25,966.05{" "}
              <span className="ml-1 text-xs text-black">
                ▲ +170.90 (+0.66%)
              </span>
            </p>
          </div>
        </div>

        {/* Indices Dropdown */}
        <div className="relative" ref={indicesRef}>
          <button
            onClick={() => {
              setIndicesOpen(!indicesOpen);
              setToolsOpen(false);
            }}
            className="flex items-center gap-1 border rounded px-1 py-1 hover:bg-gray-100"
          >
            <ChevronDown size={12} />
          </button>

          {indicesOpen && (
            <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg w-64 sm:w-72 z-50 max-h-[70vh] overflow-y-auto">
              <div className="p-3">
                <h3 className="text-sm font-bold text-gray-700 mb-2">
                  Indices List
                </h3>
                <ul className="space-y-1">
                  {indices.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center text-sm hover:bg-gray-50 px-2 py-1 rounded"
                    >
                      <span className="font-medium w-20 text-xs">{item.name}</span>
                      <span className="text-green-600 font-semibold text-xs">
                        {item.value} ▲
                      </span>
                      <span className="text-black text-xs text-right">
                        {item.change} ({item.percent})
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 text-center">
                  <button className="text-blue-600 text-xs font-medium hover:underline">
                    VIEW ALL INDICES
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 text-sm mt-2 sm:mt-0 flex-wrap justify-end">
        <a href="#" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
          <Home size={14} />
        </a>
        <span className="hidden sm:inline hover:text-blue-600 font-medium">
          Markets
        </span>
        <a href="#" className="hover:text-blue-600 font-medium">
          Watchlist
        </a>
        <a href="#" className="hidden sm:inline hover:text-blue-600 font-medium">
          Portfolio
        </a>
        <a href="#" className="hidden sm:inline hover:text-blue-600 font-medium">
          Orders
        </a>
        <a href="#" className="hidden sm:inline hover:text-blue-600 font-medium">
          Positions
        </a>

        {/* Tools Dropdown */}
        <div className="relative" ref={toolsRef}>
          <button
            onClick={() => {
              setToolsOpen(!toolsOpen);
              setIndicesOpen(false);
            }}
            className="flex items-center gap-1 hover:text-blue-600"
          >
            Tools <ChevronDown size={12} />
          </button>

          {toolsOpen && (
            <div className="absolute right-0 mt-2 w-[92vw] sm:w-[620px] bg-white border rounded-xl shadow-lg z-50 p-4 max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Left Column */}
                <div className="sm:w-1/3 sm:border-r border-gray-200 pr-0 sm:pr-4">
                  <h3 className="text-sm font-semibold text-gray-600 mb-3">
                    Quick Tools
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="hover:text-blue-600 cursor-pointer">🧺 Basket Order</li>
                    <li className="hover:text-blue-600 cursor-pointer">💰 Create a Stock SIP</li>
                    <li className="hover:text-blue-600 cursor-pointer">⏱️ Place GTT Order</li>
                    <li className="hover:text-blue-600 cursor-pointer">📊 Analyse with Sensibull</li>
                  </ul>
                </div>

                {/* Right Column */}
                <div className="sm:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      title: "📈 TradeOne",
                      desc: "Single screen and fully loaded trading console",
                    },
                    {
                      title: "⏰ Alerts",
                      desc: "Set alerts based on price levels and technical indicators",
                    },
                    {
                      title: "📊 Option Strategies",
                      desc: "Pre-made, one-click option strategies for faster execution",
                    },
                    {
                      title: "📉 Trading Insights",
                      desc: "Understand your trading habits with detailed stats and insights",
                      badge: "NEW",
                    },
                  ].map((tool, idx) => (
                    <div key={idx} className="hover:bg-gray-50 rounded-lg p-2 cursor-pointer">
                      <div className="flex items-center gap-1">
                        <h4 className="font-medium text-sm text-gray-800">{tool.title}</h4>
                        {tool.badge && (
                          <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                            {tool.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mt-0.5">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bell & Avatar */}
        <Bell className="text-gray-700 hover:text-blue-600 cursor-pointer" size={16} />
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-700">
          RK
        </div>
      </div>
    </nav>
  );
};

export default Nav;
