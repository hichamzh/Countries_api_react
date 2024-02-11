import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Countries from "../components/Countries";

const Home = () => {
  const [visibleButton, setVisibleButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > 100) {
        setVisibleButton(true);
      } else {
        setVisibleButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ScroolTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar />
      <h1 className="text-center text-3xl my-5">Home</h1>
      <Countries />
      <button
        onClick={ScroolTop}
        className={visibleButton ? `block button` : `hidden`}
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default Home;
