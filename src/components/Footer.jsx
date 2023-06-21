/* eslint-disable react/prop-types */
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function Footer(props) {
  const handleClick = (e) => {
    const element = document.querySelector(`.${e.currentTarget.id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`rounded-lg shadow ${
        props.darkMode ? "bg-gray-800" : "bg-white drop-shadow-xl"
      }`}
    >
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
          <li>
            <a
              href="#About"
              className="mr-4 hover:underline md:mr-6"
              onClick={handleClick}
              id="about"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Features"
              className="mr-4 hover:underline md:mr-6"
              onClick={handleClick}
              id="features"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#Pricings"
              className="mr-4 hover:underline md:mr-6"
              onClick={handleClick}
              id="pricings"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#Technologies"
              className="hover:underline"
              onClick={handleClick}
              id="technologies"
            >
              Technologies
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
