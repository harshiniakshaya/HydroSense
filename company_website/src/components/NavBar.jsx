import React, { useState } from "react";
import logo from '../assets/logo2.png'; // Replace with your logo import
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-20 top-0 start-0 backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> 
        <a href="https://www.linkedin.com/in/intellexa-rec-1034452a8/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-14" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-transparent hover:bg-[#004AAD] hover:text-white focus:bg-[#004AAD] focus:text-white focus:outline-none"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isMenuOpen ? "flex bg-transparent" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-50 bg-opacity-30 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent dark:bg-opacity-30 md:dark:bg-transparent">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-100}
                className="block py-2 px-3 text-[#004AAD] hover:text-black dark:hover:text-black md:p-0 cursor-pointer"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-[#004AAD] hover:text-black dark:hover:text-black md:p-0 cursor-pointer"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-[#004AAD] hover:text-black dark:hover:text-black md:p-0 cursor-pointer"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="team"
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-[#004AAD] hover:text-black dark:hover:text-black md:p-0 cursor-pointer"
                onClick={closeMenu}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-[#004AAD] hover:text-black dark:hover:text-black md:p-0 cursor-pointer"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
