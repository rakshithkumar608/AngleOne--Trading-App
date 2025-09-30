import React from 'react'
import img1 from "../assets/News1.webp";
import img2 from "../assets/News2.png";
import img3 from "../assets/NEws4.webp";
import img4 from "../assets/Newss4.webp";
import img5 from "../assets/Newss5.webp";
import img6 from "../assets/Newss6.webp";




const NewsPage = () => {
  const Topnews = [
    {
      imgSrc : img1,
      alt: "News1",
      title: "IPOs",
      desc: "DSM Fresh Foods IPO Allotment Status",
      date: "September 30, 2025",
    },

    {
      imgSrc : img2,
      alt: "News2",
      title: "Share Market",
      desc: "OMC Stocks Gain Up To 7% On September 29 After Minister Calls for Higher Valuations",
      date: "September 30, 2025",
    },

    {
       imgSrc : img3,
      alt: "News3",
      title: "IPOs",
      desc: "Pace Digitek IPO Allotment Status",
      date: "September 30, 2025",
    },

     {
       imgSrc : img4,
      alt: "News4",
      title: "Market Updates",
      desc: "Ola Electric Share Price Hits 5% Upper Circuit After Recent Price Drop",
      date: "September 30, 2025",
    },

     {
       imgSrc : img5,
      alt: "News5",
      title: "Commodities",
      desc: "Silver Prices Reach All-Time Peak Driven by Global Gains and Industrial Use",
      date: "September 30, 2025",
    },

     {
       imgSrc : img6,
      alt: "News6",
      title: "Mutual Funds",
      desc: "ICICI Prudential Launches Conglomerate Fund, NFO Opens on October 3",
      date: "September 30, 2025",
    },
  ]

  return (
    <div className='min-h-screen bg-white '>
      <div className='  px-10 py-6 max-w-7xl mx-auto  '>
        <h2 className='text-3xl font-semibold text-gray-900'>Top News</h2>
      </div>
     
     <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3 px-10 pb-8  '>
      {Topnews.map((news,index) =>(
       <div
       key={index}
       className=' cursor-pointer rounded-lg   overflow-hidden shadow-md hover:shadow-xl bg-white text-start ' 
       >
       <div className='rounded-lg w-full h-48 overflow-hidden'>
        <img 
        src={news.imgSrc} 
        alt={news.alt}
        className='rounded-lg'/>
        </div>

        <div className="pt-3 pb-2 m-2">
          <div className="justify-start items-start">
     <h2 className='text-sm font-semibold text-blue-600'>{news.title}</h2>
          </div>

          <h3 className='text-lg font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]'>{news.desc}</h3>
          <p className='text-sm text-gray-500'> {news.date}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
  )
}

export default NewsPage