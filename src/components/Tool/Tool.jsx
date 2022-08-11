import React from "react";
import { Container, Description, Icon, Title } from "./ToolElements";

const Tool = (props) => {
  return (
    <>
      <Container
        to={
          props.styleProp == "passwordGenerator"
            ? "passwordGenerator"
            : props.styleProp == "pdfGenerator"
            ? "pdfGenerator"
            : props.styleProp == "saloUI"
            ? "salo-ui"
            : "/"
        }
        styleprop={props.styleProp}
      >
        <Icon src={props.icon} alt="App-Icon" />
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </Container>
    </>
  );
};

export default Tool;
