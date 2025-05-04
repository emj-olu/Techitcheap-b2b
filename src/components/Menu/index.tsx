import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TICLogo from '../../assets/img/logo-black.png';
import { Warning, Folder, Pricing } from '../../assets/icons';

const dropdownVariants = {
  open: { maxHeight: 140, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  closed: { maxHeight: 0, opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'About us', path: '/', icon: <Warning /> },
    { name: 'Consultation', path: '/consultation', icon: <Pricing /> },
    { name: 'Portfolio', path: '/portfolio', icon: <Folder /> },
    { name: 'Our Services', path: '/services', icon: <Folder/>}

  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="sm:w-[220px] w-[120px] sm:h-[50px] h-[25px]">
            <img src={TICLogo} alt="Techitcheap Logo" className="w-full h-full" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-900 hover:text-[#2454FF] transition-colors duration-200 font-mont sm:text-base text-sm"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="border-2 border-[#2454FF] py-3 w-[150px] flex items-center justify-center rounded-full text-[#2454FF] font-mont duration-500 hover:bg-[#2454FF] hover:border-none hover:text-white"
            >
              Get in touch
            </Link>
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
              />
              <label
                htmlFor="navi-toggle"
                className="navigation__button sm:h-[3rem] h-[2.5rem] rounded-full sm:w-[3.5rem] w-[2.5rem] text-center cursor-pointer bg-[#ECF1FF] flex justify-center items-center"
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
                      d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
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
            className="md:hidden absolute sm:top-20 top-14 sm:right-20 right-4 bg-[#ECF1FF] w-[200px] rounded-2xl overflow-hidden z-50 p-5"
            variants={dropdownVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <ul className="w-full">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-5 p-2 justify-between sm:text-base text-sm"
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-900 hover:text-[#2454FF] transition-colors duration-200 font-mont"
                  >
                    {item.name}
                  </Link>
                  {item.icon}
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