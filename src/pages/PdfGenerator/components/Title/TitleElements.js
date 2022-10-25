import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 100%;
  grid-area: title;
  align-self: center;
  text-align: center;
  h1 {
    margin: 0;
  }
`;

export const TitleInput = styled.input`
  font-weight: 700;
  text-align: center;
  border: none;
  &:focus {
    outline: none;
  }
`;
