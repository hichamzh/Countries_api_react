import React from "react";
import "../styles/card.css";

const Card = ({ country }) => {
  return (
    <>
      <div className="w-[200px] card hover:scale-110 transition-all ">
        <img
          src={country.flags.svg}
          alt=""
          className="w-full h-full rounded-xl "
        />
        <p>{country.name.common}</p>
      </div>
    </>
  );
};

export default Card;
