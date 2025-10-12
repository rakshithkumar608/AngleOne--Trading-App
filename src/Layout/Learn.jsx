import React from 'react';
import { ChevronRight } from 'lucide-react';
import myImage from "../assets/learn.webp";

const Learn = () => {
  const features = [
    {
      title: "News",
      description: "Stay informed with expert insights, market trends, and investment themes in our insightful blog section.",
      color: "bg-blue-50 border-blue-500",
    },
    {
      title: "Knowledge Center",
      description: "Unlock our comprehensive hub of educational resources for confident trading and investing.",
      color: "bg-blue-50 border-blue-500",
    },
    {
      title: "Smart Money",
      description: "Learn smarter ways to grow wealth with personalised investment and trading courses.",
      color: "bg-blue-50 border-blue-500",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Heading */}
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              LEARN TO EARN WITH<br />
              <span className="text-blue-600">ANGEL ONE</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Master the art of investing and secure your financial future with Angel One's learning resources.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} border rounded-xl p-5 sm:p-6 cursor-pointer group transition-shadow hover:shadow-md`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
            <img
              src={myImage}
              alt="Learning illustration"
              className="w-full h-auto object-contain rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
