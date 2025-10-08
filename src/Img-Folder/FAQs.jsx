import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'

const FAQs = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [

    //one
     {
      question: "How is the NAV of a mutual fund calculated?",
      answer: 'The Net Asset Value (NAV) of a mutual fund is calculated by dividing the total value of all the securities in its portfolio, less any liabilities, by the total number of outstanding units.'
    },
 

    //two
     {
      question: "Is there any charge for SIP in Angel One?",
      answer: 'While Angel One itself doesn\'t charge extra for SIP investments, you\'ll pay a nominal charge directly to the mutual fund house you choose. This charge is known as the expense ratio. It\'s a percentage of the total assets under management (AUM) of the fund that covers its operational expenses.'
    },


    //three
     {
      question: "Can SIP be stopped or paused?",
      answer: 'Yes, you can stop or pause SIP contributions at any time without any penalties or charges. This flexibility allows you to align your finances to your needs.'
    },

    //four
     {
      question: "What is the tenure for SIP investments?",
      answer:  "Yes, you can modify, pause, or stop your SIP investment anytime through your Angel One account dashboard.",
    },

    //five
     {
      question: "Which is better, FD or SIP?",
      answer: 'FDs are suited for conservative users as they are low-risk. However, they offer low but stable returns. On the other hand, SIPs in mutual funds offer the potential for higher returns compared to fixed deposits. They also involve market risk, making them suitable for investors comfortable with some degree of risk.'
    },

    //six
    {
      question: 'How to choose the right Mutual Fund?',
      answer: "When choosing the right mutual fund, you should consider several parameters personal to you, such as your financial goal, risk tolerance, return expectation, and investment horizon. Thereafter, you can look at parameters relevant to the funds you shortlist, like expense ratio, assets under management, historic performance, and fund manager experience."
    },
  ];

  const toogleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='bg-gray-50 py-16 px-4'>
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">FAQs</h2>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index)=>(
          <div 
          key={index}
          className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all">

            <button 
            onClick={() =>toogleFAQ(index)}  className="w-full flex justify-between items-center text-left px-6 py-5 focus:outline-none">
             
             <span className='text-gray-900 font-medium text-base'>{faq.question}</span>
             {openIndex === index ? (
              <ChevronUp className='text-blue-600 w-5 h-5'/>
             ): (
              <ChevronDown className='text-blue-600 w-5 h-5'/>
             )}
            </button>


         <div className={`px-6 pb-5 text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}>
                {faq.answer}
              </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQs