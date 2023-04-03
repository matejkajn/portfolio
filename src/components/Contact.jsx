import React from "react";

import { BsGithub, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { motion } from "framer-motion";

import resumecz from "../assets/matejka_cv.pdf";
import resumeen from "../assets/matejka_cv_en.pdf";

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.2,
      ease: [0, 0.7, 0.2, 1],
      scale: {
        type: "spring",
        damping: 8,
        stiffness: 100,
      },
    },
  },
  hover: { scale: 1.1 },
};

const Contact = () => {
  return (
    <section className="p-4 dark:bg-[#1a2338] justify-center text-center dark:text-[#dde7ff]">
      <motion.h2 className="text-5xl my- font-semibold leading-tight text-primary">
        Contact
      </motion.h2>
      <div className="md:w-1/2 w-[80%] lg:flex mx-auto justify-between">
        <motion.a
          variants={buttonVariants}
          initial="hidden"
          whileHover="hover"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex xl:text-4xl lg:text-2xl text-xl justify-center items-center font-bold rounded-full dark:bg-[#1a2338] dark:text-[#dde7ff] p-4 m-6 shadow-lg shadow-[#1a2338] dark:shadow-[#dde7ff]"
          href={resumecz}
          target="_blank"
        >
          <span className="m-2">Resume CZ</span>
          <FaFileDownload />
        </motion.a>
        <motion.a
          variants={buttonVariants}
          initial="hidden"
          whileHover="hover"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex xl:text-4xl lg:text-2xl text-xl justify-center items-center font-bold rounded-full dark:bg-[#1a2338] dark:text-[#dde7ff] p-4 m-6 shadow-lg shadow-[#1a2338] dark:shadow-[#dde7ff]"
          href={resumeen}
          target="_blank"
        >
          <span className="m-2">Resume EN</span>
          <FaFileDownload />
        </motion.a>
      </div>
      <ul className=" my-10 justify-center xl:flex">
        <li className="p-4 m-8">
          <BsFillTelephoneFill size={60} className="mx-auto my-2" />
          <a className="font-bold text-lg" href="tel:+420722528408">
            +420 722 528 408
          </a>
        </li>
        <li className="p-4 m-8">
          <MdEmail size={60} className="mx-auto my-2" />
          <a className="font-bold text-lg" href="mailto:matejka.jn@gmail.com">
            matejka.jn@gmail.com
          </a>
        </li>
        <li className="p-4 m-8">
          <BsLinkedin size={60} className="mx-auto my-2" />
          <a
            className="font-bold text-lg"
            href="https://www.linkedin.com/in/jon%C3%A1%C5%A1-mat%C4%9Bjka-20994024b/"
            target="_blank"
          >
            linkedin.com/in/jonáš-matějka-20994024b
          </a>
        </li>
        <li className="p-4 m-8">
          <BsGithub size={60} className="mx-auto my-2" />
          <a
            className="font-bold text-lg"
            href="https://github.com/matejkajn"
            target="_blank"
          >
            github.com/matejkajn
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
