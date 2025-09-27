import React from 'react';
import {  ChevronRight } from 'lucide-react';
import myImage from "../assets/learn.webp"

const Learn = () => {
  const features = [
    {
      
      title: "News",
      description: "Stay informed with expert insights, market trends, and investment themes in our insightful blog section.",
      color: "bg-blue-50 border-blue-500"
    },
    {
      
      title: "Knowledge Center",
      description: "Unlock our comprehensive hub of educational resources for confident trading and investing.",
      color: "bg-blue-50 border-blue-500"
    },
    {
     
      title: "Smart Money",
      description: "Learn smarter ways to grow wealth with personalised investment and trading courses.",
      color: "bg-blue-50 border-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-12">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                LEARN TO EARN WITH<br />
                <span className="text">ANGEL ONE</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                Master the art of investing and secure your financial future with Angel One's learning resources.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`${feature.color} border rounded-xl p-6 w-130 cursor-pointer group`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-700 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
             
       <img src={myImage} className=' items-center justify-center w-160 h-145' />
            </div>
                </div>
              </div>
               </div>
          </div>

       
      
   
  );
};

export default Learn;