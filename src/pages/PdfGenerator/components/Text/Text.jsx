import React from "react";
import { TextContainer } from "./TextElements";

const Text = ({ value }) => {
  return (
    <>
      <TextContainer>{value}</TextContainer>
    </>
  );
};

export default Text;
