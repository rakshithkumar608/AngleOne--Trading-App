import React, { useState } from 'react'
import myImage from "../assets/iphone-2x.webp";
import Img1 from "../assets/app1.webp";
import Img2 from "../assets/app2.webp"



const DownloadSection = () => {


  const [formData, setFormData] = useState({
    number:''
  });
  const [errors, setErrors] = useState({
    number:''
  });

  //regex patterns
  const phoneRegex = /^[6-9]\d{9}$/;

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    });

    //clear errors when user starts typing
    if(errors[name]){
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
      newErrors.number = 'This field is Required';
      isValid = false;
    } else if (!phoneRegex.test(formData.number)) {
      newErrors.number = 'Enter the correct 10 digit mobile number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleGetStarted = () => {
    if (validatedForm()) {
      console.log('Number correct', formData);
      alert("Register Succesful");
      
    }
  }

  return (
    <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-40 my-8 sm:my-16 md:my-20 lg:my-40 h-auto w-auto bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-center p-4 sm:p-6 md:p-8 flex rounded-lg'>
      <div className="max-w-6xl w-full text-white flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 justify-center items-center">
        
        {/* Left side - iPhone image */}
        <div className="flex-shrink-0 order-1 lg:order-1">
          <div className='w-48 h-64 sm:w-52 sm:h-72 md:w-60 md:h-80 flex items-center justify-center text-gray-600 rounded-2xl sm:rounded-3xl shadow-2xl'>
            {/* <img src={myImage} alt='iphone' className="w-full h-full object-contain"/> */}
            <div className="w-full h-full bg-gray-300 rounded-2xl sm:rounded-3xl flex items-center justify-center text-gray-600 text-sm">
             <img src={myImage} alt='iphone'/>
            </div>
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="flex flex-col gap-4 sm:gap-6 flex-1 max-w-2xl order-2 lg:order-2 w-full">
          
          {/* Top section - Downloads and Heading */}
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-16 items-start flex-col sm:flex-col lg:flex-row text-center sm:text-center lg:text-left">
            
            {/* Downloads section */}
            <div className="w-full lg:w-auto">
              <div className="text-yellow-400 text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">4.4 Cr+</div>
              <div className="text-yellow-400 text-xl sm:text-2xl font-bold">DOWNLOADS</div>
            </div>
            
            {/* Main heading section */}
            <div className='w-full lg:w-auto'>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 mt-0 leading-tight">
                Enjoy ₹0 Account Opening<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Charges
              </h1>
            </div>
            
          </div>
          
          {/* Input section */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6 w-full">
            <input
            value={formData.number}
            onChange={handleChange}
              type="text"
              name='number'
              placeholder="Enter your mobile number"
              className={`w-full text-black bg-white  px-4 py-3 border rounded-lg focus:outline-black focus:right-2 focus:ring-black focus:border-transparent ${
                errors.number ? 'border-red-500' : 'border-white '
              }`}
            />
            {errors.number && (
              <p className='text-red-500 text-xs mt-1'>{errors.number}</p>
            )}
            <button 
            onClick={handleGetStarted}
            className="bg-blue-700 hover:bg-blue-800 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base whitespace-nowrap">
              Get Started
            </button>
          </div>
          
          {/* Bottom section - QR code and App Store buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6">
            
            {/* QR Code placeholder */}
            <div className="bg-white p-3 sm:p-4 rounded-lg order-1 sm:order-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 flex items-center justify-center text-white text-xs text-center rounded">
                {/* QR Code placeholder */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white text-black text-xs flex items-center justify-center">
                   <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=login"
                alt="QR"
                className="mx-auto w-16 sm:w-20"
              />
                </div>
              </div>
            </div>
            
            {/* App store buttons */}
            <div className="flex flex-col gap-2 sm:gap-3 order-2 sm:order-2">
              
              {/* App Store button */}
              <div className="px-2 sm:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 min-w-36 sm:min-w-48 cursor-pointer transition-colors">
                <div className="w-24 h-8 sm:w-35 sm:h-10 bg-black rounded flex items-center justify-center">
                  <img src={Img1} alt='app1'/>
                </div>
              </div>
              
              {/* Google Play button */}
              <div className="px-2 sm:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 min-w-36 sm:min-w-48 cursor-pointer transition-colors">
                <div className="w-24 h-8 sm:w-35 sm:h-10 bg-black rounded flex items-center justify-center">
                 <img src={Img2} alt='app2'/>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default DownloadSection