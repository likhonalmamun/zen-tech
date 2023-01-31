import React from "react";
const Header = () => {
  return (
    <div className="text-7xl">
      <nav className="bg-black shadow-md shadow-blue-900 sticky h-[90px] flex items-center overflow-hidden justify-between px-10">
        <img src="logo.jpg" className="h-24" alt="" />
        <ul className="text-lg  text-amber-100 italic flex items-center gap-7 font-semibold">
          <li className="hover:scale-90 p-1 duration-200 hover:text-white hover:shadow-white">
            <a className="shadow-md hover:shadow-white shadow-amber-100" href="#home">
              HOME
            </a>
          </li>
          <li className="hover:scale-90 p-1 duration-200 hover:text-white hover:shadow-white">
            <a className="shadow-md hover:shadow-white shadow-amber-100" href="#about">
              ABOUT
            </a>
          </li>
          <li className="hover:scale-90 p-1 duration-200 hover:text-white hover:shadow-white">
            <a className="shadow-md hover:shadow-white shadow-amber-100" href="#services">
              SERVICES
            </a>
          </li>
          <li className="hover:scale-90 p-1 duration-200 hover:text-white hover:shadow-white">
            <a className="shadow-md hover:shadow-white shadow-amber-100" href="#pricing">
              PRICING
            </a>
          </li>
          <li className="hover:scale-90 p-1 duration-200 hover:text-white hover:shadow-white">
            <a className="shadow-md hover:shadow-white shadow-amber-100" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
