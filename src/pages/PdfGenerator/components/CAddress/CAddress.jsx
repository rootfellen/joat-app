import React, { useState } from "react";
import {
  CAddressContainer,
  CAddressTitle,
  CAddressSubTitle,
} from "./CAddressElements";

const CAddress = ({ companies }) => {
  const [employer, contractor] = companies;
  return (
    <CAddressContainer>
      <CAddressTitle>{contractor.title}</CAddressTitle>
      <CAddressSubTitle>{contractor.address}</CAddressSubTitle>
      <CAddressSubTitle>{contractor.state}</CAddressSubTitle>
    </CAddressContainer>
  );
};

export default CAddress;
