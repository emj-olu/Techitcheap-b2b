import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TICLogo from '../../assets/img/logo-black.png';
import { Warning, Folder, Pricing } from '../../assets/icons';
import { FaTools, FaEnvelope } from 'react-icons/fa';

// Dropdown animation variants
const dropdownVariants = {
  open: {
    maxHeight: 400, // Increased to ensure all items are visible
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  closed: {
    maxHeight: 0,
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

// Menu item interface for TypeScript
interface MenuItem {
  name: string;
  path: string;
  icon: React.ReactNode | null;
}

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Toggling menu, isOpen:', !isOpen); // Debug log
    setIsOpen(!isOpen);
  };

  // Menu items for both desktop and mobile
  const menuItems: MenuItem[] = [
    {
      name: 'About us',
      path: '/about',
      icon: (
        <Warning className="w-5 h-5 text-gray-900 hover:text-[#2454FF] transition-colors duration-200" />
      ),
    },
    {
      name: 'Consultation',
      path: '/consultation',
      icon: (
        <Pricing className="w-5 h-5 text-gray-900 hover:text-[#2454FF] transition-colors duration-200" />
      ),
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
      icon: (
        <Folder className="w-5 h-5 text-gray-900 hover:text-[#2454FF] transition-colors duration-200" />
      ),
    },
    {
      name: 'Our Services',
      path: '/',
      icon: (
        <FaTools className="w-5 h-5 text-gray-900 hover:text-[#2454FF] transition-colors duration-200" />
      ),
    },
    {
      name: 'Get in Touch',
      path: '/contact',
      icon: (
        <FaEnvelope className="w-5 h-5 text-gray-900 hover:text-[#2454FF] transition-colors duration-200" />
      ), // Added icon for visibility
    },
  ];

  return (
    <nav
      className="fixed w-full top-0 z-50 bg-white shadow-md"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="sm:w-[220px] w-[120px] sm:h-[50px] h-[25px]">
            <img
              src={TICLogo}
              alt="Techitcheap Logo"
              className="w-full h-full"
              onError={(e) => {
                console.error('Logo failed to load:', TICLogo); // Debug log
                e.currentTarget.src =
                  'https://via.placeholder.com/220x50?text=Logo+Not+Found';
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <React.Fragment key={item.name}>
                {item.name === 'Get in Touch' ? (
                  <Link
                    to={item.path}
                    className="border-2 border-[#2454FF] py-3 w-[150px] flex items-center justify-center rounded-full text-[#2454FF] font-mont text-base duration-500 hover:bg-[#2454FF] hover:border-none hover:text-white"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-900 hover:text-[#2454FF] transition-colors duration-200 font-mont text-base"
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <div className="nav__icon">
              <input
                type="checkbox"
                className="navigation__checkbox hidden"
                id="navi-toggle"
                checked={isOpen}
                onChange={toggleMenu}
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              />
              <label
                htmlFor="navi-toggle"
                className="navigation__button sm:h-[3rem] h-[2.5rem] rounded-full sm:w-[3.5rem] w-[2.5rem] text-center cursor-pointer bg-[#ECF1FF] flex justify-center items-center"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                <span className="navigation__icon relative">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="#2454FF"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        isOpen
                          ? 'M6 18L18 6M6 6l12 12'
                          : 'M4 6h16M4 12h16M4 18h16'
                      }
                    />
                  </svg>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden absolute sm:top-20 top-14 sm:right-20 right-4 bg-[#ECF1FF] w-[220px] rounded-2xl z-50 p-4"
            variants={dropdownVariants}
            initial="closed"
            animate="open"
            exit="closed"
            role="menu"
            style={{ overflow: 'visible' }} // Removed overflow-hidden to prevent clipping
          >
            <ul className="w-full space-y-2">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-3 p-2 sm:text-base text-sm"
                  role="menuitem"
                >
                  <Link
                    to={item.path}
                    onClick={() => {
                      console.log(`Navigating to ${item.path}`); // Debug log
                      setIsOpen(false);
                    }}
                    className={`flex-1 text-center ${
                      item.name === 'Get in Touch'
                        ? 'border-2 border-[#2454FF] py-2 px-4 rounded-full text-[#2454FF] hover:bg-[#2454FF] hover:text-white hover:border-none'
                        : 'text-gray-900 hover:text-[#2454FF]'
                    } transition-colors duration-200 font-mont`}
                  >
                    {item.name}
                  </Link>
                  {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Menu;