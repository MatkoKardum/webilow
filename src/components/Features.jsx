import { IoDocumentsSharp } from "react-icons/io5";
import { BsCircleFill } from "react-icons/bs";

function Features() {
  return (
    <section className="h-[100vh] flex justify-center items-center flex-col text-center max-w-screen-xl m-auto features">
      <h2 className="text-center text-6xl mb-28 font-bold">
        All in one cloud <span className="text-blue-500">Software</span>
      </h2>
      <div className="flex gap-10">
        <div className="relative bg-[#1f2937] w-auto rounded-md border-[1px] border-solid border-gray-600 px-10 py-10 transition duration-150 ease-linear hover:translate-y-[-1rem]">
          <h2 className="text-2xl font-semibold mb-2">
            Online billing, Invoicing & Contracts
          </h2>
          <p className="text-md font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            totam perferendis iure soluta magnam fuga dolor neque. Architecto,
            magni error.
          </p>
          <BsCircleFill className="absolute text-6xl right-0 left-0 top-[-30px] text-center m-auto text-blue-600" />
          <IoDocumentsSharp className="absolute text-4xl right-0 left-0 top-[-20px] text-center m-auto text-white " />
        </div>
        <div className="relative bg-[#1f2937] w-auto rounded-md border-[1px] border-solid border-gray-600 px-10 py-10  transition duration-150 ease-linear hover:translate-y-[-1rem]">
          <h2 className="text-2xl font-semibold mb-2">
            Online billing, Invoicing & Contracts
          </h2>
          <p className="text-md font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            totam perferendis iure soluta magnam fuga dolor neque. Architecto,
            magni error.
          </p>
          <BsCircleFill className="absolute text-6xl right-0 left-0 top-[-30px] text-center m-auto text-blue-600" />
          <IoDocumentsSharp className="absolute text-4xl right-0 left-0 top-[-20px] text-center m-auto text-white " />
        </div>
        <div className="relative bg-[#1f2937] w-auto rounded-md border-[1px] border-solid border-gray-600 px-10 py-10  transition duration-150 ease-linear hover:translate-y-[-1rem]">
          <h2 className="text-2xl font-semibold mb-2">
            Online billing, Invoicing & Contracts
          </h2>
          <p className="text-md font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            totam perferendis iure soluta magnam fuga dolor neque. Architecto,
            magni error.
          </p>
          <BsCircleFill className="absolute text-6xl right-0 left-0 top-[-30px] text-center m-auto text-blue-600" />
          <IoDocumentsSharp className="absolute text-4xl right-0 left-0 top-[-20px] text-center m-auto text-white " />
        </div>
      </div>
    </section>
  );
}

export default Features;
