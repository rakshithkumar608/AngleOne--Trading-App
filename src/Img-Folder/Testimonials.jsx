import React from 'react'
import user1 from "../assets/T1.avif";
import user2 from "../assets/T2.avif";

const Testimonials = () => {

  const testimonials = [
    {
      img: user1,
      name: "Jonitha Sharma",
       location: "Hinganghat",
       text: "Angel One has an easy-to-use web portal and mobile app. Also, I congratulate Angel One for their excellent feedback system, great training system and an ethical and enthusiastic team of dealers. I would like to thank Team Angel One and wish them, great future as an organisation.",
    },

    {
      img:user2,
      name: "Dr. Gajanankumar K Agrawal",
      location: "Nashik",
      text: "I congratulate the Angel One team for great service and follow-up. I am pretty satisfied with the app as well as the Tele assistance provided. I got good advisory in both Mutual Fund and stocks. Overall, My trading experience with Angel One has been quite good.",
    },
  ];


  return (
    <section className="bg-gray-50 py-16 px-4">
      {/* heeading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">What People Say About Us</h2>

      {/* Testimonial Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, index) => (
          <div 
          key={index} 
          className='bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-md transition duration-300'>
             <div className="flex items-center mb-4">
              <img 
              src={t.img} 
              alt={t.name}
              className='w-12 h-12 rounded-full object-cover mr-4'
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">{t.name}</h3>
                <p className='text-gray-500 text-xl'>{t.location}</p>
              </div>
             </div>
             <p className='text-gray-700 text-xl leading-relaxed'>{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials