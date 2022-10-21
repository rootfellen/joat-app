import React from "react";
import { Wrapper, Button } from "./OutputElements";

const Output = ({ generatePDF }) => {
  return (
    <Wrapper>
      <Button onClick={generatePDF}>Generate</Button>
    </Wrapper>
  );
};

export default Output;
