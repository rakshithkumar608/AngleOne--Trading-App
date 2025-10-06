import { X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import img from "../assets/Register2.svg"
import {  useNavigate } from 'react-router-dom';
import Regulatory from './Regulatory';

const OpenAccount = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData ] = useState({
    number: ''
   });
   const [errors, setErrors] = useState({
    number:''
   });

  useEffect(() =>{
    setIsModelOpen(true);
  }, []);

  const closeModel = () =>{
    setIsModelOpen(false);
    setTimeout(() => navigate('/'), 300);
  }
if(!isModelOpen) return null;

//regex patterns
const phoneRegex = /^[6-9]\d{9}$/;

const handleChange = (e) =>{
  const {name, value} = e.target;
  setFormData({
    ...formData,
    [name]:value
  });


  //clear errors when user starts typing
  if(errors[name]) {
    setErrors({
      ...errors,
      [name]:''
    });
  }
};

const ValidatedForm = () =>{
  let newErrors = {number:''};
  let isValid = true;

  //number validation
  if (!formData.number) {
     newErrors.number = 'Phone Number is required';
     isValid = false;
  } else if (!phoneRegex.test(formData.number)) {
    newErrors.number = 'please enter a valid phone number';
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
};

const getAccount = () =>{
  if(ValidatedForm()) {
    console.log('Number correct', formData);

    navigate('/register')
    
  }
}
  return (
    <>
    <Regulatory />
    <div className='fixed inset-0  bg-opacity-40 flex items-center justify-center z-50 '>
      <div className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-[70%] max-w-4xl flex overflow-hidden relative animate-fadeIn">

        {/* close button */}
        <button 
        onClick={closeModel}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">
          <X size={24}/>
        </button>

        {/* Left Sction */}
        <div className="w-1/2 bg-blue-50 p-10 flex flex-col items-center justify-center text-center  md:flex">
       <img src={img} alt="Rupee Icon" className="w-20 h-45 mb-4" />
        <p className="text-gray-700 mt-4 font-semibold text-2xl">
            Minimal Brokerage Charges
          </p>
          <p className="text-gray-500 text-medium mt-2 max-w-xs">
            ₹0 brokerage on stock investments and flat ₹0 AMC for the first year.
          </p>
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-center">
         <h2 className="text-lg font-medium text-gray-700 mb-6">
            Fast-track your investing journey with India’s fastest growing fintech company
          </h2>

          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-4 ">
            <span className='px-3 py-2 text-gray-600 border-r border-gray-200 rounded-sm'>+91</span>
             <input
             value={formData.number}
             onChange={handleChange}
              type="text"
              name='number'
              placeholder="Enter Mobile Number"
              className={` w-full px-4 py-3 border rounded-lg focus:outline-none focus:right-2 focus:ring-blue-500 focus:border-transparent ${
              errors.number ? 'border-red-500' : 'border-gray-300 flex'
            }`}
            />
          </div>
          {
            errors.number && (
              <p className='text-red-600 text-sm mt-1'>{errors.number}</p>
            )
          }

 <button 
 onClick={getAccount}
 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 w-full">
            OPEN FREE DEMAT ACCOUNT
          </button>

          
          <p className="text-gray-400 text-sm font-semibold mt-3 ">
            By proceeding, I agree to{" "}
            <span className="text-blue-600 cursor-pointer font-semibold">T&C</span> and{" "}
            <span className="text-blue-600 cursor-pointer font-semibold">Privacy Policy</span>.
          </p>

          <p
       
          className="mt-5 text-lg text-gray-600 font-semibold text-medium">
            Do you already have an account?{" "}
            <span 
            onClick={() =>navigate("/login")}
            className="text-blue-600 hover:underline cursor-pointer">Login</span>
          </p>

        </div>
      </div>
    </div>
    </>
  )
}

export default OpenAccount