import { Download, ShieldCheck, Star, UserCheck } from 'lucide-react'
import React from 'react'

const LegacySection = () => {
  const data = [
    {
      id: 1,
      icon: <ShieldCheck className='w-8 h-8 text-yellow-400'/>,
      value: '25+',
      label: 'Years of Trust'
   },

   {
    id: 2,
      icon: <Star className='w-8 h-8 text-yellow-400'/>,
      value: '3Cr+',
      label: 'Registered Users'
   },

{
    id: 3,
      icon: <UserCheck className='w-8 h-8 text-yellow-400'/>,
      value: '11000+',
      label: 'Authorised Person'
   },

   {
    id: 4,
      icon: <Download className='w-8 h-8 text-yellow-400'/>,
      value: '4.4Cr+',
      label: 'App Downloads'
   },


  ]
  return (
    <div className='bg-[#1a2234] text-white py-16'>
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">Legacy of Committed Excellence</h2>
        <p className='text-gray-300 mt-2 text-sm md:text-base'>Serving 3Cr+ happy customers over 25+ years. And the list keeps growing.</p>
      </div>

      {/* Data */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {data.map((item) => (
          <div key={item.id} className='flex flex-col items-center'>
         <div className="bg-yellow-500/10 p-4 rounded-lg">{item.icon}</div>
         <h3 className='text-2xl md:text-3xl font-bold mt-3'>{item.value}</h3>
         <p className="text-gray-300 text-sm md:text-base">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LegacySection