
import React from 'react';
import Navbar from './navbar'

import Footer from './Footer';
import Topbar from './Topbar';
import { useLocation } from 'react-router-dom';




const Layout = ({ children }) => {
  const location = useLocation();

  // Routes where the entire layout (header + footer) is hidden
  const hideLayoutPaths = ["/login","/register"];


  // Routes where only the footer should be hidden
  const hideFooterPaths = ["/demat"]
 
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);


  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
    {!shouldHideLayout && <Topbar />}
     {!shouldHideLayout &&  <Navbar />}
       
      
        {/* Main Content Area */}
      <main className="flex-1">{children}</main>

      {/* Footer (hidden only for certain pages) */}
      {!shouldHideLayout && !shouldHideFooter && <Footer />}

    </div>
  );
};

export default Layout;