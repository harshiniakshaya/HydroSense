// import React from "react";
// import { motion } from 'framer-motion';


// // Icon component for rendering SVG icons
// const Icon = ({ children }) => (
//   <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
//     style={{ backgroundColor: '#004AAD' }}
//   >
//     {children}
//   </div>
// );

// // Feature component for each individual feature
// const Feature = ({ icon, title, description }) => (
//   <motion.div 
//     initial={{opacity:0, x:100, scale: 0.75}}
//     whileInView={{opacity:1, x:0, scale:1}}
//     transition={{duration: 0.5}}
//     className="bg-white p-5 rounded-lg shadow-lg">
//     <Icon>{icon}</Icon>
//     <h3 className="mb-2 text-xl font-bold text-black">{title}</h3>
//     <h6 className="text-black">{description}</h6>
//   </motion.div>
// );

// // Main Section component
// const FeaturesSection = () => {
//   return (
//     <section className="bg-transparent p-3" id="services">
//       <div className="py-[100px] px-4 mx-auto max-w-screen-xl sm:py-[100px] lg:px-6">
//         <motion.div 
//         initial={{opacity:0, y:-100}}
//           whileInView={{opacity:1, y:0}}
//           transition={{duration: 0.75}}
//         className=" mb-8 lg:mb-16">
//         <h2 className="mb-4 text-5xl md:text-7xl lg:text-8xl tracking-tight font-bold bg-gradient-to-r from-[#004AAD] to-[#090909] bg-clip-text text-transparent">
//             Services we offer
//           </h2>
//           <h6 className="text-black font-semibold text-[18px]">
//             Here at Flowbite we focus on markets where technology, innovation,
//             and capital can unlock long-term value and drive economic growth.
//           </h6>
//         </motion.div>
//         <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
//           <Feature
//             icon={
//               <svg
//                 className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             }
//             title="Marketing"
//             description="Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan."
//           />
//           <Feature
//             icon={
//               <svg
//                 className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
//               </svg>
//             }
//             title="Legal"
//             description="Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you."
//           />
//           <Feature
//             icon={
//               <svg
//                 className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
//                   clipRule="evenodd"
//                 ></path>
//                 <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
//               </svg>
//             }
//             title="Business Automation"
//             description="Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started."
//           />
//           <Feature
//             icon={
//               <svg
//                 className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246a4.535 4.535 0 00-1.676-.662V7.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V5z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             }
//             title="Finance"
//             description="Audit-proof software built for critical financial operations like month-end close and quarterly budgeting."
//           />
//           <Feature
//             icon={
//               <svg
//                 className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5 4a3 3 0 00-3 3v8a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm0 2a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1V7a1 1 0 00-1-1H5z"
//                   clipRule="evenodd"
//                 ></path>
//                 <path d="M7 9a1 1 0 000 2h6a1 1 0 100-2H7z"></path>
//               </svg>
//             }
//             title="HR & Operations"
//             description="Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual."
//           />
//           <Feature
//             icon={
//               <svg
//                 className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 11-2 0V4H4a1 1 0 01-1-1z"
//                   clipRule="evenodd"
//                 ></path>
//                 <path d="M4 9a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"></path>
//               </svg>
//             }
//             title="Enterprise Design"
//             description="Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration."
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;


import React from "react";
import { motion } from 'framer-motion';

// Icon component for rendering SVG icons
const Icon = ({ children }) => (
  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
    style={{ backgroundColor: '#004AAD' }}
  >
    {children}
  </div>
);

// Feature component for each individual feature
const Feature = ({ icon, title, description }) => (
  <motion.div 
    initial={{opacity:0, x:100, scale: 0.75}}
    whileInView={{opacity:1, x:0, scale:1}}
    transition={{duration: 0.5}}
    className="bg-white p-5 rounded-lg shadow-lg">
    <Icon>{icon}</Icon>
    <h3 className="mb-2 text-xl font-bold text-black">{title}</h3>
    <h6 className="text-black">{description}</h6>
  </motion.div>
);

// Main Section component
const FeaturesSection = () => {
  return (
    <section className="bg-transparent p-3" id="services">
      <div className="py-[100px] px-4 mx-auto max-w-screen-xl sm:py-[100px] lg:px-6">
        <motion.div 
          initial={{opacity:0, y:-100}}
          whileInView={{opacity:1, y:0}}
          transition={{duration: 0.75}}
          className=" mb-8 lg:mb-16">
          <h2 className="mb-4 text-5xl md:text-7xl lg:text-8xl tracking-tight font-bold bg-gradient-to-r from-[#004AAD] to-[#090909] bg-clip-text text-transparent">
            Services we offer
          </h2>
          <h6 className="text-black font-semibold text-[18px]">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </h6>
        </motion.div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <Feature
            icon={
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            }
            title="Real-Time Flow Meter Monitoring 💧"
            description="Tracks and displays current flow meter readings, highlighting discrepancies for immediate attention."
          />
          <Feature
            icon={
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            }
            title="Discrepancy Alerts 🚨"
            description="Generates alerts for significant differences in flow meter readings to prompt quick investigation."
          />
          <Feature
            icon={
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246a4.535 4.535 0 00-1.676-.662V7.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            }
            title="Secure Blockchain-Based Billing 💳"
            description="Facilitates secure and transparent water bill payments through blockchain integration."
          />
          <Feature
            icon={
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A20.816 20.816 0 0010 13c-4.143 0-8.162-.44-12-1.308z"></path>
              </svg>
            }
            title="pH Level Monitoring 💧"
            description="Monitors water pH levels to ensure optimal quality and safety for consumption."
          />
          <Feature
            icon={
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2a1 1 0 011 1v1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2v1a1 1 0 01-1 1H6a1 1 0 01-1-1V6H3a1 1 0 01-1-1V4a1 1 0 011-1h2V2a1 1 0 011-1h8zM3 6h14v10H3V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            }
            title="Water Distribution Mapping 🗺️"
            description="Visualizes water distribution across the region to manage and plan resources effectively."
          />
          <Feature
            icon={
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4a3 3 0 00-3 3v8a3 3 0 003 3h11a3 3 0 003-3V7a3 3 0 00-3-3H5zM3 7a2 2 0 012-2h11a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
                  clipRule="evenodd"
                ></path>
                <path d="M7 12a1 1 0 011 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-1a1 1 0 011-1h1zm0 2v-1h1v1H7z"></path>
              </svg>
            }
            title="Complaint Reporting 📝"
            description="Provides a platform for users to report issues and request support for water-related problems."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
