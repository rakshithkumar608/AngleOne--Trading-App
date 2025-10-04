
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import myImage from '../assets/sip.png'

const Calculator = () => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center py-12 bg-gray-50 '>
  <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col md:flex-row items-center max-w-6xl w-full ">

    {/* Left Content */}
    <div className="flex-1 text-center md:text-left">
  <h2 className="text-2xl font-sans font-bold mb-6 text-gray-800">Calculate Brokerage & Margin easily</h2>

{/* Buttons */}
  <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4 md:max-w-full">
    <button 
    onClick={() => navigate('/sip')}
    className='flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-5 py-2 font-medium text-gray-700 hover:bg-gray-100'> 
      SIP Calculator 
      
      <FaArrowRight size={10}/>
   </button>
 <button className='flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 font-medium text-gray-700 hover:bg-gray-100'> 
      Brokerage Calculator <FaArrowRight size={10}/>
   </button>
    <button className='flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-5 py-2 font-medium text-gray-700 hover:bg-gray-100 '> 
    Margin Calculator <FaArrowRight size={10}/>
   </button>

  </div>

  {/* Explore Link */}
  <a 
  href='/explore'
  className='text-blue-600 font-medium text-sm hover:underline ml-2'
  >
    EXPLORE CALCULATOR →
  </a>
  </div>

  {/* Right Side Image Path */}
  <div className="flex-1 mt-8 md:mt-0 flex justify-center">
    <img src={myImage} alt='calculator' className='w-64 md:w-65'/>
  </div>
  </div>
 </div>
  
  )
}

export default Calculator