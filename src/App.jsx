import { useEffect, useState } from "react";

import { BsFillMoonFill } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";

import { motion } from "framer-motion";

import Homepage from "./components/Homepage";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import resume from "../src/assets/matejka_cv_cz_en.pdf";

function App() {
  const getDarkMode = () => {
    return JSON.parse(localStorage.getItem("darkMode") || false);
  };

  const [darkMode, useSetDarkMode] = useState(getDarkMode());

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <main className={darkMode ? "dark" : ""}>
      <section className="h-screen dark:bg-[#1a2338] justify-center text-center dark:text-[#dde7ff]">
        <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-3xl">
          <motion.a
            whileHover={{ scale: 1.1 }}
            className="flex items-center font-bold rounded-full dark:bg-[#1a2338] dark:text-[#dde7ff]"
            href={resume}
            target="_blank"
          >
            <span className="m-2 lg:block hidden">Resume</span>
            <FaFileDownload />
          </motion.a>
          <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
            <BsFillMoonFill
              size={30}
              onClick={() => useSetDarkMode(!darkMode)}
            />
          </motion.div>
        </nav>
        <Homepage />
      </section>
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
