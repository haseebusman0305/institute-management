// Navbar.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { removeToken } from '../utils/auth';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoggedIn = async () => {
      const ApiUrl = import.meta.env.VITE_API_ENDPOINT || "http://localhost:4000";
      const token = localStorage.getItem('Authorization');
      console.log('Authorization from local storage:', token);
      if (token) {
        try {
          const response = await fetch(`${ApiUrl}/isLoggedIn`, {
            headers: {
              Authorization: `${token}`
            }
          });
          const isLoggedIn = await response.json();
          
          console.log('Response from /isLoggedIn:', isLoggedIn);
          setIsLoggedIn(isLoggedIn);
        } catch (error) {
          console.error('Fetch error:', error);
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
      }
    };

    checkLoggedIn();
  }, []);

  const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-gray-800 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button onClick={() => handleNavigation('/')} className="text-xl font-bold">
          SS Science Academy
        </button>
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className="hover:text-gray-400"
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <button
                onClick={handleLogout}
                className="bg-transparent hover:text-gray-400 py-2 px-4 border border-white rounded"
              >
                Logout
              </button>

            </>
          ) : (
            <>
              <button
                onClick={() => handleNavigation('/login')}
                className="bg-transparent hover:text-gray-400 py-2 px-4 border border-white rounded"
              >
                Login
              </button>
              <button
                onClick={() => handleNavigation('/signup')}
                className="bg-transparent hover:text-gray-400 py-2 px-4 border border-white rounded"
              >
                Sign Up
              </button>
            </>
          )}
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
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="hover:text-gray-400"
              >
                {item.name}
              </button>
            ))}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="hover:text-gray-400"
              >
                Logout
              </button>
            ) : (
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => handleNavigation('/login')}
                  className="bg-transparent hover:text-gray-400 py-2 px-4 border border-white rounded"
                >
                  Login
                </button>
                <button
                  onClick={() => handleNavigation('/signup')}
                  className="bg-transparent hover:text-gray-400 py-2 px-4 border border-white rounded"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
