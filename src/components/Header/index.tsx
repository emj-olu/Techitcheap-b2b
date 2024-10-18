import { useState } from "react";
import TICLogo from "../../assets/img/logo-black.png";
import { Warning, Folder, Pricing } from "../../assets/icons";
export const Header = () => {
  const [checked, setChecked] = useState(false);


  return (
    <header className="flex justify-between items-center py-5 relative">
      <div className="sm:w-[220px] w-[120px] sm:h-[50px] h-[25px]">
        <img src={TICLogo} alt="logo" className="w-full h-full" />
      </div>

      <div className="flex items-center gap-10 ">
        <div className="nav__icon">
          <input
            type="checkbox"
            className="navigation__checkbox hidden"
            id="navi-toggle"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label
            htmlFor="navi-toggle"
            className="navigation__button sm:h-[3rem] h-[2.5rem] rounded-full sm:w-[3.5rem] w-[2.5rem] text-center cursor-pointer bg-[#ECF1FF] flex justify-center items-center"
          >
            <span className="navigation__icon relative">&nbsp;</span>
          </label>
        </div>

        <a
          href="/"
          className="border-2 border-[#2454FF] py-3 w-[150px] sm:flex hidden items-center justify-center rounded-full text-[#2454FF] font-mont duration-500 hover:bg-[#2454FF] hover:border-none hover:text-white"
        >
          Get in touch
        </a>

        <div
          className={`absolute flex items-center bg-[#ECF1FF] w-[200px] rounded-2xl overflow-hidden transition-max-height duration-500 ease-in-out p-5 sm:top-20 top-14 sm:right-20 right-4 z-50 ${
            checked ? "max-h-[140px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="w-full">
            <li className="flex items-center gap-5 p-2 justify-between sm:text-base text-sm">
              About us <Warning/>
            </li>
            <li className="flex items-center gap-5 p-2 justify-between sm:text-base text-sm">
              Pricing <Pricing />
            </li>
            <li className="flex items-center gap-5 p-2 justify-between sm:text-base text-sm">
              Portfolio <Folder />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
