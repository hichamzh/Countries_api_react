import React from "react";
import Navbar from "../components/Navbar";
import Countries from "../components/Countries";

const Home = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-center text-3xl my-5">Home</h1>
      <Countries />
    </>
  );
};

export default Home;
