import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import myImage from "../assets/main1.webp"
import myImage1 from "../assets/main2.webp";
import myImage2 from "../assets/main3.webp";

const Uses = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: myImage,
      title: "Smart Investment Solutions",
      description: "Experience the future of investing with our advanced platform."
    },
    {
      image: myImage1,
      title: "Expert Portfolio Management",
      description: "Get professionally managed portfolios tailored to your goals."
    },
    {
      image: myImage2,
      title: "24/7 Market Access",
      description: "Trade anytime, anywhere with our round-the-clock platform."
    }
  ];

  // Auto-slide functionality
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
    <div className='w-full flex flex-col lg:flex-row bg-gray-50 items-center justify-center min-h-screen px-4 py-8 lg:py-0'>
      {/* Carousel Section */}
      <div className='w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center'>
        <div className='max-w-lg w-full relative'>
          {/* Main carousel container */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img 
                    src={slide.image}
                    className='w-full h-120 object-cover'
                    alt={`Investment slide ${index + 1}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="text-white font-bold text-xl mb-2 drop-shadow-lg">{slide.title}</h3>
                    <p className="text-gray-100 text-sm drop-shadow">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-white" />
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
                    ? 'bg-blue-600 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
          
      {/* Content Section */}
      <div className='w-full lg:w-1/2 lg:pl-8 xl:pl-16 max-w-2xl'>
        <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-800 mb-4 lg:mb-6 leading-tight text-center lg:text-left'>
          SEAMLESS<br />INVESTING
        </h1>
        <p className='text-gray-600 mb-8 lg:mb-10 max-w-md text-base lg:text-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0'>
          Experience seamless investing with Angel One. Access the industry's best tools and expert insights to achieve your financial goals.
        </p>
                         
        <div className='space-y-6 lg:space-y-8'>
          {/* Zero Commission */}
          <div className="flex flex-col sm:flex-row gap-4 bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-lg">
            <div className="flex-shrink-0 flex justify-center sm:justify-start">
              <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className='font-bold text-lg sm:text-xl text-gray-800 mb-2'>Zero Commission on Mutual Fund Investments/SIPs</h3>
              <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
                Enjoy the compounding returns of mutual funds and SIPs, at no additional costs.
              </p>
            </div>
          </div>
                           
          {/* Portfolio Advisory - Highlighted */}
          <div className="flex flex-col sm:flex-row gap-4 bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-lg">
            <div className="flex-shrink-0 flex justify-center sm:justify-start">
              <Shield className="w-6 h-6 text-blue-600 mt-1" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className='font-bold text-lg sm:text-xl text-gray-800 mb-2'>Portfolio Advisory</h3>
              <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
                Access ready-to-invest, well-researched portfolios built by experts, empowering you to make informed investment decisions.
              </p>
            </div>
          </div>
                           
          {/* 24/7 Order Placement */}
          <div className="flex flex-col sm:flex-row gap-4 bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-lg">
            <div className="flex-shrink-0 flex justify-center sm:justify-start">
              <Clock className="w-6 h-6 text-blue-600 mt-1" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className='font-bold text-lg sm:text-xl text-gray-800 mb-2'>24/7 Order Placement</h3>
              <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
                Place buy/sell orders for stocks, bonds, and other assets at any time, round the clock, so you never miss an opportunity in the fast-paced world of finance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uses;