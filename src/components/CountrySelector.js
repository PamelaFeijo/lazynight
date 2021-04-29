import React, { useState, useMemo } from "react";
import countryList from "react-select-country-list";

function CountrySelector() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const countries = options.map((country) => country.label);

  console.log(countries);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <select options={countries} value={value} onChange={changeHandler}></select>
  );
}

export default CountrySelector;
