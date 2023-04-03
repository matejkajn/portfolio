import React from "react";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="p-4 dark:bg-[#1a2338] justify-center text-center dark:text-[#dde7ff]">
      <motion.h2 className="text-5xl font-semibold leading-tight text-primary">
        About
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring" }}
        className="lg:w-2/3 w-[90%] text-lg p-5 text-justify leading-loose mx-auto"
      >
        Hey, my name is <b>Jonáš Matějka!</b> I am college student of master’s
        study program Knowledge and Web Technologies at Prague University of
        Economics and Business. I really enjoy modern web technologies
        especially Frontend like <b>Reactjs</b> in which I am currently
        improving my skills to be able work with it in future. I already have
        some experience in web development. I worked 1 year and 8 months as a
        Fullstack web developer. I coded mainly in OOP PHP but I had to use
        JavaScript, HTML and CSS as well. As for hobbies, I love sports. I like
        cycling, playing discgolf with my friends and lately I started going to
        the gym.
      </motion.div>
    </section>
  );
};

export default About;
