import React from 'react'
import img from "../assets/zero-removebg-preview.png";
import img1 from "../assets/iphone-2x.webp";

const DematAccount = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <h1 className="text-5xl font-bold text-gray-900 text-center md:text-left">Open Free Demat Account</h1>
      </div>

      {/* main section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* Left mobil img */}
          <div className="flex justify-center lg:justify-start">
            <img 
            src={img1}
             alt='demat'
              className='w-90 max-w-sm'/>
          </div>
          
          {/* Middle Features */}
          <div className="space-y-12">
            {/* Features1 */}
            <div className="flex items-start ">
              <img src={img} alt='zero' className='w-25 h-20 mt-1'/>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">₹0 brokerage for first 30 days*</h2>
            </div>

            {/* Feature2 */}
             <div className="flex items-start ">
              <img src={img} alt='zero' className='w-25 h-20 mt-1'/>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">₹0 account maintenance charges for first year</h2>
            </div>

            {/* Feature3 */}
             <div className="flex items-start ">
              <img src={img} alt='zero' className='w-25 h-20 mt-1'/>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">₹0 commission on Mutual Funds</h2>
            </div>
          </div>

{/* Right signup card */}
<div className="bg-white shadow-lg rounded-lg p-6 lg:p-8 text-center md:text-center">
  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Open Free Demat Account!</h3>
  <p className="text-gray-500 text-lg mb-5">Join our 3 Cr+ happy customers</p>


  {/* commision */}
  <div className="bg-indigo-200 border border-indigo-100 rounded-lg p-4 mb-6 text-start mx-auto w-full ">
    <div className="flex items-start">
      <span className='text-indigo-600 font-bold text-8xl md;text-7xl'>₹0</span>
      <div className="ml-2 w-full text-center items-center justify-start">
        <span className="text-indigo-600 font-bold text-4xl block text-center">Brokerage</span>
        <p className="text-blue-500 text-semibold">For first 30 days*</p>
      </div>
    </div>
  </div>

  {/* mobile input */}
  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-4">
    <span className="px-3 py-2 text-gray-500 bg-gray-100 border-r border-gray-300">+91</span>
    <input 
    type='text'
    name='number'
    placeholder='Enter Your Mobile no.'
    className='w-full bg-white py-3'
    />
  </div>

  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg uppercase text-sm font-bold">get free demat account</button>
  
<div className="mt-7 items-center justify-center">
  <p className='text-sm font-bold cursor-pointer text-indigo-700 '>Want to open an NRI account?</p>
</div>
</div>

        </div>
      </div>
    </div>
  )
}

export default DematAccount