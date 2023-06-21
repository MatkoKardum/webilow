/* eslint-disable react/prop-types */
import { IoDocumentsSharp } from "react-icons/io5";
import { BsCircleFill } from "react-icons/bs";

function Features(props) {
  return (
    <section className="h-[100vh] flex justify-center items-center flex-col text-center max-w-screen-xl m-auto features">
      <h2 className="text-center text-6xl mb-28 font-bold">
        All in one cloud Software
      </h2>
      <div className="flex basis-0 gap-10">
        <div
          className={`relative flex-1 rounded-md border-[1px] border-solid px-10 py-10 transition duration-150 ease-linear hover:translate-y-[-1rem] ${
            props.darkMode
              ? "bg-[#1f2937] border-gray-600"
              : "bg-white border-gray-100 drop-shadow-2xl"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-2">Responsive design </h2>
          <p className="text-md font-medium">
            Webilow ensures your website looks and functions flawlessly on any
            device with our responsive design expertise. Engage users seamlessly
            across desktop, tablet, and mobile devices for an optimal user
            experience.
          </p>
          <BsCircleFill className="absolute text-6xl right-0 left-0 top-[-30px] text-center m-auto text-blue-600" />
          <IoDocumentsSharp className="absolute text-4xl right-0 left-0 top-[-20px] text-center m-auto text-white " />
        </div>
        <div
          className={`relative flex-1 rounded-md border-[1px] border-solid px-10 py-10 transition duration-150 ease-linear hover:translate-y-[-1rem] ${
            props.darkMode
              ? "bg-[#1f2937] border-gray-600"
              : "bg-white border-gray-100 drop-shadow-2xl"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-2">UI/UX Design</h2>
          <p className="text-md font-medium">
            At Webilow, we specialize in creating visually stunning and
            user-friendly interfaces, enhancing overall user experience with
            intuitive navigation, engaging interactions, and appealing
            aesthetics.
          </p>
          <BsCircleFill className="absolute text-6xl right-0 left-0 top-[-30px] text-center m-auto text-blue-600" />
          <IoDocumentsSharp className="absolute text-4xl right-0 left-0 top-[-20px] text-center m-auto text-white " />
        </div>
        <div
          className={`relative flex-1 rounded-md border-[1px] border-solid px-10 py-10 transition duration-150 ease-linear hover:translate-y-[-1rem] ${
            props.darkMode
              ? "bg-[#1f2937] border-gray-600"
              : "bg-white border-gray-100 drop-shadow-2xl"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-2">
            Search Engine Optimization{" "}
          </h2>
          <p className="text-md font-medium">
            Drive organic traffic and enhance online visibility with
            Webilow&apos;s SEO services. Our experts optimize your website with
            proven strategies, improving search engine rankings, attracting
            valuable leads, and increasing organic traffic.
          </p>
          <BsCircleFill className="absolute text-6xl right-0 left-0 top-[-30px] text-center m-auto text-blue-600" />
          <IoDocumentsSharp className="absolute text-4xl right-0 left-0 top-[-20px] text-center m-auto text-white " />
        </div>
      </div>
    </section>
  );
}

export default Features;
