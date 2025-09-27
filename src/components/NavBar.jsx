import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Trade & Invest',
      options: ['Stocks', 'Indices', 'Upcoming IPO', 'Commodity', 'F&O', 'ETF']
    },
    {
      name: 'Mutual Funds & SIP',
      options: ['SIP Calculator', 'Mutual Funds', 'AMCs', 'NFO', "Types of Mutual Fund", 'Mutual Fund screener']
    },
    {
      name: 'Learn',
      options: ['Live Blog', 'Knowledge Center', 'smart Money', 'Finance Wiki']
    },
    {
      name: 'News',
      path: '/news'
    },
    {
      name: 'Products',
      options: ['AngleOne super App', 'angleOne Trade', 'smart API']
    },
    {
      name: 'Become a Partner',
      options: ['Influencer Partner(DRA)', 'Insurance POSP', 'Authorised Person', 'Mutual Fund Distribution', 'Authorised Person Locator']
    },
    {
      name: 'Pricing',
      path: '/pricing'
    },
    {
      name: 'Support',
      options: ['User Manual', 'Read FAQs', 'Contact Us']
    },
  ];

  const handleItemClick = (index, item) => {
    if (item.path) {
      navigate(item.path);
      setIsMenuOpen(false); // Close mobile menu after navigating
      return;
    }

    if (item.options) {
      setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    }
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close mobile menu after navigating
    setOpenDropdownIndex(null); // Close any open dropdowns
  };

  return (
    <nav className="bg-gray-200 p-4 relative">
      <div className="flex justify-between items-center md:hidden">
        <span className="text-xl font-bold text-gray-800">Menu</span>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center space-x-8 text-gray-700 font-semibold">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="relative cursor-pointer"
            onMouseEnter={() => item.options && setOpenDropdownIndex(index)}
            onMouseLeave={() => item.options && setOpenDropdownIndex(null)}
          >
            {item.path ? (
              <div onClick={() => handleLinkClick(item.path)} className="hover:text-blue-600">
                {item.name}
              </div>
            ) : (
              <div className="hover:text-blue-600">
                {item.name}
              </div>
            )}

            {/* Dropdown Menu */}
            {item.options && openDropdownIndex === index && (
              <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {item.options.map((option, optionIndex) => (
                  <li
                    key={optionIndex}
                    className="px-4 py-2 hover:bg-gray-100 hover:text-blue-500 cursor-pointer text-sm"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-gray-200 shadow-md z-20">
          <ul className="flex flex-col p-4 space-y-2">
            {navItems.map((item, index) => (
              <li key={index} className="w-full">
                <div
                  onClick={() => handleItemClick(index, item)}
                  className="flex justify-between items-center w-full py-2 px-4 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
                >
                  <span>{item.name}</span>
                  {item.options && (
                    <span className="transform transition-transform duration-200">
                      {openDropdownIndex === index ? '-' : '+'}
                    </span>
                  )}
                </div>
                {item.options && openDropdownIndex === index && (
                  <ul className="mt-2 pl-4 space-y-1">
                    {item.options.map((option, optionIndex) => (
                      <li
                        key={optionIndex}
                        className="py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;