/* eslint-disable react/prop-types */
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { DiSass } from "react-icons/di";
import { SiCssmodules } from "react-icons/si";
import { SiReactquery } from "react-icons/si";

function Technologies(props) {
  return (
    <section className="h-auto lg:h-screen flex justify-center items-center flex-col max-w-screen-xl m-auto technologies">
      <div className="text-center mt-10 mb-5 lg:mb-24">
        <h2 className="text-xl lg:text-6xl font-bold mb-4">
          Technologies we use to build our Projects
        </h2>
        <p className="text-md lg:text-2xl w-auto">
          At Webilow, we utilize a wide array of cutting-edge technologies to
          build our projects. Our skilled developers harness modern programming
          languages, frameworks, and tools to deliver high-quality solutions.
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap lg:flex-nowrap text-8xl gap-7">
        <AiFillHtml5 className="text-orange-600 transition duration-300 hover:scale-125" />
        <IoLogoCss3 className="text-blue-600 transition duration-300 hover:scale-125" />
        <SiTailwindcss className="text-blue-400 transition duration-300 hover:scale-125" />
        <DiSass className="text-pink-700 transition duration-300 hover:scale-125" />
        <SiCssmodules className="text-blue-700 transition duration-300 hover:scale-125" />
        <IoLogoJavascript className="text-yellow-400 transition duration-300 hover:scale-125" />
        <SiTypescript className="text-blue-600 transition duration-300 hover:scale-125" />
        <FaReact className="text-blue-400 transition duration-300 hover:scale-125" />
        <SiReactquery className="text-red-400 transition duration-300 hover:scale-125" />
        <TbBrandNextjs
          className={`transition duration-300 hover:scale-125 ${
            props.darkMode ? "text-white" : "text-black"
          }`}
        />
        <IoLogoFirebase className="text-yellow-500 transition duration-300 hover:scale-125" />
      </div>
    </section>
  );
}

export default Technologies;
