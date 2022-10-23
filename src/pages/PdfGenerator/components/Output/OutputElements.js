import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: #9da192;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  padding: 1rem;
`;

export const Preview = styled.div`
  width: 100%;
  height: 92%;
  background-color: #fff;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    ". . postage"
    "eaddress . ."
    ". . caddress"
    "title title title"
    "text text text"
    "signature . .";
`;
export const Button = styled.button`
  all: unset;
  padding: 0.5rem 1rem;
  background-color: #31403c;
  border-radius: 7px;
  color: #fff;
  cursor: pointer;
`;
