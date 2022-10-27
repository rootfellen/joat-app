import React, { useState } from "react";
import {
  EAddressContainer,
  EAddressTitle,
  EAddressSubTitle,
} from "./EAddressElements";

const EAddress = ({ companies }) => {
  const [employer, contractor] = companies;

  return (
    <EAddressContainer>
      <EAddressTitle>{employer.title}</EAddressTitle>
      <EAddressSubTitle>{employer.address}</EAddressSubTitle>
      <EAddressSubTitle>{employer.state}</EAddressSubTitle>
    </EAddressContainer>
  );
};

export default EAddress;
