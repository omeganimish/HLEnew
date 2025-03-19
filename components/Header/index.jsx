"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import "./style.css";

const Header = () => {
  const [barVisible, setBarVisible] = useState(false);
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (scrollRef.current > currentScroll) {
        setBarVisible(true);
      } else {
        setBarVisible(false);
      }

      scrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        barVisible ? "sticky" : "relative"
      }  bg-[#ffffff99] top-0 z-10 shadow-[0px_0px_1px_1px_#cbd5c9] py-2 backdrop-blur-md`}
    >
      <Navbar />
    </header>
  );
};

export default Header;
