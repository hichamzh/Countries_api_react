import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Button, Radio } from "@material-tailwind/react";

const Countries = () => {
  const [dataCountries, setDataCountries] = useState([]);
  const [countryValue, setCountryValue] = useState(10);
  const [selectRadio, setSelectRadio] = useState("");
  const continents = ["Africa", "Europe", "America", "Asia", "Oceania"];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        setDataCountries(data);
      } catch (error) {
        console.error("erreur lors de l'api a l'api (catch)" + error);
      }
    };
    console.log(dataCountries);
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full mx-auto flex flex-col justify-center items-center gap-9">
        <p className="text-xl">{countryValue}</p>
        <input
          className="w-1/2"
          type="range"
          step={1}
          defaultValue={countryValue}
          max={dataCountries.length}
          onChange={(e) => setCountryValue(e.target.value)}
        />
        <div className="grid grid-cols-2 place-items-center w-full md:flex justify-center items-center gap-5">
          {continents.map((continent) => (
            <li className=" list-none flex gap-3 items-center" key={continent}>
              <Radio
                type="radio"
                name="continentName"
                color="amber"
                id={continent}
                onChange={(e) => setSelectRadio(e.target.id)}
                checked={selectRadio === continent}
              />
              <label htmlFor={continent}>{continent}</label>
            </li>
          ))}
        </div>
        <Button onClick={() => setSelectRadio("")}>All Countries</Button>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-7 w-full mx-auto p-10 md:grid-cols-2 lg:grid-cols-3 lg:w-[70%]">
        {dataCountries &&
          dataCountries
            .filter((country) => country.continents[0].includes(selectRadio))
            .slice(0, countryValue)
            .map((country) => (
              <Card country={country} key={country.name.common} />
            ))}
      </div>
    </>
  );
};

export default Countries;
