import React from "react";

import logo from "/src/assets/me.png";

import { motion } from "framer-motion";

import { BsGithub, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const socialListVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 1.8, staggerChildren: 0.2 },
  },
};

const socialItemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {},
  },
};

const Homepage = () => {
  return (
    <div className="justify-center">
      <div className="my-6 flex">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            ease: [0, 0.7, 0.2, 1],
            scale: {
              type: "spring",
              damping: 8,
              stiffness: 100,
            },
          }}
          className="mx-auto mb-8"
          src={logo}
          width={325}
          height={325}
        />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 1,
          type: "spring",
          stiffness: 160,
        }}
        className="my-2 font-semibold leading-tight text-primary lg:text-6xl text-4xl"
      >
        Jonáš Matějka
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 1,
          type: "spring",
          stiffness: 160,
        }}
        className="my-4 lg:text-2xl text-lg w-2/3 mx-auto"
      >
        Frontend developer & student of Knowledge and Web Technologies
      </motion.p>
      <motion.ul
        variants={socialListVariants}
        initial="hidden"
        animate="visible"
        className=" my-4 flex justify-center"
      >
        <motion.li
          variants={socialItemVariants}
          whileHover={{
            scale: 1.3,
            transition: { type: "spring", duration: 0.5 },
          }}
          className="m-3 p-4 cursor-pointer"
        >
          <a href="tel:+420722528408">
            <BsFillTelephoneFill size={40} />
          </a>
        </motion.li>
        <motion.li
          variants={socialItemVariants}
          whileHover={{
            scale: 1.3,
            transition: { type: "spring", duration: 0.5 },
          }}
          className="m-3 p-4 cursor-pointer"
        >
          <a href="mailto:matejka.jn@gmail.com">
            <MdEmail size={40} />
          </a>
        </motion.li>
        <motion.li
          variants={socialItemVariants}
          whileHover={{
            scale: 1.3,
            transition: { type: "spring", duration: 0.5 },
          }}
          className="m-3 p-4 cursor-pointer"
        >
          <a
            href="https://www.linkedin.com/in/jon%C3%A1%C5%A1-mat%C4%9Bjka-20994024b/"
            target="_blank"
          >
            <BsLinkedin size={40} />
          </a>
        </motion.li>
        <motion.li
          variants={socialItemVariants}
          whileHover={{
            scale: 1.3,
            transition: { type: "spring", duration: 0.5 },
          }}
          className="m-3 p-4 cursor-pointer"
        >
          <a href="https://github.com/matejkajn" target="_blank">
            <BsGithub size={40} />
          </a>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Homepage;
