import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Calculator, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const AdvancedSipCalculator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(12);
  const [inflationAdjusted, setInflationAdjusted] = useState(false);

  // Advanced SIP Calculation with yearly breakdown
  const calculateYearlyData = () => {
    const yearlyData = [];
    const currentYear = new Date().getFullYear();
    let cumulativeInvested = 0;
    let cumulativeValue = 0;
    const monthlyRate = rate / 12 / 100;

    for (let year = 1; year <= years; year++) {
      const monthsElapsed = year * 12;
      const yearInvestment = monthlyInvestment * 12;
      cumulativeInvested += yearInvestment;

      // Calculate total value up to this year
      if (monthlyRate === 0) {
        cumulativeValue = monthlyInvestment * monthsElapsed;
      } else {
        cumulativeValue = monthlyInvestment * 
          ((Math.pow(1 + monthlyRate, monthsElapsed) - 1) / monthlyRate) * 
          (1 + monthlyRate);
      }

      yearlyData.push({
        year: currentYear + year,
        invested: Math.round(cumulativeInvested),
        returns: Math.round(cumulativeValue - cumulativeInvested),
        total: Math.round(cumulativeValue)
      });
    }

    return yearlyData;
  };

  const yearlyData = calculateYearlyData();
  const finalData = yearlyData[yearlyData.length - 1];
  const totalValue = finalData.total;
  const investedAmount = finalData.invested;
  const estimatedReturns = finalData.returns;

  const tabs = [
    { name: 'SIP Investment Amount', path: '/sip' },
    { name: 'Lumpsum Amount', path: '/lumpsum' },
    { name: 'Advance SIP Calculator', path: '/advanced-sip' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold text-gray-900">Advanced SIP Calculator</h1>
        <p className="text-gray-600 mt-3 text-lg max-w-5xl">
          Get detailed year-by-year breakdown of your SIP investment growth. Track your invested amount and returns over time with our advanced visualization.
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
                ENTER AMOUNT
              </div>
              <input
                type="number"
                value={monthlyInvestment}
                onChange={(e) =>
                  setMonthlyInvestment(Math.max(500, Number(e.target.value)))
                }
                className="text-4xl font-bold text-blue-600 text-center w-full outline-none bg-transparent"
                min={500}
              />
            </div>

            {/* Sliders */}
            <div className="space-y-6">
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
                  <span className='font-bold text-gray-800'>8%</span>
                  <span className="font-bold text-xl">{rate}%</span>
                  <span className='font-bold text-gray-800'>30%</span>
                </div>
              </div>

              {/* Calculate with Inflation Dropdown */}
              <div className="flex items-center justify-between">
                <label className="text-gray-800 font-semibold text-lg">
                  Calculate with Inflation
                </label>
                <div className="relative">
                  <select
                    value={inflationAdjusted ? "yes" : "no"}
                    onChange={(e) => setInflationAdjusted(e.target.value === "yes")}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 font-medium cursor-pointer hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Chart & Results */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <p className="text-gray-600 text-xl font-semibold mb-2 text-center">
              The total value of your investment after{" "}
              <span className="font-bold">{years} Year{years > 1 ? 's' : ''}</span> will be
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ₹{totalValue.toLocaleString('en-IN')}
            </h2>

            {/* Legend */}
            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                <span className="text-sm text-gray-700">Investment Amount</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                <span className="text-sm text-gray-700">Estimated Return</span>
              </div>
            </div>

            {/* Bar Chart */}
            <ResponsiveContainer width="70%" height={350}>
              <BarChart data={yearlyData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: '#666', fontSize: 12 }}
                  axisLine={{ stroke: '#e0e0e0' }}
                />
                <YAxis 
                  tick={{ fill: '#666', fontSize: 12 }}
                  axisLine={{ stroke: '#e0e0e0' }}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip 
                  formatter={(value) => `₹${value.toLocaleString('en-IN')}`}
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px' }}
                />
                <Bar dataKey="invested" stackId="a" fill="#F97316" radius={[0, 0, 0, 0]} />
                <Bar dataKey="returns" stackId="a" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>

            <button 
              onClick={() => navigate('/login')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold mt-6 px-8 py-3 rounded-lg shadow transition-colors w-full max-w-xs"
            >
              INVEST NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSipCalculator;