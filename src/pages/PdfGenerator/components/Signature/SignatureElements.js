import styled from "styled-components";

export const SignatureContainer = styled.div`
  width: 100%;
  grid-area: signature;
  align-self: center;
  margin-left: 2rem;
  span {
    font-size: 0.5rem;
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
`;

export const SignatureInput = styled.input`
  margin: 0;
  width: 100%;
  font-size: 0.75rem;
  border: none;
  border-bottom: 1px solid #9da191;
  &:focus {
    outline: none;
  }
`;
