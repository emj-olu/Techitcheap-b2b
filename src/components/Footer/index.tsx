import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../../assets/svgs/tic-logo-svg.svg';
import { getFullYear } from '../../utils/utility';
import { RiTwitterXLine } from 'react-icons/ri';
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
} from 'react-icons/sl';

// Animation variants for scroll reveal
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

// Child variants for individual sections
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

function Footer() {
  return (
    <motion.footer
      className="font-montserrat"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="w-full bg-[rgba(0,0,0,0.7)] bg-opacity-20 backdrop-filter backdrop-blur-lg sm:p-16 p-8 flex flex-col gap-8">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-white"
          variants={sectionVariants}
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center sm:justify-start"
            variants={childVariants}
          >
            <img src={Logo} alt="Techitcheap Logo" className="sm:w-64 w-40" />
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={childVariants}>
            <h3 className="sm:text-xl text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="list-none space-y-3">
              <li>
                <Link
                  to="/"
                  className="sm:text-base text-sm font-light hover:text-[#2454FF] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="sm:text-base text-sm font-light hover:text-[#2454FF] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="sm:text-base text-sm font-light hover:text-[#2454FF] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="sm:text-base text-sm font-light hover:text-[#2454FF] transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={childVariants}>
            <h3 className="sm:text-xl text-lg font-semibold mb-4">Services</h3>
            <ul className="list-none space-y-3">
              <li>
                <Link
                  to="/"
                  className="sm:text-base text-sm font-light hover:text-[#2454FF] transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="sm:text-base text-sm font-light hover:text-[#2454FF] transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/consultation"
                  className="sm:text-base text-sm font-light hover:text-[#2454FF] transition-colors"
                >
                  Consultation
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="space-y-4 text-center sm:text-left"
            variants={childVariants}
          >
            <h3 className="sm:text-xl text-lg font-semibold">Let’s Stay Connected</h3>
            <Link
              to="/contact"
              className="bg-[#2454FF] w-36 h-10 rounded-lg shadow-md text-white font-montserrat hover:bg-[#1e45d6] transition-colors inline-flex items-center justify-center"
            >
              Get in Touch
            </Link>
            <p className="text-xs font-light">
              Join our newsletter to stay up to date on features and releases.
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-[#A9A9A9]"
          variants={childVariants}
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center text-white gap-4"
          variants={childVariants}
        >
          {/* Copyright and Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-sm font-normal">
              {getFullYear()} TECHITCHEAP. All rights reserved.
            </span>
            <ul className="flex gap-4">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm font-light hover:text-[#2454FF] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm font-light hover:text-[#2454FF] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Techitcheap on Twitter"
              className="h-8 w-8 border border-[#A9A9A9] flex justify-center items-center rounded-full hover:border-[#2454FF] hover:text-[#2454FF] transition-colors"
            >
              <RiTwitterXLine size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Techitcheap on Facebook"
              className="h-8 w-8 border border-[#A9A9A9] flex justify-center items-center rounded-full hover:border-[#2454FF] hover:text-[#2454FF] transition-colors"
            >
              <SlSocialFacebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Techitcheap on Instagram"
              className="h-8 w-8 border border-[#A9A9A9] flex justify-center items-center rounded-full hover:border-[#2454FF] hover:text-[#2454FF] transition-colors"
            >
              <SlSocialInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Techitcheap on LinkedIn"
              className="h-8 w-8 border border-[#A9A9A9] flex justify-center items-center rounded-full hover:border-[#2454FF] hover:text-[#2454FF] transition-colors"
            >
              <SlSocialLinkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;