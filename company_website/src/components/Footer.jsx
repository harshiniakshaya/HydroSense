import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import '../components/Ocean.css'

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              HydroSense
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                For more information contact us through our social media accounts.
              </a>
            </li>
          </ul>
          <ul className="flex space-x-6 mt-4 sm:mt-0">
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-300">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center">
          © Copyright 2024 <a href="#" className="hover:underline">HydroSense</a>. All Rights Reserved.
        </span>
      </div>
      <div className="absolute inset-0 ocean overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`bubble bubble--${i + 1}`}></div>
        ))}
      </div>
    </motion.footer>
  );
};

export default Footer;
