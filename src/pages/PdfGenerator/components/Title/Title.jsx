import React, { useState } from "react";
import { TitleContainer, TemplateTitle } from "./TitleElements";

const Title = ({ value }) => {
  return (
    <TitleContainer>
      <TemplateTitle>{value}</TemplateTitle>
    </TitleContainer>
  );
};

export default Title;
