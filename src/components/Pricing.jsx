/* eslint-disable react/prop-types */
import { BsCheckLg } from "react-icons/bs";

function Pricing(props) {
  return (
    <section className="flex flex-col h-auto lg:h-screen justify-center items-center max-w-screen-xl m-auto pricings">
      <div className="mb-24 text-center">
        <h2 className="text-6xl font-bold mb-4">
          Check out our Pricing packages{" "}
        </h2>
        <p className="text-2xl">
          Check out our Pricing packages designed to suit your budget and
          requirements. Our transparent pricing model offers flexibility and
          value, ensuring you get high-quality solutions at competitive rates.
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap">
        <div className="flex justify-center items-center">
          <div
            className={`flex justify-center items-center flex-col flex-1 border-solid border-[1px] py-8 px-10 mx-auto rounded-lg mr-10  transition duration-150 ease-linear hover:scale-105 ${
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
              Affordable custom website with responsive design.
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
              </span>
              /month
            </p>
            <ul className="font-medium">
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />
                Custom Website Creation
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />
                Responsive Design
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />
                SEO Optimization
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />
                Content Management System
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />
                Ongoing Support
              </li>
            </ul>
            <button
              className={`w-full bg-blue-600 rounded-md text-xl py-2 mt-4  hover:bg-blue-800 hover:border-blue-800 transition duration-200 active:bg-blue-600 active:border-blue-600 text-white`}
            >
              Get started
            </button>
          </div>
          <div
            className={`flex justify-center items-center flex-col flex-1 border-solid border-[1px] py-8 px-10 mx-auto rounded-lg mr-10  transition duration-150 ease-linear hover:scale-105 ${
              props.darkMode
                ? "border-stone-400 bg-[#1f2937]"
                : "border-white bg-white drop-shadow-2xl"
            }`}
          >
            <h3 className="text-4xl font-bold">Professional</h3>
            <h4
              className={`font-medium text-xl my-4 text-center ${
                props.darkMode ? "text-gray-400" : "text-gray-800"
              }`}
            >
              Advanced e-commerce integration and premium design.
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
              </span>
              /month
            </p>
            <ul className="font-medium">
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />
                E-commerce Integration{" "}
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />{" "}
                Payment Gateway Integration
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />{" "}
                Product Catalog Management
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />
                Order Tracking
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />{" "}
                Conversion Optimization
              </li>
            </ul>
            <button className="w-full text-white bg-blue-600 rounded-md text-xl py-2 mt-4  hover:bg-blue-800 hover:border-blue-800 transition duration-200 active:bg-blue-600 active:border-blue-600">
              Get started
            </button>
          </div>
          <div
            className={`flex justify-center items-center flex-1 flex-col border-solid border-[1px] py-8 px-10 mx-auto rounded-lg mr-10  transition duration-150 ease-linear hover:scale-105 ${
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
              Customized solutions with optimization and support.{" "}
            </h4>
            <p
              className={`mb-8  text-center ${
                props.darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <span
                className={`text-6xl ${
                  props.darkMode ? "text-white" : "text-black"
                }`}
              >
                $499
              </span>
              /month
            </p>
            <ul className="font-medium">
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />
                Premium Design Templates{" "}
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />
                Dedicated Project Manager
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />{" "}
                Custom Development
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />
                Performance Optimization
              </li>
              <li className="text-lg mb-2">
                <BsCheckLg className="inline-block text-green-400 mr-2" />
                Website Maintenance
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
