import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Calculator } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const CalculatorLayout = ({
  title,
  description,
  inputLabel,
  inputValue,
  setInputValue,
  minInput,
  maxInput,
  stepInput,
  years,
  setYears,
  rate,
  setRate,
  totalValue,
  investedAmount,
  estimatedReturns,
  investedLabel = "Invested Amount",
  sliderLabel = "Investment Amount",
  showPieChart = true,
  children
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = [
    { name: "InvestedAmount", value: Math.round(investedAmount) },
    { name: "Est. Returns", value: Math.round(estimatedReturns) },
  ];

  const COLORS = ["#F97316", "#3B82F6"];

  const tabs = [
    { name: 'SIP Investment Amount', path: '/sip' },
    { name: 'Lumpsum Amount', path: '/lumpsum' },
    { name: 'Advance SIP Calculator', path: '/advanced-sip' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 xs:py-8 sm:py-10 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          {title}
        </h1>
        <p className="text-gray-600 mt-2 sm:mt-3 text-sm xs:text-base sm:text-lg max-w-5xl">
          {description}
        </p>

        {/* Tabs - Horizontal scroll on mobile */}
        <div className="mt-6 sm:mt-8 border-b border-gray-200 overflow-x-auto">
          <div className="flex space-x-4 xs:space-x-6 min-w-max pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => navigate(tab.path)}
                className={`relative pb-3 font-medium text-xs xs:text-sm sm:text-base whitespace-nowrap transition-colors duration-300 ${
                  location.pathname === tab.path
                    ? "text-blue-700"
                    : "text-gray-600 hover:text-blue-700"
                } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 ${
                  location.pathname === tab.path
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Section */}
        <div className="bg-white shadow-md rounded-lg sm:rounded-xl p-4 xs:p-5 sm:p-6 mt-6 sm:mt-8 flex flex-col lg:flex-row gap-6 sm:gap-8 border border-gray-200">
          {/* Left: Inputs */}
          <div className="flex-1 w-full">
            {/* Header */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="bg-blue-100 p-1.5 xs:p-2 rounded-full flex-shrink-0">
                <Calculator className="text-blue-600 w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-800 text-sm xs:text-base sm:text-lg truncate">
                  Returns Estimator
                </h3>
                <p className="text-gray-500 text-xs xs:text-sm">
                  Based on past performance
                </p>
              </div>
            </div>

            {/* Investment Input */}
            <div className="border border-blue-300 rounded-lg text-center py-4 xs:py-5 sm:py-6 mb-4 sm:mb-6">
              <div className="text-sm xs:text-base sm:text-lg text-gray-600 font-medium mb-2">
                {inputLabel}
              </div>
              <input
                type="number"
                value={inputValue}
                onChange={(e) =>
                  setInputValue(Math.max(minInput, Number(e.target.value)))
                }
                className="text-2xl xs:text-3xl sm:text-4xl font-bold text-blue-600 text-center w-full outline-none bg-transparent px-2"
                min={minInput}
              />
            </div>

            {/* Sliders */}
            <div className="space-y-4 xs:space-y-5 sm:space-y-6">
              {/* Investment Amount Slider */}
              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-sm xs:text-base sm:text-lg">
                  {sliderLabel}
                </label>
                <input
                  type="range"
                  min={minInput}
                  max={maxInput}
                  step={stepInput}
                  value={inputValue}
                  onChange={(e) => setInputValue(Number(e.target.value))}
                  className="w-full accent-blue-600 h-2 cursor-pointer"
                />
                <div className="flex justify-between text-xs xs:text-sm text-gray-500 mt-1">
                  <span className='font-bold text-gray-800'>
                    ₹{minInput.toLocaleString()}
                  </span>
                  <span className="font-bold text-base xs:text-lg sm:text-xl text-blue-600">
                    ₹{inputValue.toLocaleString()}
                  </span>
                  <span className='font-bold text-gray-800'>
                    ₹{maxInput.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Duration Slider */}
              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-sm xs:text-base sm:text-lg">
                  Select Duration
                </label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-blue-600 h-2 cursor-pointer"
                />
                <div className="flex justify-between text-xs xs:text-sm text-gray-500 mt-1">
                  <span className='font-bold text-gray-800'>1 Yr</span>
                  <span className="font-bold text-base xs:text-lg sm:text-xl text-blue-600">
                    {years} Yr{years > 1 ? "s" : ""}
                  </span>
                  <span className='font-bold text-gray-800'>30 Yrs</span>
                </div>
              </div>

              {/* Rate Slider */}
              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-sm xs:text-base sm:text-lg">
                  Expected Rate of Return
                </label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-blue-600 h-2 cursor-pointer"
                />
                <div className="flex justify-between text-xs xs:text-sm text-gray-500 mt-1">
                  <span className='font-bold text-gray-800'>1%</span>
                  <span className="font-bold text-base xs:text-lg sm:text-xl text-blue-600">{rate}%</span>
                  <span className='font-bold text-gray-800'>30%</span>
                </div>
              </div>

              {/* Additional Controls from children */}
              {children}
            </div>
          </div>

          {/* Right: Chart & Results */}
          <div className="flex-1 w-full flex flex-col items-center justify-center text-center">
            <p className="text-gray-600 text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed font-semibold px-2">
              The total value of your investment after{" "}
              <span className="font-bold text-blue-600">{years} Year{years > 1 ? 's' : ''}</span> will be
            </p>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mt-2 sm:mt-3">
              ₹{totalValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </h2>

            {/* Pie Chart */}
            {showPieChart && (
              <div className="w-full my-4 sm:my-6">
                <ResponsiveContainer width="100%" height={200} className="xs:h-[220px] sm:h-[250px]">
                  <PieChart>
                    <Pie 
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={35}
                      outerRadius={75}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Legend */}
            <div className="flex flex-col gap-2 sm:gap-3 w-full max-w-xs px-2">
              <div className="flex items-center justify-between text-xs xs:text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 xs:w-4 xs:h-4 bg-orange-500 rounded-sm flex-shrink-0"></div>
                  <span className="text-gray-700 truncate">{investedLabel}</span>
                </div>
                <span className="font-semibold text-gray-900 ml-2">
                  ₹{investedAmount.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs xs:text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 xs:w-4 xs:h-4 bg-blue-500 rounded-sm flex-shrink-0"></div>
                  <span className="text-gray-700">Est. Returns</span>
                </div>
                <span className="font-semibold text-gray-900 ml-2">
                  ₹{estimatedReturns.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>

            {/* Invest Button */}
            <button 
              onClick={() => navigate('/login')}
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold mt-4 xs:mt-5 sm:mt-6 px-6 xs:px-8 py-2.5 xs:py-3 rounded-lg shadow transition-colors text-sm xs:text-base w-full max-w-xs"
            >
              INVEST NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorLayout;