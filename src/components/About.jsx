/* eslint-disable react/prop-types */
import { AiFillCheckCircle } from "react-icons/ai";

function About(props) {
  return (
    <section className="h-auto lg:h-screen flex justify-center items-center flex-col max-w-screen-xl m-auto px-2 lg:px-0 about">
      <h1 className="mb-0 lg:mb-24 text-xl lg:text-6xl font-bold">
        Who are we?
      </h1>
      <div className="flex flex-col text-left lg:text-left lg:flex-row justify-center items-center mt-2 lg:mt-5">
        <div className="max-w-full lg:max-w-[50%]">
          <h2 className="text-md text-center lg:text-4xl font-bold mb-2 lg:mb-6">
            Overview
          </h2>
          <p
            className={`mb-4 lg:mb-10 font-normal text-xs lg:text-lg ${
              props.darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Since its inception, Webilow has been at the forefront of web
            development, offering innovative solutions to businesses globally.
            With a focus on delivering exceptional digital experiences,
            Webilow&apos;s expert team leverages cutting-edge technologies to
            create robust and scalable web solutions. From responsive design to
            seamless payment integration, Webilow empowers companies to unlock
            their online potential and drive growth in the ever-evolving digital
            landscape.
          </p>
          <ul className="flex flex-col text-left mb-4 lg:mb-0">
            <ul className="flex">
              <li className="flex-1 p-1 lg:p-[10px] text-xs lg:text-lg font-semibold">
                <AiFillCheckCircle className="inline-block text-green-500 mt-[-4px]" />{" "}
                Responsive design
              </li>
              <li className="flex-1 p-1 lg:p-[10px] text-xs lg:text-lg font-semibold">
                <AiFillCheckCircle className="inline-block text-green-500 mt-[-4px]" />{" "}
                UX/UI design
              </li>
            </ul>
            <ul className="flex">
              <li className="flex-1 p-1 lg:p-[10px] text-xs lg:text-lg font-semibold">
                <AiFillCheckCircle className="inline-block text-green-500 mt-[-4px]" />{" "}
                Brand development
              </li>
              <li className="flex-1 p-1 lg:p-[10px] text-xs lg:text-lg font-semibold">
                <AiFillCheckCircle className="inline-block text-green-500 mt-[-4px]" />{" "}
                Front-end development
              </li>
            </ul>
            <ul className="flex">
              <li className="flex-1 p-1 lg:p-[10px] text-xs lg:text-lg font-semibold">
                <AiFillCheckCircle className="inline-block text-green-500 mt-[-4px]" />{" "}
                Web Maintenance
              </li>
              <li className="flex-1 p-1 lg:p-[10px] text-xs lg:text-lg font-semibold">
                <AiFillCheckCircle className="inline-block text-green-500 mt-[-4px]" />{" "}
                Support
              </li>
            </ul>

            <ul className="flex">
              <li className="flex-1 p-1 lg:p-[10px] text-xs lg:text-lg font-semibold">
                <AiFillCheckCircle className="inline-block text-green-500 mt-[-4px]" />{" "}
                Graphic design
              </li>
              <li className="flex-1 p-1 lg:p-[10px] text-xs lg:text-lg font-semibold">
                <AiFillCheckCircle className="inline-block text-green-500 mt-[-4px]" />{" "}
                SEO
              </li>
            </ul>
          </ul>
        </div>
        <div className="flex items-center flex-col max-w-full lg:max-w-[50%] lg:ml-16">
          <h2 className="text-md lg:text-4xl font-bold mb-2 lg:mb-6">
            Background
          </h2>
          <p
            className={`mb-4 lg:mb-5 font-normal  text-xs lg:text-lg ${
              props.darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Founded in 2023, Webilow quickly established itself as a leading
            force in the web development industry. With a strategic focus on
            delivering professional digital solutions, Webilow emerged as a
            strong and forward-thinking brand from the very beginning, catering
            to businesses seeking top-notch web development services. Webilow
            has rapidly become a renowned and forward-thinking web development
            company, offering professional digital solutions to businesses
            seeking cutting-edge online experiences.
          </p>
          <h2 className="text-md lg:text-4xl font-bold mb-2 lg:mb-6">
            The challenge
          </h2>
          <p
            className={`font-normal text-xs lg:text-lg ${
              props.darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Webilow faced the challenge of establishing its new brand identity
            quickly, as its website would serve as a key representation of its
            future marketing initiatives. With a tight timeline and a management
            team in the process of transitioning the brand, collaborative
            efforts were essential to navigate the shift from the company&apos;s
            previous state to its desired direction.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
