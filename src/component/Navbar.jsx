// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use 'react-router-dom' instead of 'react-router'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">MyWebsite</div>
        <ul className="space-x-6 hidden md:flex list-none">
          <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
          <li><Link to="/products" className="text-gray-600 hover:text-blue-600">Products</Link></li>
          <li><Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link></li>
          <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
        </ul>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 list-none">
          <li><Link to="/" className="block text-gray-600 hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="block text-gray-600 hover:text-blue-600">About</Link></li>
          <li><Link to="/services" className="block text-gray-600 hover:text-blue-600">Services</Link></li>
          <li><Link to="/contact" className="block text-gray-600 hover:text-blue-600">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
