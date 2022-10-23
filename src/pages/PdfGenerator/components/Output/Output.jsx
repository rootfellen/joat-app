import React, { useContext } from "react";
import { TextContext } from "../../PdfGenerator";
import CAddress from "../CAddress/CAddress";
import EAddress from "../EAddress/EAddress";
import Postage from "../Postage/Postage";
import Signature from "../Signature/Signature";
import Text from "../Text/Text";
import Title from "../Title/Title";

import { Wrapper, Button, Preview } from "./OutputElements";

const Output = ({ generatePDF }) => {
  const content = useContext(TextContext);
  return (
    <Wrapper>
      <Preview>
        <Postage />
        <EAddress />
        <CAddress />
        <Title />
        <Text />
        <Signature />
      </Preview>
      <Button onClick={generatePDF}>Generate</Button>
    </Wrapper>
  );
};

export default Output;
