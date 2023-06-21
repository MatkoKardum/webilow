/* eslint-disable react/prop-types */
import { BsCheckLg } from "react-icons/bs";

function Pricing(props) {
  return (
    <section className="flex flex-col h-[100vh] justify-center items-center max-w-screen-xl m-auto pricings">
      <div className="mb-24 text-center">
        <h2 className="text-6xl font-bold mb-4">
          Designed for business teams like yours
        </h2>
        <p className="text-2xl">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div
            className={`flex justify-center items-center flex-col border-solid border-[1px] py-8 px-10 mx-auto rounded-lg mr-10  transition duration-150 ease-linear hover:scale-105 ${
              props.darkMode
                ? "border-stone-400 bg-[#1f2937]"
                : "border-white bg-white drop-shadow-2xl"
            }`}
          >
            <h3 className="text-4xl font-bold">Starter</h3>
            <h4
              className={`font-medium text-xl my-4 text-center ${
                props.darkMode ? "text-gray-400" : "text-gray-800"
              }`}
            >
              Best option for personal use & for your next project.
            </h4>
            <p
              className={`mb-8 ${
                props.darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <span
                className={`text-6xl ${
                  props.darkMode ? "text-white" : "text-black"
                }`}
              >
                $29
              </span>{" "}
              /month
            </p>
            <ul className="font-medium">
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />{" "}
                Individual configuration
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" /> No
                setup, or hidden fees
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" /> Team
                size: 1 developer
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />{" "}
                Premium support: 6 months
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" /> Free
                updates: 6 months
              </li>
            </ul>
            <button
              className={`w-full bg-blue-600 rounded-md text-xl py-2 mt-4  hover:bg-blue-800 hover:border-blue-800 transition duration-200 active:bg-blue-600 active:border-blue-600 text-white`}
            >
              Get started
            </button>
          </div>
          <div
            className={`flex justify-center items-center flex-col border-solid border-[1px] py-8 px-10 mx-auto rounded-lg mr-10  transition duration-150 ease-linear hover:scale-105 ${
              props.darkMode
                ? "border-stone-400 bg-[#1f2937]"
                : "border-white bg-white drop-shadow-2xl"
            }`}
          >
            <h3 className="text-4xl font-bold">Company</h3>
            <h4
              className={`font-medium text-xl my-4 text-center ${
                props.darkMode ? "text-gray-400" : "text-gray-800"
              }`}
            >
              Best option for personal use & for your next project.
            </h4>
            <p
              className={`mb-8 ${
                props.darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <span
                className={`text-6xl ${
                  props.darkMode ? "text-white" : "text-black"
                }`}
              >
                $99
              </span>{" "}
              /month
            </p>
            <ul className="font-medium">
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />{" "}
                Individual configuration
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" /> No
                setup, or hidden fees
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" /> Team
                size: 10 developer
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />{" "}
                Premium support: 24 months
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" /> Free
                updates: 24 months
              </li>
            </ul>
            <button className="w-full text-white bg-blue-600 rounded-md text-xl py-2 mt-4  hover:bg-blue-800 hover:border-blue-800 transition duration-200 active:bg-blue-600 active:border-blue-600">
              Get started
            </button>
          </div>
          <div
            className={`flex justify-center items-center flex-col border-solid border-[1px] py-8 px-10 mx-auto rounded-lg mr-10  transition duration-150 ease-linear hover:scale-105 ${
              props.darkMode
                ? "border-stone-400 bg-[#1f2937]"
                : "border-white bg-white drop-shadow-2xl"
            }`}
          >
            <h3 className="text-4xl font-bold">Enterprise</h3>
            <h4
              className={`font-medium text-xl my-4 text-center ${
                props.darkMode ? "text-gray-400" : "text-gray-800"
              }`}
            >
              Best option for personal use & for your next project.
            </h4>
            <p
              className={`mb-8 ${
                props.darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <span
                className={`text-6xl ${
                  props.darkMode ? "text-white" : "text-black"
                }`}
              >
                $499
              </span>{" "}
              /month
            </p>
            <ul className="font-medium">
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />{" "}
                Individual configuration
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" /> No
                setup, or hidden fees
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" /> Team
                size: 100+ developer
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />{" "}
                Premium support: 36 months
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" /> Free
                updates: 36 months
              </li>
            </ul>
            <button className="w-full text-white bg-blue-600 rounded-md text-xl py-2 mt-4  hover:bg-blue-800 hover:border-blue-800 transition duration-200 active:bg-blue-600 active:border-blue-600">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
