import styled from "styled-components";
export const EAddressContainer = styled.div`
  width: 100%;
  grid-area: eaddress;
  margin-left: 2rem;
  h1 {
    font-size: 1rem;
    font-weight: 700;
  }
  p {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  font-weight: 700;
  border: none;
  &:focus {
    outline: none;
  }
`;
export const SubTitleInput = styled.input`
  margin: 0;
  width: 100%;
  font-size: 0.75rem;
  border: none;
  &:focus {
    outline: none;
  }
`;
