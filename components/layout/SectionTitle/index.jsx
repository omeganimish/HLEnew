import React from "react";

const SectionTitle = ({ text, className }) => {
  return (
    <h4
      className={`${
        className ? className : ""
      } text-[26px] 2xl:text-[36px] text-black leading-[36px] 2xl:leading-[40px] font-semibold`}
    >
      {text}
    </h4>
  );
};

export default SectionTitle;
