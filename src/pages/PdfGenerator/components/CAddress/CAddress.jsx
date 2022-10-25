import React, { useState } from "react";
import { CAddressContainer } from "./CAddressElements";
import { TitleInput, SubTitleInput } from "../EAddress/EAddressElements";

const CAddress = () => {
  const [value, setValue] = useState({
    title: "VCare Ltd",
    address: "33139 McBean Blvd. Valencia",
    state: "California 91355",
  });
  const handleChange = (e) => {
    const { name } = e.target;
    setValue((prevState) => {
      return {
        ...prevState,
        [name]: e.target.value,
      };
    });
  };
  return (
    <CAddressContainer>
      <TitleInput name="title" value={value.title} onChange={handleChange} />
      <SubTitleInput
        name="address"
        value={value.address}
        onChange={handleChange}
      />
      <SubTitleInput name="state" value={value.state} onChange={handleChange} />
    </CAddressContainer>
  );
};

export default CAddress;
