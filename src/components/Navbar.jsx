/* eslint-disable react/prop-types */
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo2.svg";
import logoDark from "../assets/logo_dark2.svg";
import { useState } from "react";

function Navbar(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleClick = (e) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(`.${e.currentTarget.id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const changeMode = () => {
    props.setDarkMode((prevState) => {
      localStorage.setItem("darkMode", !prevState);
      return !prevState;
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } fixed z-10 h-full w-screen top-0 left-0 bottom-0 right-0 ${
          props.darkMode ? "bg-gray-800" : "bg-gray-800"
        } bg-opacity-70`}
      ></div>
      <nav
        className={`w-full z-20 relative ${
          props.darkMode
            ? "bg-gray-800 text-white"
            : "bg-white text-black drop-shadow-xl"
        } ${mobileMenuOpen ? "rounded-t-lg rounded-b-none" : "rounded-lg"}`}
      >
        <div className="block lg:flex relative z-20 justify-center h-[95px] items-center m-auto lg:py-5 max-w-screen-xl font-semibold">
{/*           <img
            src={props.darkMode ? logoDark : logo}
            alt="logo"
            className="ml-5 2xl:ml-0 w-40 mr-auto"
          /> */}
          <ul
            className={`${
              props.darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }  rounded-b-lg flex-col lg:flex lg:flex-row lg:bg-none justify-center text-left items-center gap-y-5 py-10 lg:p-0 lg:text-xl ${
              mobileMenuOpen ? "flex" : "hidden"
            }`}
          >
            <li className="lg:mr-10">
              <a
                href="#About"
                className="transition ease-linear duration-100 hover:text-blue-400"
                onClick={handleClick}
                id="about"
              >
                About
              </a>
            </li>
            <li className="lg:mr-10">
              <a
                href="#Features"
                className="transition ease-linear duration-100 hover:text-blue-400"
                onClick={handleClick}
                id="features"
              >
                Features
              </a>
            </li>
            <li className="lg:mr-10">
              <a
                href="#Pricings"
                className="transition ease-linear duration-100 hover:text-blue-400"
                onClick={handleClick}
                id="pricings"
              >
                Pricing
              </a>
            </li>
            <li className="lg:mr-10">
              <a
                href="#Technologies"
                className="transition ease-linear duration-100 hover:text-blue-400"
                onClick={handleClick}
                id="technologies"
              >
                Technologies
              </a>
            </li>
            <li className="lg:mr-10">
              <a
                href="#Contact"
                className="transition ease-linear duration-100 hover:text-blue-400"
                onClick={handleClick}
                id="contact"
              >
                Contact
              </a>
            </li>
            {/* <button className="flex justify-center items-center font-medium">
              <svg
                className="w-5 h-5 mr-2 rounded-full"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 3900 3900"
              >
                <path fill="#b22234" d="M0 0h7410v3900H0z" />
                <path
                  d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                  stroke="#fff"
                  strokeWidth="300"
                />
                <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                <g fill="#fff">
                  <g id="d">
                    <g id="c">
                      <g id="e">
                        <g id="b">
                          <path
                            id="a"
                            d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                          />
                          <use xlinkHref="#a" y="420" />
                          <use xlinkHref="#a" y="840" />
                          <use xlinkHref="#a" y="1260" />
                        </g>
                        <use xlinkHref="#a" y="1680" />
                      </g>
                      <use xlinkHref="#b" x="247" y="210" />
                    </g>
                    <use xlinkHref="#c" x="494" />
                  </g>
                  <use xlinkHref="#d" x="988" />
                  <use xlinkHref="#c" x="1976" />
                  <use xlinkHref="#e" x="2470" />
                </g>
              </svg>
              <li className="">English (US)</li>
            </button> */}
            {/* <div className="lg:ml-10 lg:mr-5"> */}
            <div className="lg:mr-5">
              {props.darkMode ? (
                <BsFillSunFill onClick={changeMode} />
              ) : (
                <BsFillMoonStarsFill onClick={changeMode} />
              )}
            </div>
          </ul>
          {mobileMenuOpen ? (
            <IoCloseSharp
              onClick={toggleMobileMenu}
              className={`absolute bottom-0 top-0 right-5 m-auto text-2xl lg:hidden ${
                props.darkMode ? "text-white" : "text-black"
              }`}
            />
          ) : (
            <GiHamburgerMenu
              onClick={toggleMobileMenu}
              className={`absolute bottom-0 top-0 right-5 m-auto text-2xl lg:hidden ${
                props.darkMode ? "text-white" : "text-black"
              }`}
            />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
