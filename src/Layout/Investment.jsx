import { BarChart, Building2, Droplet, Megaphone, PiggyBank, TrendingUp } from 'lucide-react'
import React from 'react'

const Investment = () => {
  const investmentOptions =[
    {
      icon: <TrendingUp className='w-12 h-12 text-green-600'/>,
      title: "Stocks",
      description: "Own a part of renowned companies and enjoy capital appreciation.",
      bgColor: "bg-white",
      borderColor: "border-green-200",
    },

    {
      icon: <Megaphone className='w-12 h-12 text-orange-600'/>,
      title: "IPO",
      description: "Secure part ownership in new ventures and seize high growth potential.",
      bgColor: "bg-white",
      borderColor: "border-orange-200",
    },

    {
      icon: <BarChart className='w-12 h-12 text-red-600'/>,
      title: "F&O",
      description: "Navigate market volatility, manage risk and amplify returns with F&O trading.",
      bgColor: "bg-white",
      borderColor: "border-red-200",
    },

    {
      icon: <PiggyBank className='w-12 h-12 text-orange-600'/>,
      title:"Mutual Funds",
       description: "Invest in professionally managed portfolios for steady growth.",
      bgColor: "bg-white",
      borderColor: "border-orange-200"
    },

    {
      icon : <Droplet className='w-12 h-12 text-blue-600'/>,
       title: "Commodities",
      description: "Trade in metals, gold, oil, and more to hedge risk and enhance your portfolio.",
      bgColor: "bg-white",
      borderColor: "border-blue-200"
    },

    {
      icon:<Building2 className='w-12 h-12 text-teal-600'/>,
       title: "US Stock",
      description: "Seize global opportunities by investing in the world's largest economy.",
      bgColor: "bg-white",
      borderColor: "border-teal-200"
    }
  ]
  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6'>PICK YOUR PREFERRED INVESTMENT</h1>
        <p className='text-lg text-gray-600 max-w-4xl mx-auto loading-relaxed'>  Discover Angel One's extensive array of investment options, from stocks and bonds to mutual funds and more</p>
      </div>

{/* investment options */}
<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {investmentOptions.map((option, index) => (
    <div 
    key={index}
    className={`${option.bgColor} ${option.borderColor} border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105`}>

       <div className="flex flex-col items-start  space-y-4">
        {/* icon */}
        <div className="transform group-hover:scale-110 transition-transform duration-300"> {option.icon}
       </div>

       {/* title */}
     <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">{option.title}</h3>

   {/* Description */}
   <p className='text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors'>{option.description}</p>
    </div>
    </div>
  ))}
   </div>

{/* call to action */}
<div className="text-center mt-16">
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">Start Investing Today</button>
</div>
    </div>
    </div>
  )
}

export default Investment