import styled from "styled-components";

export const Wrapper = styled.aside`
  background-color: #f6f5f5;
  width: 55%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Select = styled.select`
  // A reset of styles, including removing the default dropdown arrow
  appearance: none;
  // Additional resets for further consistency
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  ::-ms-expand {
    display: none;
  }
  outline: none;
  width: 100%;
  border: 1px solid #9da192;
  border-radius: 0.25em;
  padding: 0.8rem;
  font-size: 1rem;
  cursor: pointer;
  line-height: 1.1;
`;

export const Template = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Sections = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Postage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 1.125rem;
`;

export const Message = styled.span`
  display: flex;
  padding: 2rem;
  border-radius: 7px;
  background-color: #9da192;
  color: #31403c;
  line-height: 1.2rem;
`;

export const TextArea = styled.textarea`
  height: 50%;
  margin-top: 1.125rem;
  padding: 1rem;
`;
