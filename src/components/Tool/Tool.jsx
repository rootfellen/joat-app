import React from "react";
import { Container, Description, Icon, Title } from "./ToolElements";

const Tool = (props) => {
  console.log(props);
  return (
    <>
      <Container styleProp={props.styleProp}>
        <Icon src={props.icon} alt="App-Icon" />
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </Container>
    </>
  );
};

export default Tool;
