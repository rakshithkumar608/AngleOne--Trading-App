import React, { useState } from 'react'
import myimage from "../assets/Sip.svg"
import img1 from "../assets/sip-graph-icon.svg"
import img2 from "../assets/sip-journey.svg"
import img3 from "../assets/zero-rupee.svg"
import ImgPage1 from './ImgPage1'




const Img = () => {

  const [mobileNumber, setMobileNumber] = useState('+91');


  return (
    <> 
    <div className='min-h-screen bg-gray-200'>
     {/* Heading */}
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <h1 className="text-4xl font-bold text-gray-900 text-center md:text-left">Start SIP</h1>
     </div>

     {/* Main section */}
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

        {/* Left mobile mockup */}
        <div className="flex justify-center lg:justify-start">
          <img 
          className='w-full max-w-sm'
          src={myimage}
          alt='sip'
          />
        </div>

      {/* Middle features */}
      <div className="space-y-10">
        {/* Feature1 */}
        <div className="flex items-start space-x-3">
          <img 
          src={img1}
          alt='graph icon'
          className='size-12 mt-1'
          />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Explore Over <span className='text-blue-600 font-bold'>4,000</span><br />Direct Mutual Funds
          </h2>
        </div>

        {/* Feature 2 */}
         <div className="flex items-start space-x-4">
          <img 
          src={img2}
          alt='journy icon'
          className='size-12 mt-1'
          />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
             Begin Your SIP Journey
             <br /> With Just
             <span className='text-orange-600 font-bold'>₹100</span>
          </h2>
        </div>

        {/* Feature 3 */}
         <div className="flex items-start space-x-4">
          <img 
          src={img3}
          alt='Zero rupee icon'
          className='size-12 mt-1'
          />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
             Begin Your SIP Journey
             <span className='text-blue-600 font-bold'>0</span> Commission on<br />Mutual Funds SIPs
          </h2>
        </div>
      </div>

      {/* right Signup card */}
      <div className="bg-white shadow-lg rounded-xl p-6 lg:p-8 text-center md:text-center ">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 ">  Grow your wealth with SIP</h3>
        <p className='text-gray-600 text-sm mb-5 '> 4,000+ Mutual Funds to choose from</p>

        {/* Commision Banner */}
       <div className="bg-indigo-200 border border-indigo-100 rounded-lg p-4 mb-6 text-start mx-auto max-w-sm">
    <div className="flex items-start">
    <span className="text-indigo-600 font-bold text-5xl md:text-6xl">₹0</span>
    <div className="ml-2">
      <span className="text-indigo-600 font-semibold text-4xl block">Commission</span>
      <p className="text-gray-500 text-sm">On Mutual funds Investments</p>
    </div>
  </div>
</div>
     {/* Mobile input */}
     <div className="flex items-center border rounded-lg overflow-hidden mb-4">
      <span className="px-3 text-gray-500 bg-gray-200 border border-lg p-2 border-gray-400">+91</span>
      <input 
      value={mobileNumber}
      onChange={(e) => setMobileNumber(e.target.value)}
      placeholder='Enter your Mobile No'
      type='text'
      className='w-full px-3 py-2 focus:outline-none'
      />
     </div>

     {/* Button */}
     <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg'>Start SIP Now</button>

     <div className="flex justify-between items-center mt-6 text-sm text-gray-700">
      <div className="text-center">
        <p className='font-bold text-blue-600'>25+</p>
        <p>Years of Trust</p>
      </div>

              <div className="text-center">
                <p className="font-bold text-orange-600">3 Crore+</p>
                <p>Indians</p>
              </div>
              <div className="text-center">
                <p className="font-bold">#1</p>
                <p>Stock Broking House</p>
              </div>
              <div className="text-center">
                <p className="font-bold">Seamless</p>
                <p>Digital Platform</p>
              </div>

           </div>
        </div>
       </div>
      </div>
     </div>
   <ImgPage1 />
    </>
  )
}

export default Img