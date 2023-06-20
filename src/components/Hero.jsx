import hero from "../assets/hero.png";
import { FaArrowRight } from "react-icons/fa";

function Hero(props) {
  return (
    <section className="h-[100vh] flex justify-center items-center flex-row max-w-screen-xl m-auto">
      <div>
        <h1 className="text-6xl font-bold mb-4">
          Payments tool for software companies
        </h1>
        <p className="text-2xl font-medium">
          From checkout to global sales tax compliance, companies around the
          world use Flowbite to simplify their payment stack.
        </p>
        <div className="font-medium text-xl mt-5">
          <button className="drop-shadow-xl py-4 px-8 mr-10 border-2 border-solid text-white border-blue-600 rounded-md bg-blue-600 hover:bg-blue-800 hover:border-blue-800 active:bg-blue-600 active:border-blue-600 transition duration-200">
            Get started <FaArrowRight className="inline-block text-[25px]" />
          </button>
          <button
            className={`drop-shadow-xl py-4 px-8 mr-10 border-2 border-solid border-gray-500 rounded-md hover:border-gray-700/[0.5] transition duration-200 active:bg-gray-800 active:border-gray-800 ${
              props.darkMode ? "text-white" : "text-black active:text-white"
            }`}
          >
            Speak to Sales
          </button>
        </div>
      </div>
      <div>
        <img src={hero} alt="Hero page image" />
      </div>
    </section>
  );
}

export default Hero;
