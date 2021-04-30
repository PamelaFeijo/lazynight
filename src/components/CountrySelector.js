import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  console.log(options);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <Select
      className="select"
      options={options}
      value={value}
      onChange={changeHandler}
    />
  );
}

export default CountrySelector;
