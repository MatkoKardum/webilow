/* eslint-disable react/prop-types */
import hero from "../assets/hero.png";
import { FaArrowRight } from "react-icons/fa";

function Hero(props) {
  return (
    <section className="h-[90vh] flex justify-center items-center flex-row max-w-screen-xl m-auto">
      <div>
        <h1 className="sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
          Company for{" "}
          <span className="underline text-blue-600">Web Development</span>
        </h1>
        <p className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-light max-w-5xl">
          From crafting engaging user interfaces to ensuring seamless
          functionality across devices, businesses worldwide rely on Webilow to
          streamline their web development process.
        </p>
        <div className="font-medium text-xl mt-6">
          <button className="drop-shadow-xl py-4 px-8 mr-10 border-2 border-solid text-white border-blue-600 rounded-xl bg-blue-600 hover:bg-blue-800 hover:border-blue-800 active:bg-blue-600 active:border-blue-600 transition duration-200">
            Contact us
            <FaArrowRight className="inline-block text-[25px] ml-2 mt-[-1.5px]" />
          </button>
          <button
            className={`drop-shadow-xl py-4 px-8 mr-10 border-2 border-solid border-gray-500 rounded-xl hover:border-gray-700/[0.5] transition duration-200 active:bg-gray-800 active:border-gray-800 ${
              props.darkMode ? "text-white" : "text-black active:text-white"
            }`}
          >
            See Pricings
          </button>
        </div>
      </div>
      <div>
        <img
          src={hero}
          alt="Hero page image"
          className="max-w-5xl sm:w-2xl md:w-4xl lg:w-5xl xl:w-6xl"
        />
      </div>
    </section>
  );
}

export default Hero;
