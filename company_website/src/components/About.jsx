import React from 'react';
import { motion } from 'framer-motion'
import img1 from "../assets/bluebg/20.png"
import img2 from "../assets/bluebg/21.png"

const Section = () => {
  return (
    <section className="bg-transparent px-3 pt-[110px]" id="about">
      <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-6 lg:px-6">
        <motion.div 
          initial={{opacity:0, x:100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration: 0.5}}
          className="text-base md:text-lg text-black">
          <h2 className="mb-4 text-5xl md:text-7xl lg:text-8xl tracking-tight font-bold bg-gradient-to-r from-[#004AAD] to-[#090909] bg-clip-text text-transparent">
            About Us
          </h2>
          <h6 className="mb-4 text-black">
          HydroSense is an innovative project aimed at enhancing water management efficiency. Our app features real-time flow meter monitoring, alerts for discrepancies, blockchain-based secure billing, and pH level tracking. By addressing non-revenue water challenges and promoting transparency, HydroSense is set to make a significant impact in the field of water resource management.
          </h6>
          
        </motion.div>

        <motion.div 
          initial={{opacity:0, x:-100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration: 0.75}}
          className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-lg" src={img1} />
          <img className="mt-4 w-full lg:mt-10 rounded-lg" src={img2} alt="office content 2" />
        </motion.div>
      </div>
    </section>
  );
};

export default Section;


