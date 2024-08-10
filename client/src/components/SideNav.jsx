import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/whitelogo.png"

const MyComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-[#004bad] dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="#" className="flex ms-2 md:me-24">
                <img
                  src={logo}
                  className="h-[60px] me-3"
                  alt="HydroSense"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="relative flex items-center ms-3">
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded={isDropdownOpen ? "true" : "false"}
                  onClick={toggleDropdown}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://tse1.mm.bing.net/th?id=OIP.7O4_GREtLbxqPdJCTmfatQHaHa&pid=Api&P=0&h=180"
                    alt="user photo"
                  />
                </button>
                <div
                  className={`absolute top-full right-0 z-50 m-2 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 ${isDropdownOpen ? "" : "hidden"}`}
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                      Admin
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-full pt-20 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pt-[25px] pb-4 overflow-y-auto bg-white dark:bg-[#004bad9a]">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/overview"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white hover:text-[#004bad] group"
              >
                <svg
                  className="w-5 h-5 text-white hover:text-[#004bad] transition duration-75  group-hover:text-[#004bad]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Overview</span>
              </Link>

              <Link
                to="/complaints"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white hover:text-[#004bad] group"
              >
                <svg
                  className="w-5 h-5 text-white hover:text-[#004bad] transition duration-75  group-hover:text-[#004bad]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 0v16h12V2H4z" />
                  <path d="M6 4h8v2H6V4zm0 4h8v2H6V8z" />
                </svg>
                <span className="ms-3">Complaints</span>
              </Link>

              <Link
                to="/employees"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white hover:text-[#004bad] group"
              >
                <svg
                  className="w-5 h-5 text-white hover:text-[#004bad] transition duration-75  group-hover:text-[#004bad]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM3 16a7 7 0 0 1 14 0H3z" />
                </svg>
                <span className="ms-3">Employees</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default MyComponent;
