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
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600 mt-3 text-lg max-w-5xl">
          {description}
        </p>

        {/* Tabs */}
        <div className="flex gap-6 mt-8 border-b border-gray-200">
          <div className="flex space-x-6 mb-8 mt-6 text-xl cursor-pointer">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => navigate(tab.path)}
                className={`relative pb-2 font-medium text-sm md:text-base transition-colors duration-300 cursor-pointer ${
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
        <div className="bg-white shadow-md rounded-xl p-6 mt-8 flex flex-col md:flex-row justify-between gap-8 border border-gray-200">
          {/* Left: Inputs */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Calculator className="text-blue-600 w-7 h-7" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  Returns Estimator
                </h3>
                <p className="text-gray-500 text-sm">
                  Estimation is based on the past performance
                </p>
              </div>
            </div>

            {/* Investment Input */}
            <div className="border border-blue-300 rounded-lg text-center py-6 mb-6">
              <div className="text-lg text-gray-600 font-medium mb-2">
                {inputLabel}
              </div>
              <input
                type="number"
                value={inputValue}
                onChange={(e) =>
                  setInputValue(Math.max(minInput, Number(e.target.value)))
                }
                className="text-4xl font-bold text-blue-600 text-center w-full outline-none bg-transparent"
                min={minInput}
              />
            </div>

            {/* Sliders */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-lg">
                  {sliderLabel}
                </label>
                <input
                  type="range"
                  min={minInput}
                  max={maxInput}
                  step={stepInput}
                  value={inputValue}
                  onChange={(e) => setInputValue(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span className='font-bold text-gray-800'>
                    ₹{minInput.toLocaleString()}
                  </span>
                  <span className="font-bold text-xl">
                    ₹{inputValue.toLocaleString()}
                  </span>
                  <span className='font-bold text-gray-800'>
                    ₹{maxInput.toLocaleString()}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-lg">
                  Select Duration
                </label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span className='font-bold text-gray-800'>1 Yr</span>
                  <span className="font-bold text-xl">
                    {years} Yr{years > 1 ? "s" : ""}
                  </span>
                  <span className='font-bold text-gray-800'>30 Yrs</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-lg">
                  Expected Rate of Return
                </label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span className='font-bold text-gray-800'>1%</span>
                  <span className="font-bold text-xl">{rate}%</span>
                  <span className='font-bold text-gray-800'>30%</span>
                </div>
              </div>

              {/* Additional Controls from children */}
              {children}
            </div>
          </div>

          {/* Right: Chart & Results */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <p className="text-gray-600 text-xl leading-1 font-semibold">
              The total value of your investment after{" "}
              <span className="font-bold">{years} Year{years > 1 ? 's' : ''}</span> will be
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              ₹{totalValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </h2>

            {showPieChart ? (
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie 
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={90}
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
            ) : null}

            <div className="flex flex-col gap-2 w-full max-w-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                  <span className="text-gray-700">{investedLabel}</span>
                </div>
                <span className="font-semibold text-gray-900">
                  ₹{investedAmount.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                  <span className="text-gray-700">Est. Returns</span>
                </div>
                <span className="font-semibold text-gray-900">
                  ₹{estimatedReturns.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>

            <button 
              onClick={() => navigate('/login')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold mt-6 px-8 py-3 rounded-lg shadow transition-colors"
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