import React, { useContext, useState } from "react";
import { Context } from "../../PdfGenerator";
import CAddress from "../CAddress/CAddress";
import EAddress from "../EAddress/EAddress";
import Postage from "../Postage/Postage";
import Signature from "../Signature/Signature";
import Text from "../Text/Text";
import Title from "../Title/Title";

import { Wrapper, Button, Preview } from "./OutputElements";

const Output = ({ generatePDF, title, companies }) => {
  const { data, text } = useContext(Context);

  console.log(title);
  return (
    <Wrapper>
      <Preview>
        <Postage />
        <EAddress companies={companies} />
        <CAddress companies={companies} />
        <Title value={title} />
        <Text value={text} />
        <Signature />
      </Preview>
      <Button onClick={generatePDF}>Generate</Button>
    </Wrapper>
  );
};

export default Output;
