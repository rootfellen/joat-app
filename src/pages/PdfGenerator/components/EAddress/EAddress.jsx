import React, { useState } from "react";
import {
  EAddressContainer,
  SubTitleInput,
  TitleInput,
} from "./EAddressElements";

const EAddress = () => {
  const [value, setValue] = useState({
    title: "Sal-to International LLC",
    address: "65139 Rough St. Oakland",
    state: "California 395213",
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
    <EAddressContainer>
      <TitleInput name="title" value={value.title} onChange={handleChange} />
      <SubTitleInput
        name="address"
        value={value.address}
        onChange={handleChange}
      />
      <SubTitleInput name="state" value={value.state} onChange={handleChange} />
    </EAddressContainer>
  );
};

export default EAddress;
