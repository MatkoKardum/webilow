import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
// import Projects from "./components/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`overflow-x-hidden p-4 ${
        darkMode ? "bg-[#111827] text-white" : "bg-white text-black"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Technologies />
      <Contact />
      <Footer />
      {/* <Projects /> */}
    </div>
  );
}

export default App;
