import React from "react";
import { Container } from "./ToolElements";

const Tool = (props) => {
  return (
    <>
      <Container styleProp={props.styleProp}>
        {props.title}
        {props.description}
      </Container>
    </>
  );
};

export default Tool;
