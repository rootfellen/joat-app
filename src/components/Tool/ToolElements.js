import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 7px;
  box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.03);
  background: ${({ styleProp }) =>
    styleProp == "saloUI"
      ? "linear-gradient(-90deg, #7A39F5 20%, #2E53F5 100%)"
      : ""};
  color: #fff;
  grid-area: ${({ styleProp }) =>
    styleProp == "passwordGenerator"
      ? "passwordGenerator"
      : styleProp == "saloUI"
      ? "saloUI"
      : styleProp == "pdfGenerator"
      ? "pdfGenerator"
      : styleProp == "qrGenerator"
      ? "qrGenerator"
      : styleProp == "regExHelper"
      ? "regExHelper"
      : styleProp == "colorGenerator"
      ? "colorGenerator"
      : styleProp == "voteCreator"
      ? "voteCreator"
      : ""};
`;
