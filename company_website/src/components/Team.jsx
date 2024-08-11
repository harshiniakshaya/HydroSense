import React from 'react';
import { motion } from 'framer-motion';
import jayakanth from '../assets/team/jayakanth.jpg'
import hareesh from '../assets/team/hareesh.jpg'
import poovanan from '../assets/team/poovanan.jpg'
import kiruthhik from '../assets/team/kiruthhik.jpg'
import harshini from '../assets/team/harshini.png'

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Jayakanth S',
      role: 'App Developer',
      description: 'Jayakanth leads the design and development of cutting-edge app features and innovations.',
      imgSrc: jayakanth,
      socialLinks: {
        github: '#',
        linkedin:"#"
      },
    },
    {
      name: 'Hareesh S S',
      role: 'App Developer',
      description: 'Hareesh leads our app development efforts and ensures the strategy aligns with our brand goals.',
      imgSrc: hareesh,
      socialLinks: {
        github: 'https://github.com/SSHareesh',
        linkedin:"https://www.linkedin.com/in/hareesh-s-s-7478b1257/"
      },
    },
    {
      name: 'Poovanan',
      role: 'IoT Engineer',
      description: 'Poovanan oversees the technical direction of our IoT solutions and integrates them with our platform’s strategic goals.',
      imgSrc: poovanan,
      socialLinks: {
        github: '#',
        linkedin:"#"
      },
    },
    {
        name: 'Kiruthhik A S',
        role: 'Backend Developer',
        description: "Kiruthhik manages the backend development, ensuring seamless integration and robust performance for our platform's technical infrastructure.",
        imgSrc: kiruthhik,
        socialLinks: {
          github: 'https://github.com/kiruthhik',
            linkedin:"#"
        },
      },
      {
        name: 'Harshini Akshaya A S',
        role: 'Web Developer',
        description: 'Harshini crafts engaging and user-friendly web experiences, contributing to the design and functionality of our digital platforms.',
        imgSrc: harshini,
        socialLinks: {
          github: 'https://github.com/harshiniakshaya',
          linkedin:"https://www.linkedin.com/in/harshiniakshaya/"
        },
      },
  ];

  return (
    <section className="bg-transparent" id='team'>
      <div className="px-4 mx-auto max-w-screen-xl py-[100px] lg:px-6">
        <motion.div 
        initial={{opacity:0, y:-100}}
          whileInView={{opacity:1, y:0}}
          transition={{duration: 0.75}}
        className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-5xl md:text-7xl lg:text-8xl tracking-tight font-bold bg-gradient-to-r from-[#004AAD] to-[#090909] bg-clip-text text-transparent">
            Our Team
          </h2>
          <h6 className="text-black font-semibold text-[18px]">
          Meet the talented minds behind HydroSense, working together to deliver effective water management solutions.
          </h6>
        </motion.div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <motion.div
                initial={{opacity:0, x:100, scale: 0.75}}
    whileInView={{opacity:1, x:0, scale:1}}
    transition={{duration: 0.5}}
              key={index}
              className="items-center bg-[#004AAD] rounded-lg shadow sm:flex dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="w-[500px] h-[300px] object-cover object-center rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={member.imgSrc}
                  alt={`${member.name} Avatar`}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  <a href="#">{member.name}</a>
                </h3>
                <span className="text-gray-300">{member.role}</span>
                <p className="mt-3 mb-4 font-light text-white">{member.description}</p>
                <ul className="flex space-x-4 sm:mt-0">
                  {Object.entries(member.socialLinks).map(([key, link]) => (
                    <li key={key}>
                      <a
                        href={link}
                        className="text-white"
                      >
                      {key === 'linkedin' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M23 0H1C0.447715 0 0 0.447715 0 1V23C0 23.5523 0.447715 24 1 24H23C23.5523 24 24 23.5523 24 23V1C24 0.447715 23.5523 0 23 0ZM8.82842 20.2808H5.13159V9.66819H8.82842V20.2808ZM6.98058 8.29029C5.83178 8.29029 5.09028 7.56361 5.09028 6.45414C5.09028 5.356 5.83178 4.63738 6.98058 4.63738C8.13718 4.63738 8.868 5.356 8.868 6.45414C8.868 7.56361 8.13718 8.29029 6.98058 8.29029ZM20.4388 20.2808H16.742V14.3487C16.742 13.158 16.7388 11.9308 15.4422 11.9308C14.1358 11.9308 13.8218 13.1401 13.8218 14.3487V20.2808H10.1249V9.66819H12.8923V11.0638H12.9315C13.3822 10.0786 14.3025 9.42337 15.2924 9.42337C18.3113 9.42337 20.4388 11.2157 20.4388 14.9328V20.2808Z"/>
                        </svg>

                        )}
                        {key === 'github' && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.304 3.438 9.8 8.156 11.4.594.1.812-.257.812-.572v-2.014c-3.328.725-4.016-1.603-4.016-1.603-.546-1.387-1.333-1.756-1.333-1.756-1.089-.746.083-.73.083-.73 1.205.084 1.838 1.24 1.838 1.24 1.068 1.831 2.806 1.304 3.492.996.106-.772.418-1.305.761-1.606-2.665-.302-5.467-1.332-5.467-5.928 0-1.311.467-2.38 1.237-3.22-.124-.302-.536-1.521.117-3.17 0 0 1.009-.323 3.309 1.24.959-.266 1.989-.399 3.011-.404 1.022.005 2.052.138 3.012.404 2.303-1.565 3.308-1.24 3.308-1.24.654 1.649.243 2.868.12 3.17.773.84 1.237 1.91 1.237 3.22 0 4.606-2.805 5.623-5.474 5.921.43.372.812 1.104.812 2.223v3.293c0 .318.217.672.818.572C20.568 21.8 24 17.304 24 12 24 5.372 18.628 0 12 0z"/>
                            </svg>

                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
