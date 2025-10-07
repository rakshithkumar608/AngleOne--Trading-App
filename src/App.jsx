import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import NewsPage from './News/NewsPage.jsx';
import PricingPage from './Pricing/PricingPage.jsx';
import Layout from './components/Layout.jsx';
import Img from './Img-Folder/Img.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import DematAccount from './pages/DematAccount.jsx';
import SipCalculator from './SIP Calculator/SipCalculator.jsx';
import ExplorePage from './pages/ExplorePage.jsx';
import Regulatory from './Pricing/Regulatory.jsx';
import OpenAccount from './Pricing/OpenAccount.jsx';


const App = () => {
  return (
    <Router>
     <Layout>
      <Routes>
         <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path='/img' element={<Img />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/demat' element={<DematAccount />}/>
       <Route path='/sip' element={<SipCalculator />}/>
       <Route path='/explore' element={<ExplorePage />}/>
       <Route path='/' element={<Regulatory />}/>
       <Route path='/open-account' element={<OpenAccount />}/>
      </Routes>
     </Layout>
    </Router>
  );
};

export default App;