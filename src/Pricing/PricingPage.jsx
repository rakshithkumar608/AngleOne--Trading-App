import React, { useState } from 'react'

const PricingPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    const regex = /^[6-9]\d{9}$/;
  
      if (regex.test(phoneNumber)){
        console.log("Successfully created the account");
        alert("Successfully looged in")
        } else {
          alert("Please Enter valid mobile Number");
        }
       

  }
  return (
    <div className='bg-gray-50 py-16'>
      {/* Heading */}
      <h2 className='text-start md:mx-50 text-3xl md:text-4xl font-bold text-gray-800 mb-12 mx-5 '>Transaction Charges</h2>


      {/* Charges Section */}
      <div className="max-w-6xl mx-auto grid gris-cols-1 md:grid-cols-3 gap-8 text-center items-center">

        {/* Account opening charges */}
        <div className="p-6 bg-gray-100 items-center justify-center rounded-2xl" >
    <h3 className="text-lg font-semibold mb-4">Account Opening Charges</h3>
    <p className='text-7xl font-bold text-indigo-600'>₹0<sub className='text-lg'>AMC</sub></p>
    <p className='mt-4 text-gray-600'>No account maintenance charges for the first year</p>
        </div>


        {/* Equity Deelivary, Industry, F&O  */}
        <div className="p-6 bg-gray-100 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4">Equity Delivery, Intraday, F&amp;O, Currencies & Commodities</h3>
          <p className="text-6xl font-bold text-indigo-600">₹0<sub className='text-lg'>Brokerage</sub></p>
          <p className='mt-4 text-gray-600'> For the first 30 days*, post which normal brokerage will be applicable</p>
        </div>

        {/* Margin trade funding */}
         <div className="p-6 bg-gray-100 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4">Margin Trade Funding</h3>
          <p className="text-6xl font-bold text-indigo-600">0%<sub className='text-lg'>Interest</sub></p>
          <p className='mt-4 text-gray-600'> 0% for borrowing up to Rs. 1 lac for the first 30 days</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className=" mx-auto mt-12 bg-white shadow-ld rounded-2xl p-8 text-center max-w-3xl shadow-md">
        <h4 className='text-lg font-bold text-gray-700 mb-4 '>Trade more, pay less</h4>
         {/* Phone Input Box */}
        <div className="flex w-full max-w-xl mx-auto border border-gray-300 rounded-lg overflow-hidden ">
          <span className="flex items-center px-3 bg-gray-50 text-gray-600 text-sm font-medium border-r border-gray-300">
            +91
          </span>
          <input
          onChange={(e) =>setPhoneNumber(e.target.value)}
            type="text"
            placeholder="Enter Mobile Number"
            className="w-full px-4 py-3 focus:outline-none text-gray-700"
            required
          />
          </div>
          <div className='ml-20 justify-end max-w-xl mx-auto '>
           <button 
           onClick={handleSubmit}
           className='bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 mt-4 shadow-md'>GET FREE DEMAT ACCOUNT</button>
        </div>
        </div>
         
      </div>
  
  )
}

export default PricingPage