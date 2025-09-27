import React from 'react'
import Hero from '../Layout/Hero.jsx'
import Benifits from '../Layout/Benifits.jsx'
import Uses from '../Layout/Uses.jsx'
import Uses1 from '../Layout/Uses1.jsx'
import Investment from '../Layout/Investment.jsx'
import Learn from '../Layout/Learn.jsx'
import Calculator from '../Layout/Calculator.jsx'
import TopStocks from '../Layout/TopStocks.jsx'
import LegacySection from '../Layout/LegacySection.jsx'



const HomePage = () => {
  return (
    <div>
      <Hero />
      <h2 className='text-5xl font-bold m-10 text-center' >Transparent pricing. No hidden charges</h2>
      <Benifits />
      <Uses />
      <Uses1 />
     <Investment />
     <Learn />
 <Calculator />
 <TopStocks />
 <LegacySection />
    </div>
  )
}

export default HomePage
