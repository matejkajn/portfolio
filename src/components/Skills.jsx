import React from "react";
import { motion } from "framer-motion";

import reactLogo from "../assets/logos/react-logo.png";
import javascriptLogo from "../assets/logos/javascript-logo.png";
import githubLogo from "../assets/logos/github-logo.png";
import htmlLogo from "../assets/logos/html-logo.png";
import cssLogo from "../assets/logos/css-logo.png";
import tailwindLogo from "../assets/logos/tailwind-logo.png";
import phpLogo from "../assets/logos/php-logo.png";
import cLogo from "../assets/logos/c-logo.png";
import javaLogo from "../assets/logos/java-logo.png";

const skillListVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 1.8, staggerChildren: 0.2 },
  },
};

const variantsSkill = {
  hidden: { opacity: 0, x: -20 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.1 * index,
    },
  }),
};

const Skills = () => {
  return (
    <section className="p-4 dark:bg-[#1a2338] justify-center text-center dark:text-[#dde7ff]">
      <motion.h2 className="text-5xl font-semibold leading-tight text-primary">
        Skills
      </motion.h2>
      <div className="justify-center">
        <motion.ul
          variants={skillListVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.4, delay: 0.2 }}
          className="my-6 mx-auto lg:w-2/3 w-[90%] grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        >
          <motion.li
            variants={variantsSkill}
            custom={1}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="group m-4 p-4 px-6 rounded-full dark:border-[#dde7ff] border-[#1a2338] border-2 flex items-center justify-between"
          >
            <img
              width={50}
              height={50}
              src={reactLogo}
              className="group-hover:opacity-0 ease-in-out duration-300"
            />
            <span className="w-[80%] fixed group-hover:opacity-100 opacity-0 duration-300">
              Basic knowledge (beginner), currently studying.
            </span>
            <span className="font-bold uppercase group-hover:opacity-0 ease-in-out duration-300">
              React
            </span>
          </motion.li>
          <motion.li
            variants={variantsSkill}
            custom={2}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="group m-4 p-4 px-6 rounded-full dark:border-[#dde7ff] border-[#1a2338] border-2 flex items-center justify-between"
          >
            <img
              width={50}
              height={50}
              src={javascriptLogo}
              className="group-hover:opacity-0 ease-in-out duration-300"
            />
            <span className="w-[80%] fixed group-hover:opacity-100 opacity-0 duration-300">
              Intermediate with 1 year, 8 months of practise.
            </span>
            <span className="font-bold uppercase group-hover:opacity-0 ease-in-out duration-300">
              JavaScript
            </span>
          </motion.li>
          <motion.li
            variants={variantsSkill}
            custom={3}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="group m-4 p-4 px-6 rounded-full dark:border-[#dde7ff] border-[#1a2338] border-2 flex items-center justify-between"
          >
            <img
              width={50}
              height={50}
              src={githubLogo}
              className="group-hover:opacity-0 ease-in-out duration-300"
            />
            <span className="w-[80%] fixed group-hover:opacity-100 opacity-0 duration-300">
              Intermediate, several years of use.
            </span>
            <span className="font-bold uppercase group-hover:opacity-0 ease-in-out duration-300">
              GitHub
            </span>
          </motion.li>
          <motion.li
            variants={variantsSkill}
            custom={4}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="group m-4 p-4 px-6 rounded-full dark:border-[#dde7ff] border-[#1a2338] border-2 flex items-center justify-between"
          >
            <img
              width={50}
              height={50}
              src={htmlLogo}
              className="group-hover:opacity-0 ease-in-out duration-300"
            />
            <span className="w-[80%] fixed group-hover:opacity-100 opacity-0 duration-300">
              Intermediate with 1 year, 8 months of practise.
            </span>
            <span className="font-bold uppercase group-hover:opacity-0 ease-in-out duration-300">
              HTML
            </span>
          </motion.li>
          <motion.li
            variants={variantsSkill}
            custom={5}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="group m-4 p-4 px-6 rounded-full dark:border-[#dde7ff] border-[#1a2338] border-2 flex items-center justify-between"
          >
            <img
              width={50}
              height={50}
              src={cssLogo}
              className="group-hover:opacity-0 ease-in-out duration-300"
            />
            <span className="w-[80%] fixed group-hover:opacity-100 opacity-0 duration-300">
              Intermediate with 1 year, 8 months of practise.
            </span>
            <span className="font-bold uppercase group-hover:opacity-0 ease-in-out duration-300">
              CSS
            </span>
          </motion.li>
          <motion.li
            variants={variantsSkill}
            custom={6}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="group m-4 p-4 px-6 rounded-full dark:border-[#dde7ff] border-[#1a2338] border-2 flex items-center justify-between"
          >
            <img
              width={50}
              height={50}
              src={tailwindLogo}
              className="group-hover:opacity-0 ease-in-out duration-300"
            />
            <span className="w-[80%] fixed group-hover:opacity-100 opacity-0 duration-300">
              Basic knowledge (beginner), currently studying.
            </span>
            <span className="font-bold uppercase group-hover:opacity-0 ease-in-out duration-300">
              Tailwind
            </span>
          </motion.li>
          <motion.li
            variants={variantsSkill}
            custom={7}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="group m-4 p-4 px-6 rounded-full dark:border-[#dde7ff] border-[#1a2338] border-2 flex items-center justify-between"
          >
            <img
              width={50}
              height={50}
              src={phpLogo}
              className="group-hover:opacity-0 ease-in-out duration-300"
            />
            <span className="w-[80%] fixed group-hover:opacity-100 opacity-0 duration-300">
              Intermediate with 1 year, 8 months of practise.
            </span>
            <span className="font-bold uppercase group-hover:opacity-0 ease-in-out duration-300">
              PHP
            </span>
          </motion.li>
          <motion.li
            variants={variantsSkill}
            custom={8}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="group m-4 p-4 px-6 rounded-full dark:border-[#dde7ff] border-[#1a2338] border-2 flex items-center justify-between"
          >
            <img
              width={50}
              height={50}
              src={cLogo}
              className="group-hover:opacity-0 ease-in-out duration-300"
            />
            <span className="w-[80%] fixed group-hover:opacity-100 opacity-0 duration-300">
              Window applications (4 years of study ended with graduation).
            </span>
            <span className="font-bold uppercase group-hover:opacity-0 ease-in-out duration-300">
              C#
            </span>
          </motion.li>
          <motion.li
            variants={variantsSkill}
            custom={9}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="group m-4 p-4 px-6 rounded-full dark:border-[#dde7ff] border-[#1a2338] border-2 flex items-center justify-between"
          >
            <img
              width={50}
              height={50}
              src={javaLogo}
              className="group-hover:opacity-0 ease-in-out duration-300"
            />
            <span className="w-[80%] fixed group-hover:opacity-100 opacity-0 duration-300">
              Window applications.
            </span>
            <span className="font-bold uppercase group-hover:opacity-0 ease-in-out duration-300">
              Java
            </span>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
};

export default Skills;
