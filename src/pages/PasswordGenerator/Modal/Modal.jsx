import React from "react";
import { ModalContainer, ModalWrapper } from "./Modal.js";
const Modal = (props) => {
  console.log(props.clipboard.length + "px");
  return (
    <ModalContainer clipboard={props.clipboard.length + "px"}>
      <ModalWrapper>
        <h2>Copied!</h2>
        <span>{props.clipboard}</span>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;
