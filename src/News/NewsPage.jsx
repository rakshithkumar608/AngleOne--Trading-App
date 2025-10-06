import React, { useState } from 'react'
import img1 from "../assets/News1.webp";
import img2 from "../assets/News2.png";
import img3 from "../assets/NEws4.webp";
import img4 from "../assets/Newss4.webp";
import img5 from "../assets/Newss5.webp";
import img6 from "../assets/Newss6.webp";
import myImage from "../assets/iphone-2x.webp";
import Img1 from "../assets/app1.webp";
import Img2 from "../assets/app2.webp";
import Announcement from './Announcement';

const NewsPage = () => {
  const [formData, setFormData] = useState({
    number:''
  });
  const [errors,setErrors] = useState({
    number:''
  });

  //regex patterns
  const phoneRegex = /^[6-9]\d{9}$/;

  const handleChange = (e) =>{
  const {name,value} = e.target;
  setFormData({
    ...formData,
    [name]:value
  });

  //clear errors when user starts typing
  if (errors[name]){
    setErrors({
      ...errors,
      [name]:''
    });
  }
  };

  const validatedForm = () =>{
    let newErrors = {number:''};
    let isValid = true;

    //number validation
    if(!formData.number) {
      newErrors.number = "Phone Number is required";
      isValid  = false;
    } else if (!phoneRegex.test(formData.number)) {
      newErrors.number = 'Please enter a valid phone Number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

 const handleGetStarted = () =>{
  if (validatedForm()) {
    console.log('Number correct', formData);
    alert('Gink generated Successful');
    
  }
 }

  const Topnews = [
    {
      imgSrc: img1,
      alt: "News1",
      title: "IPOs",
      desc: "DSM Fresh Foods IPO Allotment Status",
      date: "September 30, 2025",
    },
    {
      imgSrc: img2,
      alt: "News2",
      title: "Share Market",
      desc: "OMC Stocks Gain Up To 7% On September 29 After Minister Calls for Higher Valuations",
      date: "September 30, 2025",
    },
    {
      imgSrc: img3,
      alt: "News3",
      title: "IPOs",
      desc: "Pace Digitek IPO Allotment Status",
      date: "September 30, 2025",
    },
    {
      imgSrc: img4,
      alt: "News4",
      title: "Market Updates",
      desc: "Ola Electric Share Price Hits 5% Upper Circuit After Recent Price Drop",
      date: "September 30, 2025",
    },
    {
      imgSrc: img5,
      alt: "News5",
      title: "Commodities",
      desc: "Silver Prices Reach All-Time Peak Driven by Global Gains and Industrial Use",
      date: "September 30, 2025",
    },
    {
      imgSrc: img6,
      alt: "News6",
      title: "Mutual Funds",
      desc: "ICICI Prudential Launches Conglomerate Fund, NFO Opens on October 3",
      date: "September 30, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top News Heading */}
      <div className="px-4 sm:px-10 py-6 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center sm:text-left">
          Top News
        </h2>
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10 pb-8">
        {Topnews.map((news, index) => (
          <div
            key={index}
            className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl bg-white text-start"
          >
            <div className="rounded-lg w-full h-48 overflow-hidden">
              <img
                src={news.imgSrc}
                alt={news.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-3 pb-2 px-3">
              <h2 className="text-sm font-semibold text-blue-600">
                {news.title}
              </h2>
              <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
                {news.desc}
              </h3>
              <p className="text-sm text-gray-500">{news.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image section */}
      <div className="w-full h-auto bg-gradient-to-br from-blue-600 to-blue-800 p-4 sm:p-6 md:p-8 flex rounded-lg">
        <div className="max-w-6xl w-full text-white flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 mx-auto">

          {/* Left Side - Image */}
          <div className="flex-shrink-0 flex justify-center lg:justify-start">
            <div className="w-40 h-56 sm:w-52 sm:h-72 md:w-60 md:h-80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
              <img
                src={myImage}
                alt="iphone"
                className="object-contain w-full h-full bg-gray-300"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col gap-4 sm:gap-6 flex-1 w-full text-center sm:text-left">

            {/* Top section */}
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <div>
                <div className="text-yellow-400 text-2xl sm:text-3xl font-bold">4.4 Cr+</div>
                <div className="text-yellow-400 text-xl sm:text-2xl font-bold">DOWNLOADS</div>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 leading-tight">
                  Enjoy ₹0 Account Opening Charges
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-gray-800">
                  Get the link to download the App
                </p>
              </div>
            </div>

            {/* Input Section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6 w-full">
              <input
              value={formData.number}
              onChange={handleChange}
                name='number'
                type="text"
                placeholder="Enter your mobile number"
                className={`w-full text-black bg-white  px-4 py-3 border rounded-lg focus:outline-black focus:right-2 focus:ring-black focus:border-transparent ${
                  errors.number ? 'border-red-500' : 'border-white'
                }`}
              />
              {
                errors.number && (
                  <p className='text-red-500 text-xs mt-1'>{errors.number}</p>
                )
              }
              <button 
              onClick={handleGetStarted}
              className="bg-blue-700 hover:bg-blue-800 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base whitespace-nowrap w-full sm:w-auto">
                Get Started
              </button>
            </div>

            {/* Bottom section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 sm:gap-6">
              
              {/* QR Code */}
              <div className="p-2 sm:p-4 rounded-lg">
                <div className="sm:w-20 sm:h-20 bg-gray-800 flex items-center justify-center rounded">
                  <div className="w-16 h-16 sm:w-16 sm:h-16 bg-white flex items-center justify-center rounded">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=login"
                      alt="QR"
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* App store buttons */}
              <div className="flex flex-col gap-2 sm:gap-3 w-full sm:w-auto">
                <div className="flex justify-center sm:justify-start">
                  <div className="w-28 h-10 sm:w-36 sm:h-12 bg-black rounded flex items-center justify-center cursor-pointer">
                    <img src={Img1} alt="app1" className="w-24 sm:w-28" />
                  </div>
                </div>
                <div className="flex justify-center sm:justify-start">
                  <div className="w-28 h-10 sm:w-36 sm:h-12 bg-black rounded flex items-center justify-center cursor-pointer">
                    <img src={Img2} alt="app2" className="w-24 sm:w-28" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Announcement />
    </div>
  );
};

export default NewsPage;
