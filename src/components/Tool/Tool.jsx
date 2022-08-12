import React from "react";
import { Container, Description, Icon, Title } from "./ToolElements";

const Tool = (props) => {
  return (
    <>
      <Container
        to={
          props.styleProp == "passwordGenerator"
            ? "passwordgenerator"
            : props.styleProp == "pdfGenerator"
            ? "pdfgenerator"
            : props.styleProp == "saloUI"
            ? "salo-ui"
            : props.styleProp == "qrGenerator"
            ? "qrgenerator"
            : props.styleProp == "regExHelper"
            ? "regexhelper"
            : props.styleProp == "colorGenerator"
            ? "colorgenerator"
            : props.styleProp == "voteCreator"
            ? "votecreator"
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
