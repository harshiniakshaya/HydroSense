import React from 'react';
import NeuButton from './Button';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <section className="bg-transparent" id='contact'>
      <div className="py-[100px] lg:py-16 px-4 mx-auto max-w-screen-md">
        <motion.h2 
        initial={{opacity:0, y:-100}}
          whileInView={{opacity:1, y:0}}
          transition={{duration: 0.75}}
        className="lg:mt-[25px] text-center mb-4 text-5xl md:text-7xl lg:text-8xl tracking-tight font-bold bg-gradient-to-r from-[#004AAD] to-[#090909] bg-clip-text text-transparent">
          Contact Us
        </motion.h2>
        <motion.h6 
        initial={{opacity:0, y:-100}}
          whileInView={{opacity:1, y:0}}
          transition={{duration: 0.75}}
        className="p-4 lg:mb-8 text-center text-black sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
        </motion.h6>
        <motion.form 
        initial={{opacity:0, x:100, scale: 0.75}}
    whileInView={{opacity:1, x:0, scale:1}}
    transition={{duration: 0.5}}
        action="#" className="space-y-4 px-4 md:px-32">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-0 focus:border-gray-300"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-0 focus:border-gray-300"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-0 focus:border-gray-300"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <NeuButton text="Send Message" />
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
