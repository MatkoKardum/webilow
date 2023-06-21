/* eslint-disable react/prop-types */
import { AiFillCheckCircle } from "react-icons/ai";

function About(props) {
  return (
    <section className="h-[100vh] flex justify-center items-center flex-col max-w-screen-xl m-auto about">
      <h1 className="mb-24 text-6xl font-bold">Who are we?</h1>
      <div className="flex justify-center mt-5">
        <div className="max-w-[50%]">
          <h2 className="text-4xl font-bold mb-6">Overview</h2>
          <p
            className={`mb-10 font-normal text-lg ${
              props.darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Since 1984, Flowbite has been serving up grab-and-go frozen
            daiquiris from its stores across the U.S. Its signature drinks,
            souvenir cups, and discounted refills have made Flowbite synonymous
            with great music, good vibes, and starting the best party in town.
          </p>
          <ul className="flex flex-col">
            <ul className="flex">
              <li className="flex-1 p-[10px] text-lg font-semibold">
                <AiFillCheckCircle className="inline-block text-green-500 mt-[-4px]" />{" "}
                A/B Testing
              </li>
              <li className="flex-1 p-[10px] text-lg font-semibold">
                <AiFillCheckCircle className="inline-block text-green-500 mt-[-4px]" />{" "}
                UX/UI design
              </li>
            </ul>
            <ul className="flex">
              <li className="flex-1 p-[10px] text-lg font-semibold">
                <AiFillCheckCircle className="inline-block text-green-500 mt-[-4px]" />{" "}
                Brand development
              </li>
              <li className="flex-1 p-[10px] text-lg font-semibold">
                <AiFillCheckCircle className="inline-block text-green-500 mt-[-4px]" />{" "}
                Front-end development
              </li>
            </ul>
            <ul className="flex">
              <li className="flex-1 p-[10px] text-lg font-semibold">
                <AiFillCheckCircle className="inline-block text-green-500 mt-[-4px]" />{" "}
                Craft CMS development
              </li>
              <li className="flex-1 p-[10px] text-lg font-semibold">
                <AiFillCheckCircle className="inline-block text-green-500 mt-[-4px]" />{" "}
                Copywriting
              </li>
            </ul>

            <ul className="flex">
              <li className="flex-1 p-[10px] text-lg font-semibold">
                <AiFillCheckCircle className="inline-block text-green-500 mt-[-4px]" />{" "}
                Graphic design
              </li>
              <li className="flex-1 p-[10px] text-lg font-semibold">
                <AiFillCheckCircle className="inline-block text-green-500 mt-[-4px]" />{" "}
                SEO
              </li>
            </ul>
          </ul>
        </div>
        <div className="flex items-center flex-col max-w-[50%] ml-16">
          <h2 className="text-4xl font-bold mb-6">Background</h2>
          <p
            className={`mb-5 font-normal text-lg ${
              props.darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Come 2021, Flowbite had expanded to over 40 locations. The brand’s
            digital presence existed, but it lacked strategy. Although its
            target market of 21-30 year-olds was as engaged (and as loyal) as
            ever, the brand had outgrown its amateur look of the early {`'00s`}
            and the family-owned business vibes. It needed to show it was a
            strong brand moving in a new direction - and it was heading there
            fast.
          </p>
          <h2 className="text-4xl font-bold mb-6">The challenge</h2>
          <p
            className={`font-normal text-lg ${
              props.darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Flowbite’s new website would set the tone for all future marketing
            initiatives, so the brand needed something to showcase its new
            identity as soon as possible. A tight timeline, paired with the fact
            that the new management team were still exploring how to shift the
            brand from what it used to be to what it needed to be, meant that
            working collaboratively was a must.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
