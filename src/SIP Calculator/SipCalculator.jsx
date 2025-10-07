import  { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";


const SipCalculator = () => {
  const navigate = useNavigate()

  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [years, setyears] = useState(5);
  const [rate, setRate] = useState(12);

  //SIP Calculation - Fixed Formula
  const months = years * 12;
  const monthlyRate = rate / 12 / 100;

  // SIP future Formula
  const totalValue = monthlyRate === 0 
  ? monthlyInvestment * months
  : monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

  const investmentAmount = monthlyInvestment * months;
  const estimatedReturns = totalValue - investmentAmount;

  const data = [
    {name: "InvestedAmount", value: Math.round(investmentAmount) },
    { name: "Est. Returns", value: Math.round(estimatedReturns) },
  ]



  const COLORS = ["#F97316", "#3B82F6"]


  const tabs = ['SIP Investment Amount', 'Lumpsum Amount', 'Advance SIP Calculator']
  const [active, setActive] = useState();


  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold  text-gray-900">SIP Calculator</h1>
        <p className="text-gray-600 mt-3 text-lg max-w-5xl">
          The SIP calculator helps estimate the potential growth of your
          Systematic Investment Plan (SIP) investment over your chosen time
          frame. SIP is a convenient method to save for your long-term financial
          goals.
        </p>

        {/* Tabs */}
        <div className="flex gap-6 mt-8 border-b border-gray-200">
          <div className="flex space-x-6   mb-8  mt-6 text-xl cursor-pointer">
            {tabs.map((items) => (
              <button
                key={items}
                onClick={() => setActive(items)}
                className={`relative pb-2 font-medium text-sm md:text-base transition-colors duration-300 cursor-pointer ${
                  active === items
                    ? "text-blue-700"
                    : "text-gray-600 hover:text-blue-700"
                } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 ${
                  active === items
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`}
              >
                {items}
              </button>
            ))}
          </div>
        </div>

        {/* Claculator Sction */}
        <div className="bg-white shadow-md rounded-xl p-6 mt-8 flex flex-col md:flex-row justify-between gap-8 border border-gray-200">
          {/* left inputs */}
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

            {/* Investment input */}
            <div className="border border-blue-300 rounded-lg text-center py-6 mb-6">
              <div className="text-lg text-gray-600 font-medium mb-2">
                ENTER AMOUNT
              </div>
              <div className="relative">
                <input
                  type="number"
                  value={monthlyInvestment}
                  onChange={(e) =>
                    setMonthlyInvestment(Math.max(500, Number(e.target.value)))
                  }
                  className="text-4xl font-bold text-blue-600 text-center w-full outline-none bg-transparent"
                  min="500"
                />
              </div>
            </div>

            {/* Slider */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-lg">
                  Monthly Investment Amount
                </label>

                <input
                  type="range"
                  min="500"
                  max="20000000"
                  step="500"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span className='font-bold text-gray-800'>₹500</span>
                  <span className=" font-bold text-xl">
                    ₹{monthlyInvestment.toLocaleString()}
                  </span>
                  <span className='font-bold text-gray-800'>₹20000000</span>
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
                  onChange={(e) => setyears(Number(e.target.value))}
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
            </div>
          </div>
          {/* Right chart and Results */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <p className="text-gray-600 text-xl leading-1 font-semibold">
              The total value of your investment after{" "}
              <span className="font-bold">{years} Year{years > 1 ? 's' : ''}</span> will be
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              ₹{totalValue.toLocaleString('en-IN', {
                maximumFractionDigits: 0
              })}
            </h2>

         <ResponsiveContainer width="130%" height={250}>
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
                <Cell key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}/>
              ))}
              </Pie>
              <Tooltip />
          </PieChart>
         </ResponsiveContainer>

         <div className="flex flex-col gap-2 w-full max-w-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
              <span className="text-gray-700">Invested Amount</span>
            </div>
            <span className="font-semibold text-gray-900">
              ₹{investmentAmount.toLocaleString('en-In')}
            </span>
          </div>

          <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                  <span className="text-gray-700">Est. Returns</span>
                </div>
                <span className="font-semibold text-gray-900">
                   ₹{estimatedReturns.toLocaleString('en-IN', {
                    maximumFractionDigits: 0,
                  })}
                </span>
          </div>
         </div>

         <button 
         onClick={() => navigate('/login')}
         className="bg-blue-600 hover:bg-blue-700 text-white font-bold mt-6 px-8 py-3 rounded-lg shadow transition-colors">INVEST NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SipCalculator