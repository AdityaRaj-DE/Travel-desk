
import React from "react";
import { NavLink, Link } from "react-router-dom";



export default function Navbar() {
  return (
    <navbar className=" sticky z-50 top-2 flex justify-center ">
      <nav className="w-5/6 drop-shadow-xl bg-white rounded-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 border-gray-200 px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src="../public/logo.png" className="mr-3 h-12" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-emerald-600 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Contribute
            </Link>
          </div>
         
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-emerald-600" : "text-grey-700"
                    }border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-emerald-600 lg:p-0`
                  }
                >
                  TravelDesk
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-emerald-600" : "text-grey-700"
                    }border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-emerald-600 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              {/* <---------------contact-----------> */}
              <li>
                <NavLink
                  to="/redeem"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-emerald-600" : "text-grey-700"
                    }border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-emerald-600 lg:p-0`
                  }
                >
                  Redeem
                </NavLink>
              </li>
            </ul>
              
          </div>
          {/* serach button  */}
          <div>
            <form
              action="/search"
              method="get"
              class="flex items-center bg-white rounded-lg bg-opacity-70"
            >
              <input
                type="text"
                name="query"
                placeholder="Search..."
                class="w-full py-2 px-4 bg-white rounded-lg bg-opacity-0 focus:outline-none"
              />
              <button type="submit" class="px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-4.35-4.35M17 10.5A6.5 6.5 0 104.35 4.35a6.5 6.5 0 0012.65 6.15z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </navbar>
  );
}
