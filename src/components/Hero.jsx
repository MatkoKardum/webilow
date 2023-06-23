/* eslint-disable react/prop-types */
import hero from "../assets/hero.png";
import { FaArrowRight } from "react-icons/fa";

function Hero(props) {
  const handleClick = (e) => {
    const element = document.querySelector(`.${e.currentTarget.id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-[90vh] flex flex-col-reverse lg:flex-row justify-center items-center max-w-screen-xl m-auto flex-wrap">
      <div className="lg:flex-1 max-w-full md:max-w-[50%] lg:max-w-full">
        <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-6xl lg:text-left text-center font-bold mb-2 lg:mb-6">
          Company for{" "}
          <span className="underline text-blue-600">Web Development</span>
        </h1>
        <p className="text-md lg:text-xl xl:text-2xl font-light text-center lg:text-left max-w-5xl">
          From crafting engaging user interfaces to ensuring seamless
          functionality across devices, businesses worldwide rely on Webilow to
          streamline their web development process.
        </p>
        <div className="font-medium text-sm lg:text-xl mt-6 flex justify-center items-center lg:block">
          <button
            className="drop-shadow-xl py-2 px-4 mr-4 lg:py-4 lg:px-8 lg:mr-10 border-2 border-solid text-white border-blue-600 rounded-xl bg-blue-600 hover:bg-blue-800 hover:border-blue-800 active:bg-blue-600 active:border-blue-600 transition duration-200"
            onClick={handleClick}
            id="contact"
          >
            Contact us
            <FaArrowRight className="inline-block text-md lg:text-[25px] ml-2 mt-[-1.5px]" />
          </button>
          <button
            className={`drop-shadow-xl py-2 px-4 mr-4 lg:py-4 lg:px-8 lg:mr-10 border-2 border-solid border-gray-500 rounded-xl hover:border-gray-700/[0.5] transition duration-200 active:bg-gray-800 active:border-gray-800 ${
              props.darkMode ? "text-white" : "text-black active:text-white"
            }`}
            onClick={handleClick}
            id="pricings"
          >
            See Pricings
          </button>
        </div>
      </div>
      <div>
        <img
          src={hero}
          alt="Hero page image"
          className="w-auto sm:max-w-xl md:max-w-xl lg:max-w-md xl:max-w-2xl 2xl:max-w-3xl flex justify-center items-center"
        />
      </div>
    </section>
  );
}

export default Hero;
