import React, { useState } from 'react'

const Announcement = () => {

  const [formData, setFormData] = useState({
    number:''
  });
  const [errors, setErrors] = useState({
    number:''
  });

  //Regex pattern
  const phoneRegex = /^[6-9]\d{9}$/;

  const handleChange = (e) =>{
   const {name, value} = e.target;
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
      isValid = false;
    } else if (!phoneRegex.test(formData.number)) {
      newErrors.number = 'Please enter a valid phone Number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  } ;

  const handleGetLink = () =>{
    if (validatedForm()) {
      console.log('Number correct', formData);
      alert('Demat Account created Successfully');
      
    }
  }



  const announcement = [
    {
      date: 'Sep 25, 2025',
      title: 'Offer For Sale (OFS) – EIMCO ELECON (INDIA) LTD.',
    },
    {
      date: 'Sep 19, 2025',
      title: 'Offer For Sale (OFS) – INDOSOLAR LTD.',
    },
    {
      date: 'Sep 10, 2025',
      title: 'Offer For Sale (OFS) – Blue Jet Healthcare Ltd.',
    },
  ]

  return (
    <div className=" bg-white flex flex-col md:flex-row justify-between items-start md:items-stretch px-6 md:px-20 py-10 gap-10">
      {/* Left section */}
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Announcement</h1>

        <div className="space-y-6">
          {announcement.map((items, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <p className="text-gray-500 text-sm mb-1">{items.date}</p>
              <p className="text-gray-900 font-medium hover:text-blue-700 cursor-pointer">
                {items.title}
              </p>
            </div>
          ))}
        </div>

        <button className="mt-8 text-blue-700 font-medium hover:underline flex items-center gap-1 md:ml-75">
          VIEW ALL <span className="text-lg">›</span>
        </button>
      </div>

      {/* Right section */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end">
        <div className="border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 w-full max-w-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
            Open Free Demat Account!
          </h2>
          <p className="text-sm text-gray-600 mb-4 text-center">
            Join our 3 Cr+ happy customers
          </p>

          <div className="bg-indigo-50 rounded-lg p-4 mb-6 flex items-center justify-center">
            <div className="flex items-center gap-3">
              <span className="text-5xl font-bold text-indigo-600">₹0</span>
              <p className="text-indigo-700 font-semibold leading-tight text-lg">
                Brokerage
                <br />
                <span className="text-sm font-normal text-gray-500">
                  for first 30 days*
                </span>
              </p>
            </div>
          </div>

          {/* Input field */}
          <div className="flex border rounded-lg overflow-hidden ">
            <span className="px-3 py-2 text-gray-500 bg-gray-50 border-r">+91</span>
            <input
            value={formData.number}
            onChange={handleChange}
              type="text"
              name='number'
              placeholder="Enter Mobile Number"
              className={`w-full  bg-white  px-4 py-3   ${
                  errors.number ? 'border-red-500' : 'border-white'
                }`}
            />
        
           
          </div>
             {
                errors.number && (
                  <p className=' text-red-500 text-xs '>{errors.number}</p>
                )
              }
          {/* Button */}
          <div className='mt-3'>
          <button
          onClick={handleGetLink} 
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg font-medium transition duration-200 ">
            Get Free Demat Account
          </button>

          <p className="text-center text-sm text-indigo-700 mt-4 cursor-pointer hover:underline">
            Want to open an NRI account?
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Announcement
