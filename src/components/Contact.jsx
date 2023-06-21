/* eslint-disable react/prop-types */

function Contact(props) {
  return (
    <section className="h-[80vh] max-w-screen-xl m-auto contact">
      <h1 className="text-center sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
        Contact us
      </h1>
      <form
        className={`p-20 rounded-lg ${
          props.darkMode ? "bg-[#1f2937]" : "bg-white drop-shadow-2xl"
        }`}
      >
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
              props.darkMode ? "text-white" : "text-black"
            }`}
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
              props.darkMode ? "text-white" : "text-black"
            }`}
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number (optional)
          </label>
        </div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:outline-none focus:border-blue-500 ${
            props.darkMode
              ? "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              : "bg-gray-50 border-gray-300 placeholder-gray-500 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
          }`}
          placeholder="Write your message here..."
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md mt-8 py-2 text-xl  hover:bg-blue-800 hover:border-blue-800 transition duration-200 active:bg-blue-600 active:border-blue-600 contact"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
