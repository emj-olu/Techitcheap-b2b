import Logo from "../../assets/svgs/tic-logo-svg.svg";
import { getFullYear } from "../../utils/utility";
import { RiTwitterXLine } from "react-icons/ri";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";

function Footer() {
  return (
    <footer className="font-montserrat">
      <div className="w-full bg-[rgba(0,0,0,0.7)] bg-opacity-20 backdrop-filter backdrop-blur-lg sm:p-16 p-8 flex flex-col gap-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-white">
          {/* Logo */}
          <div className="flex justify-center sm:justify-start">
            <img src={Logo} alt="Techitcheap Logo" className="sm:w-64 w-40" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="sm:text-xl text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="list-none space-y-3">
              <li>
                <a href="/" className="sm:text-base text-sm font-light hover:text-[#2454FF] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="sm:text-base text-sm font-light hover:text-[#2454FF] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="sm:text-base text-sm font-light hover:text-[#2454FF] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faqs" className="sm:text-base text-sm font-light hover:text-[#2454FF] transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="sm:text-xl text-lg font-semibold mb-4">Services</h3>
            <ul className="list-none space-y-3">
              <li>
                <a href="/services" className="sm:text-base text-sm font-light hover:text-[#2454FF] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/terms" className="sm:text-base text-sm font-light hover:text-[#2454FF] transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/privacy" className="sm:text-base text-sm font-light hover:text-[#2454FF] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/login" className="sm:text-base text-sm font-light hover:text-[#2454FF] transition-colors">
                  Login/Register
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="sm:text-xl text-lg font-semibold">Let’s Stay Connected</h3>
            <button className="bg-[#2454FF] w-36 h-10 rounded-lg shadow-md text-white font-montserrat hover:bg-[#1e45d6] transition-colors">
              Get in Touch
            </button>
            <p className="text-xs font-light">
              Join our newsletter to stay up to date on features and releases.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#A9A9A9]"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-white gap-4">
          {/* Copyright and Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-sm font-normal">
              {getFullYear()} TECHITCHEAP. All rights reserved.
            </span>
            <ul className="flex gap-4">
              <li>
                <a href="/privacy" className="text-sm font-light hover:text-[#2454FF] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm font-light hover:text-[#2454FF] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://twitter.com/techitcheap"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
              className="h-8 w-8 border border-[#A9A9A9] flex justify-center items-center rounded-full hover:border-[#2454FF] hover:text-[#2454FF] transition-colors"
            >
              <RiTwitterXLine size={18} />
            </a>
            <a
              href="https://facebook.com/techitcheap"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="h-8 w-8 border border-[#A9A9A9] flex justify-center items-center rounded-full hover:border-[#2454FF] hover:text-[#2454FF] transition-colors"
            >
              <SlSocialFacebook size={18} />
            </a>
            <a
              href="https://instagram.com/techitcheap"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="h-8 w-8 border border-[#A9A9A9] flex justify-center items-center rounded-full hover:border-[#2454FF] hover:text-[#2454FF] transition-colors"
            >
              <SlSocialInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com/company/techitcheap"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on LinkedIn"
              className="h-8 w-8 border border-[#A9A9A9] flex justify-center items-center rounded-full hover:border-[#2454FF] hover:text-[#2454FF] transition-colors"
            >
              <SlSocialLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;