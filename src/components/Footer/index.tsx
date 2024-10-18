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
    <footer className="footer font-mont">
      <div className="w-full h-full bg-[rgba(0,0,0,.7)] bg-opacity-20 backdrop-filter backdrop-blur-lg sm:p-20  p-5 flex flex-col justify-center gap-10 flex-wrap">
        <div className=" flex text-white justify-between flex-wrap gap-5">
          <div>
            <img src={Logo} alt="logo" className="sm:w-[300px] w-[200px]" />
          </div>
          <div>
            <span className="sm:text-2xl text-xl font-semibold sm:mb-10 mb-5 inline-block">
              Quick links
            </span>
            <ul className="list-none space-y-5">
              <li>
                <a href="" className="sm:text-lg text-base font-light">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="sm:text-lg text-base font-light">
                  About us
                </a>
              </li>
              <li>
                <a href="" className="sm:text-lg text-base font-light">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="" className="sm:text-lg text-base font-light">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="text-2xl font-semibold sm:mb-10 mb-5 inline-block">&nbsp;</span>
            <ul className="list-none space-y-5">
              <li>
                <a href="" className="sm:text-lg text-base font-light">
                  Our Services
                </a>
              </li>
              <li>
                <a href="" className="sm:text-lg text-base font-light">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="" className="sm:text-lg text-base font-light">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="" className="sm:text-lg text-base font-light">
                  Login/Register
                </a>
              </li>
              <li>
                <a href="" className="sm:text-lg text-base font-light"></a>
              </li>
            </ul>
          </div>
          <div className="w-[300px] space-y-5 mt-10">
            <h3 className="text-2xl font-semibold">Lets stay connected</h3>
            <button className="bg-[#2454FF] flex items-center justify-center w-[150px] h-[50px] rounded-lg box-shadow font-mont">
              Get in touch
            </button>
            <p className="text-sm font-light">
              Join our newsletter to stay up to date on features and releases.
            </p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#A9A9A9]"></div>

        <div className="flex justify-between text-white items-center flex-wrap gap-5">
          <div className="flex gap-5 items-center">
            <span className="text-lg font-normal">
              {getFullYear()} TECHITCHEAP. All rights reserved.
            </span>
            <ul className="sm:flex gap-2 hidden">
              <li>
                <a href="" className="font-extralight text-base">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="" className="font-extralight text-base">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-5 items-center">
            <span className="h-11 w-11 border border-[#A9A9A9] flex justify-center items-center rounded-full">
              <RiTwitterXLine />
            </span>
            <span className="h-11 w-11 border border-[#A9A9A9] flex justify-center items-center rounded-full">
              <SlSocialFacebook />
            </span>
            <span className="h-11 w-11 border border-[#A9A9A9] flex justify-center items-center rounded-full">
              <SlSocialInstagram />
            </span>
            <span className="h-11 w-11 border border-[#A9A9A9] flex justify-center items-center rounded-full">
              <SlSocialLinkedin />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
