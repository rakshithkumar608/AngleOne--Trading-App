import React, { useEffect, useState } from 'react';
import { TrendingUp, Zap, ShoppingBasket, ChevronLeft, ChevronRight, Shield, Clock } from 'lucide-react';
import myImage from "../assets/main4.webp"
import myImage5 from "../assets/main5.webp"
import myImage6 from "../assets/main6.webp"

const Uses1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: myImage,
      title: "Professional Trading Interface",
      description: "Advanced tools for serious traders"
    },
    {
      image: myImage5,
      title: "Real-time Market Data",
      description: "Stay ahead with live market insights"
    },
    {
      image: myImage6,
      title: "Portfolio Management",
      description: "Comprehensive portfolio tracking"
    },
  ];

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-4 py-8 lg:p-6">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                   
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight">
                BUILT FOR<br />
                <span className="text-gray-700">TRADERS</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg mb-6 lg:mb-8 max-w-md lg:max-w-lg leading-relaxed mx-auto lg:mx-0">
                Built by experts, Angel One is meticulously designed for serious traders seeking power, precision, and profitability.
              </p>
            </div>

            <div className="space-y-6 lg:space-y-8">
              {/* Swifter Charts */}
              <div className="flex flex-col sm:flex-row gap-4 bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-lg">
                <div className="flex-shrink-0 flex justify-center sm:justify-start">
                  <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2">Swifter Charts</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Enjoy real-time charting powered by advanced indicators, multi-chart layouts, direct trading from charts, etc.
                  </p>
                </div>
              </div>

              {/* Fast Order Placement - Highlighted */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-lg">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-shrink-0 flex justify-center sm:justify-start">
                    <Zap className="w-6 h-6 text-blue-600 mt-1" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2">Fast Order Placement</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Execute trades with speed and precision, giving you the edge in dynamic markets
                    </p>
                  </div>
                </div>
              </div>

              {/* Basket Orders */}
              <div className="flex flex-col sm:flex-row gap-4 bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-lg">
                <div className="flex-shrink-0 flex justify-center sm:justify-start">
                  <ShoppingBasket className="w-6 h-6 text-blue-600 mt-1" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2">Basket Orders</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Place multiple orders in a single transaction via Basket! Seize all your trade opportunities at a fast speed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Slider Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="relative">
                {/* Main slider container */}
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {slides.map((slide, index) => (
                      <div key={index} className="w-full flex-shrink-0 relative">
                        <img 
                          src={slide.image}
                          className="w-full h-80 sm:h-96 lg:h-[420px] object-cover"
                          alt={`Trading interface ${index + 1}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                          <h4 className="text-white font-bold text-lg sm:text-xl mb-2 drop-shadow-lg">
                            {slide.title}
                          </h4>
                          <p className="text-gray-100 text-sm drop-shadow">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 group"
                  >
                    <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 group"
                  >
                    <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        currentSlide === index 
                          ? 'bg-blue-600 scale-110 shadow-lg' 
                          : 'bg-gray-300 hover:bg-gray-400 hover:scale-105'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Uses1;