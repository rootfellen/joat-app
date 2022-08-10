import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  transition: 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  cursor: pointer;
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
  :hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

export const Icon = styled.img`
  max-width: 48px;
  max-height: 48px;
`;

export const Description = styled.p`
  max-width: 85%;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.2rem;
`;
