import React from 'react';
import './Waves.css'; // Import the CSS file
import NeuButton from './Button';
import { Link } from 'react-scroll';

const SimpleCSSWaves = () => {
  return (
    <div>
      <div className="header" id='home'>
        <div className="inner-header mt-20 flex flex-col justify-center items-center text-center">
            <h1 className='hero-header text-4xl md:text-7xl lg:text-8xl'>
                HydroSense
            </h1>
            <p className='text-white p-6 md:px-16 lg:px-20'>
            Efficient water management with smart technology and real-time insights.
            </p>
            <Link
                to="#"
                smooth={true}
                duration={500}
                offset={-100}
                className="block py-2 px-3 text-[#004AAD] hover:text-black dark:hover:text-black md:p-0 cursor-pointer"
              >
                <NeuButton text="Read More" />
              </Link>
        </div>

        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>

      {/* <div className="content flex">
        <p>By.Goodkatz | Free to use</p>
      </div> */}
    </div>
  );
};

export default SimpleCSSWaves;
