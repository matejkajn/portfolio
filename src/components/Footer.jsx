import React from "react";

const Footer = () => {
  return (
    <div
      className="relative w-full rounded-t-[100%] h-[120px] bg-gradient-to-b from-[#252850] via-[#1a2338] to-black
    dark:bg-[#1a2338] dark:rounded-t-[0%] dark:bg-none"
    >
      <div className="text-white md:text-xl text-md w-2/3 mx-auto absolute inset-x-0 bottom-10 text-center dark:text-[#dde7ff]">
        Copyright © 2023 {"</>"} Designed & created by <b>Jonáš Matějka</b>
      </div>
    </div>
  );
};

export default Footer;
