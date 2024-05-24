import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">
          SS Science Academy
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/courses" className="hover:text-gray-400">
            Courses
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact Us
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-transparent hover:text-gray-400 py-2 px-4 border border-white rounded">
            Login
          </button>
          <button className="bg-transparent hover:text-gray-400 py-2 px-4 border border-white rounded">
            Sign Up
          </button>
          <span className="ml-2">user name</span>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <CloseIcon className="text-white" />
          ) : (
            <MenuIcon className="text-white" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
            <a href="/about" className="hover:text-gray-400">
              About
            </a>
            <a href="/courses" className="hover:text-gray-400">
              Courses
            </a>
            <a href="/contact" className="hover:text-gray-400">
              Contact Us
            </a>
            <button className="bg-transparent hover:text-gray-400 py-2 px-4 border border-white rounded">
              Login
            </button>
            <button className="bg-transparent hover:text-gray-400 py-2 px-4 border border-white rounded">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;