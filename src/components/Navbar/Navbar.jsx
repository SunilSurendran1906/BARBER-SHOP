import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/image 9.svg";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav
        className="flex items-center justify-between p-8 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Home</span>
            <img className="h-20	 w-auto" src={logoImg} alt="Logo" />
          </NavLink>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex justify-center lg:gap-x-20">
          {["/", "/about", "/services", "/blog", "/contact"].map(
            (path, index) => (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "font-lalezar text-3xl		 font-w400 leading-6 text-red-600"
                    : "font-lalezar text-3xl		 font-w400 leading-6 text-black"
                }
              >
                {path === "/"
                  ? "Home"
                  : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </NavLink>
            )
          )}
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md z-10">
            <div className="p-4 flex flex-col gap-4">
              {["/", "/about", "/services", "/blog", "/contact"].map(
                (path, index) => (
                  <NavLink
                    key={index}
                    to={path}
                    onClick={toggleMobileMenu}
                    className={({ isActive }) =>
                      isActive
                        ? "font-lalezar text-3xl		 font-w400 leading-6 text-red-600"
                        : "font-lalezar text-3xl		 font-w400 leading-6 text-black"
                    }
                  >
                    {path === "/"
                      ? "Home"
                      : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </NavLink>
                )
              )}
            </div>
          </div>
        )}

        <div className="hidden lg:flex lg:flex-1 lg:justify-end 	">
          <button className="bg-customRed text-white font-lalezar text-3xl text-center align-middle font-normal leading-center  h-14 w-52 hover:bg-customRedHover rounded-xl	 ">
            Book Now
          </button>
        </div>
      </nav>
    </div>
  );
};
