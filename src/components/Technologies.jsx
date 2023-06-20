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

function Technologies() {
  return (
    <section className="h-[100vh] flex justify-center items-center flex-col max-w-screen-xl m-auto technologies">
      <div className="text-center mb-24">
        <h2 className="text-6xl font-bold mb-4">
          Technologies we use to build our Projects
        </h2>
        <p className="text-2xl w-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          temporibus nostrum perspiciatis vitae quisquam vero maiores suscipit
          eligendi commodi pariatur.
        </p>
      </div>
      <div className="flex justify-center items-center text-8xl gap-7">
        <AiFillHtml5 className="text-orange-600 transition duration-300 hover:scale-125" />
        <IoLogoCss3 className="text-blue-600 transition duration-300 hover:scale-125" />
        <SiTailwindcss className="text-blue-400 transition duration-300 hover:scale-125" />
        <DiSass className="text-pink-700 transition duration-300 hover:scale-125" />
        <SiCssmodules className="text-blue-700 transition duration-300 hover:scale-125" />
        <IoLogoJavascript className="text-yellow-400 transition duration-300 hover:scale-125" />
        <SiTypescript className="text-blue-600 transition duration-300 hover:scale-125" />
        <FaReact className="text-blue-400 transition duration-300 hover:scale-125" />
        <SiReactquery className="text-red-400 transition duration-300 hover:scale-125" />
        <TbBrandNextjs className="text-white transition duration-300 hover:scale-125" />
        <IoLogoFirebase className="text-yellow-500 transition duration-300 hover:scale-125" />
      </div>
    </section>
  );
}

export default Technologies;
