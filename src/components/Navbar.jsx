/* eslint-disable react/prop-types */
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

function Navbar(props) {
  const handleClick = (e) => {
    const element = document.querySelector(`.${e.currentTarget.id}`);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const changeMode = () => {
    props.setDarkMode(!props.darkMode);
  };

  return (
    <nav
      className={`w-full rounded-lg ${
        props.darkMode
          ? "bg-gray-800 text-white"
          : "bg-white text-black drop-shadow-xl"
      }`}
    >
      <div className="flex justify-center h-[10vh] items-center m-auto py-5 max-w-screen-xl font-semibold">
        <span className="mr-auto text-2xl">Website</span>
        <ul className="flex justify-center items-center text-xl">
          <li className="mr-10">
            <a
              href="#About"
              className="transition ease-linear duration-100 hover:text-blue-400"
              onClick={handleClick}
              id="about"
            >
              About
            </a>
          </li>
          <li className="mr-10">
            <a
              href="#Features"
              className="transition ease-linear duration-100 hover:text-blue-400"
              onClick={handleClick}
              id="features"
            >
              Features
            </a>
          </li>
          <li className="mr-10">
            <a
              href="#Pricings"
              className="transition ease-linear duration-100 hover:text-blue-400"
              onClick={handleClick}
              id="pricings"
            >
              Pricing
            </a>
          </li>
          <li className="mr-10">
            <a
              href="#Technologies"
              className="transition ease-linear duration-100 hover:text-blue-400"
              onClick={handleClick}
              id="technologies"
            >
              Technologies
            </a>
          </li>
          <li className="mr-10">
            <a
              href="#Contact"
              className="transition ease-linear duration-100 hover:text-blue-400"
              onClick={handleClick}
              id="contact"
            >
              Contact
            </a>
          </li>
          <button className="flex justify-center items-center font-medium text-lg">
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
          </button>
          <div className="ml-10 text-xl ">
            {props.darkMode ? (
              <BsFillMoonStarsFill onClick={changeMode} />
            ) : (
              <BsFillSunFill onClick={changeMode} />
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
