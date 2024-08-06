import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const CTAbutton = ({ text, className, link }) => {
  return (
    <Link
      href={link}
      className={`${
        className ? className : ""
      }bg-colorRedLight text-white w-fit flex flex-row text-base group`}
    >
      <span className="font-semibold relative py-2 px-4 border-2 border-colorRedLight flex items-center group-hover:text-colorRed z-[2] transition">
        {text}

        <span className="bg-white absolute w-0 h-full inset-0 group-hover:w-full transition-all z-[-1] duration-300 ease-linear"></span>
      </span>

      <span className="bg-colorRed py-2 px-2 flex items-center text-xl">
        <FaArrowRightLong />
      </span>
    </Link>
  );
};

export default CTAbutton;
