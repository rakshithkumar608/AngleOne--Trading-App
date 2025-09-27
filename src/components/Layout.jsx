
import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import Topbar from './Topbar';
import { useLocation } from 'react-router-dom';



const Layout = ({ children }) => {
  const location = useLocation();

  const hideLayoutPaths = ["/login","/register"];
 
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname)



  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
    {!shouldHideLayout && <Topbar />}
     {!shouldHideLayout &&  <NavBar />}
       
      
      {/* Main Content Area */}
      <main className="flex-1">
        {children}
        
      </main>
      
      {/* Footer */}
    
 {  !shouldHideLayout &&  <Footer />}
    </div>
  );
};

export default Layout;