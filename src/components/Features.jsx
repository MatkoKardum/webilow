/* eslint-disable react/prop-types */
import { FaSearchengin } from "react-icons/fa";
import { TbScreenShare } from "react-icons/tb";
import { BsFillPhoneFill } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";

function Features(props) {
  return (
    <section className="h-auto lg:h-screen flex justify-center items-center flex-col text-center max-w-screen-xl m-auto features">
      <h2 className="text-center text-xl lg:text-6xl mt-10 mb-16 lg:mb-28 font-bold">
        All in one cloud Software
      </h2>
      <div className="flex basis-0 flex-wrap lg:flex-nowrap lg:gap-10 gap-16 max-w-full md:max-w-[50%] lg:max-w-full">
        <div
          className={`relative lg:flex-1 rounded-md border-[1px] border-solid p-8 lg:px-10 lg:py-10 transition duration-150 ease-linear hover:translate-y-[-1rem] ${
            props.darkMode
              ? "bg-[#1f2937] border-gray-600"
              : "bg-white border-gray-100 drop-shadow-2xl"
          }`}
        >
          <h2 className="text-lg lg:text-2xl font-semibold mb-2">
            Responsive design{" "}
          </h2>
          <p className="text-xs lg:text-md font-medium">
            Webilow ensures your website looks and functions flawlessly on any
            device with our responsive design expertise. Engage users seamlessly
            across desktop, tablet, and mobile devices for an optimal user
            experience.
          </p>
          <BsCircleFill className="absolute text-6xl right-0 left-0 top-[-40px] lg:top-[-30px] text-center m-auto text-blue-600" />
          <BsFillPhoneFill className="absolute text-4xl right-0 left-0 top-[-30px] lg:top-[-20px] text-center m-auto text-white " />
        </div>
        <div
          className={`relative lg:flex-1 rounded-md border-[1px] border-solid p-8 lg:px-10 lg:py-10 transition duration-150 ease-linear hover:translate-y-[-1rem] ${
            props.darkMode
              ? "bg-[#1f2937] border-gray-600"
              : "bg-white border-gray-100 drop-shadow-2xl"
          }`}
        >
          <h2 className="text-lg lg:text-2xl font-semibold mb-2">
            UI/UX Design
          </h2>
          <p className="text-xs lg:text-md font-medium">
            At Webilow, we specialize in creating visually stunning and
            user-friendly interfaces, enhancing overall user experience with
            intuitive navigation, engaging interactions, and appealing
            aesthetics.
          </p>
          <BsCircleFill className="absolute text-6xl right-0 left-0 top-[-40px] lg:top-[-30px] text-center m-auto text-blue-600" />
          <TbScreenShare className="absolute text-4xl right-0 left-0 top-[-30px] lg:top-[-20px] text-center m-auto text-white " />
        </div>
        <div
          className={`relative lg:flex-1 rounded-md border-[1px] border-solid p-8 lg:px-10 lg:py-10 transition duration-150 ease-linear hover:translate-y-[-1rem] ${
            props.darkMode
              ? "bg-[#1f2937] border-gray-600"
              : "bg-white border-gray-100 drop-shadow-2xl"
          }`}
        >
          <h2 className="text-lg lg:text-2xl font-semibold mb-2">
            Search Engine Optimization{" "}
          </h2>
          <p className="text-xs lg:text-md font-medium">
            Drive organic traffic and enhance online visibility with
            Webilow&apos;s SEO services. Our experts optimize your website with
            proven strategies, improving search engine rankings, attracting
            valuable leads, and increasing organic traffic.
          </p>
          <BsCircleFill className="absolute text-6xl right-0 left-0 top-[-40px] lg:top-[-30px] text-center m-auto text-blue-600" />
          <FaSearchengin className="absolute text-4xl right-0 left-0 top-[-30px] lg:top-[-20px] text-center m-auto text-white " />
        </div>
      </div>
    </section>
  );
}

export default Features;
