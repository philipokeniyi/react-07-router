import React from "react";
import { Link, NavLink } from "react-router";

function Header() {
  return (
    <header className="shadow stick z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-logo-icon-download-in-svg-png-gif-file-formats--emblem-label-round-arrows-elements-pack-sign-symbols-icons-2882300.png?f=webp&w=256"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-black-800 hover:bg-blue-50
             fucus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 lg:py-2.5 mr-2 focus:outline-none "
            >
              Log in
            </Link>

            <Link
              to="#"
              className="text-gray-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get Started
            </Link>
          </div>

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">

            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

              <li>
                <NavLink
                className={() => 
                  `block py-2 pr-4 pl-3 duration-200 border-b border-blue-100 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`

                }
                
                
                >Home</NavLink>

              </li>
            </ul>


          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
