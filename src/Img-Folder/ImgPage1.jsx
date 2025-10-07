import React from 'react'
import img1 from "../assets/start-sip-zero-perc.svg"
import img2 from "../assets/start-sip-handshake.svg"
import img3 from "../assets/start-sip-app-touch.svg"
import img4 from '../assets/start-sip-asset-estimation.svg'


const ImgPage1 = () => {

  const sips = [
    {
      imgSrc: img1,
      alt: "Zero",
     title: "Start Small with Affordable Investments",
     desc: "Start investing with just ₹100 on Angel One. Build wealth systematically without large initial outlays.",
     bgColor: "bg-white",
     borderColor: 'border-gray-200 rounded-sm border-2xl'
    },

    {
     imgSrc: img2,
     alt:"handshake",
     title: "Investment at Your Pace",
     desc: "Invest incrementally, adjust contributions, or temporarily halt - the control is yours.",
      bgColor: "bg-white",
     borderColor: 'border-gray-200 rounded-sm border-2xl'
    },

    {
      imgSrc: img3,
      alt: "App touch",
      title: "Funds Tailored for All Your Needs",
      desc: "Explore 4,000+ Direct Mutual Funds across asset classes. Compare risk, expense ratio, and returns.",
       bgColor: "bg-white",
     borderColor: 'border-gray-200 rounded-sm border-2xl'
    },

    {
      imgSrc: img4,
      alt: "Asset estimate",
      title: "Estimate Your Returns",
      desc: "Use SIP calculator to estimate growth potential of SIP investments and align them to life goals.",
       bgColor: "bg-white",
     borderColor: 'border-gray-200 rounded-sm border-2xl'
    }
  ]

  
  return (
    <>
    <section className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'> 
    <div className='text-center mb-16'>
   <h1 className='text-3xl font-semibold text-center ms:text-center md:text-4xl lg:text-5xl '>Why start SIP Journey with Angel One Today?</h1>
    </div>
     
 {/* Cards */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
  {sips.map((sip,index) => (
    <div
    key={index} 
     className={`p-6 ${sip.bgColor} ${sip.borderColor} border-2 rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105`}>

      <div className="flex  items-center  space-x-4 ">
        {/* images */}
       <img src={sip.imgSrc} alt={sip.alt} className='size-20 flex-shrink-0'/>
       
       <div>
       <h3 className='font-semibold text-3xl mb-2 flex'>{sip.title}</h3>

       <p className='text-gray-600 text-lg'>{sip.desc}</p>
       </div>
      </div>
     </div>
      
  ))}
 </div>
</div>
    </section>
   
    </>
  )
}

export default ImgPage1