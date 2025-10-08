import { Calculator } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const InvestmentPage = () => {
  const navigate = useNavigate();

  const [monthlyInvestment, setMonyhlyInvestment] = useState(5000);
  const [years, setYears] = useState(3);
  const [rate, setRate] = useState(5);

  //sip calculation
  const months = years  * 12;
  const monthlyRate = rate / 12 /100;

  //corrext SIP future value formula
  const totalValue = monthlyRate === 0
  ? monthlyInvestment * months
  : monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

  const investedAmount = monthlyInvestment * months;
  const estimatedReturns = totalValue - investedAmount;

  const data = [
    { name: "Invested Amount", value: Math.round(investedAmount) },
    { name: "Est. Returns", value: Math.round(estimatedReturns) },
  ]

  
  const COLORS = ["#F97316", "#3B82F6"];


  const tabs = [
    {name: 'Investment Amount'},
    {name:'Lumpsum Amount'}
  ];

  return (
    <div className='min-h-screen bg-gray-50 py-10 px-4 md:px-16 '>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className='text-5xl font-bold text-gray-900 items-center justify-center text-center '>Calculate SIP Returns</h1>


        {/* Tabs */}
          <div className="flex gap-6 mt-8 border-b border-gray-200">
          <div className="flex space-x-6 mb-8 mt-6 text-xl cursor-pointer">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => navigate(tab.path)}
                className={`relative pb-2 font-medium text-lg md:text-base transition-colors duration-300 cursor-pointer ${
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
          {/* calculation sction */}
          <div className="bg-white shadow-md rounded-xl p-6 mt-8 flex flex-col md:flex-row justify-between gap-8 border border-gray-200">
            {/* Left input */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Calculator className='text-blue-600 w-7 h-7'/>
              </div>

             <div>
              <h3 className="font-bold text-gray-800 text-xl">Returns Estimator</h3>
               <p className="text-gray-500 text-sm">
                  Estimation is based on the past performance
                </p>
             </div>
            </div>


            {/* Investment input */}
            <div className="border border-orange-300 rounded-lg text-center py-6 mb-6 shadow shadow-orange-600/40">
              <div className="text-lg text-gray-600 font-medium mb-2">ENTER AMOUNT</div>
              <input 
              type='number' 
              value={monthlyInvestment} 
              onChange={(e) => setMonyhlyInvestment(Math.max( Number(e.target.value)))}
              className='text-3xl font-bold text-gray-800 text-center w-full outline-none'
              min="500"
              />
            </div>

          {/* sliders */}
          <div className="space-y-6">
            <div>
              <label className='block text-gray-600 font-semibold mb-2 text-lg'>Monthly Investment Amount</label>
              <input 
              type='range' 
              min="500" 
              max="1000000000" 
              step="500"
              value={monthlyInvestment}
              onChange={(e) => setMonyhlyInvestment(Number(e.target.value))}
              className='w-full accent-blue-600'
              />
              <div className="flex justify-between text-lg text-gray-500">
                <span>₹500</span>
                <span className='font-medium'>₹{monthlyInvestment.toLocaleString()}</span>
                 <span>₹1,00,000,000</span>
              </div>
            </div>

            <div>
              <label className='block text-gray-600 font-semibold mb-2 text-lg'>
                Select Duration
              </label>
              <input 
              type='range' 
              min="1"
              max="30"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className='w-full accent-blue-600'
              />
              <div className="flex justify-between text-xl text-gray-500">
                <span>1 Yr</span>
                <span className='font-medium'>{years} Yr{years > 1 ? 's' : ''}</span>
                <span>30 Yrs</span>
              </div>
            </div>

            <div>
              <label className='block text-gray-600 font-semibold mb-2 text-lg'>Expected Rate of Return</label>
              <input 
              type='range'
              min="1"
              max="30"
              value={rate}
              onChange={(e) =>setRate(Number(e.target.value))}
              className='w-full accent-blue-600'
              />
              <div className="flex justify-between text-lg text-gray-500">
                <span>1%</span>
                  <span className="font-medium">{rate}%</span>
                  <span>30%</span>
              </div>
            </div>
          </div>
          </div>


          {/*Right chart */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <p className='text-gray-700 text-lg'>
              The total value of your investment after {" "}
              <span className='font-semibold'>{years} Year{years > 1 ? 's' : ''}</span> will be
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">₹{totalValue.toLocaleString('en-IN', {
              maximumFractionDigits: 0
            })}</h2>

            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie 
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                >
                {data.map((_, index) =>(
                  <Cell
                   key={`cell-${index}`}
                   fill={COLORS[index % COLORS.length]}
                   />
                ))}
                </Pie>
               <Tooltip formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
              </PieChart>
            </ResponsiveContainer>

            <div className="flex flex-col gap-2 w-full max-w-xs">
              <div className="flex items-center justify-between">
                <div className="flex-items-center gap-2">
                   <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                  <span className="text-gray-700">Invested Amount</span>
                </div>

                <span className='font-semibold text-gray-900'> ₹{investedAmount.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                  <span className="text-gray-700">Est. Returns</span>
                </div>
                <span className='font-semibold text-gray-900'>
                   ₹{estimatedReturns.toLocaleString('en-IN', {
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
            </div>

            <button
            onClick={() => navigate('/login') }
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold mt-6 px-8 py-3 rounded-lg shadow transition-colors">
              INVEST NOW
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default InvestmentPage