import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  color: #fff;
  background: linear-gradient(180deg, #2a4f48 0%, #327448 100%);
`;

export const LogoLink = styled(Link)``;

export const LogoImg = styled.img`
  max-width: 4.625rem;
  margin: 1rem 0rem;
`;
export const Wrapper = styled.div`
  max-width: 65%;
  width: 100%;
  background-color: #fff;
  padding: 3.4375rem 3.625rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;
export const Title = styled.h1`
  color: #2a4f48;
  font-size: 3.375rem;
  margin: 0rem;
  padding: 0rem;
  font-weight: 900;
  line-height: 2.5rem;
  letter-spacing: -2px;
  text-align: center;
  text-transform: uppercase;
  span {
    display: block;
    color: #2a4f48;
    font-size: 1.875rem;
    margin: 0rem;
    padding: 0rem;
    font-weight: 600;
  }
`;

export const Quote = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #2a4f48;
  font-style: italic;
  text-align: center;
  max-width: 37rem;
  span {
    padding-top: 0.5rem;
    font-weight: 500;
    font-style: normal;
    display: block;
  }
`;

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: normal;
`;

export const TopSettings = styled.div`
  background-color: #fff1d4;
  padding: 1.5rem 1.875rem;
  margin-bottom: 1.375rem;
  border: 1px solid #ffc24d;
  border-radius: 16px;
  display: flex;
  box-shadow: 0px 4px 4px rgba(42, 79, 72, 0.1);
`;

export const PasswordInput = styled.input`
  font-family: "Overpass Mono", monospace;
  font-weight: 600;
  font-size: 1.8rem;
  padding: 0.5rem 0.725rem;
  max-height: 3rem;
  text-align: center;
  border: 1px solid #ffc24d;
  border-radius: 16px;
  flex: 0 1 60%;
  color: #2a4f48;
  transition: all 0.3s ease-in-out;
  :focus {
    outline-color: #408055;
  }
  ::selection {
    background-color: #fec75a;
  }
`;

export const CopyBtn = styled.button`
  all: unset;
  background: radial-gradient(#ffce6d, #ffc24d);
  box-shadow: 5px 5px 0px 0px rgba(230, 151, 5, 1);
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 16px;
  flex: 1 0 40%;
  padding: 0.9375rem 0rem;
  max-width: 5rem;
  margin: 0rem 1rem 0rem 3rem;
  :active {
    transform: translateY(5px);
    box-shadow: none;
  }
`;

export const GenerateBtn = styled.button`
  all: unset;
  font-size: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(#449a61, #408055);
  box-shadow: 5px 5px 0px 0px rgba(42, 79, 72, 1);
  font-weight: 700;
  border-radius: 16px;
  flex: 1 0 10%;
  cursor: pointer;
  padding: 1.2rem;
  margin: 0rem 1rem;
  :active {
    transform: translateY(5px);
    box-shadow: none;
  }
`;

export const LowSettings = styled.div`
  background-color: #fff1d4;
  padding: 1.5rem 1.875rem;
  border: 1px solid #ffc24d;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(42, 79, 72, 0.1);
`;

export const LowSettingsTitle = styled.h3`
  margin: 0rem;
  padding: 0rem;
  color: #2a4f48;
  font-size: 1.75rem;
  font-weight: 700;
`;
export const Divider = styled.hr`
  width: 75%;
  border: 1px solid #2a4f48;
  opacity: 0.3;
  margin: 1.5rem 0rem;
`;

export const LowSettingsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LengthSettings = styled.div`
  text-align: center;
  max-width: 444px;
  max-height: 185px;
  display: flex;
  flex-direction: column;
  flex: 3;
  background-color: #fff;
  border-radius: 16px;
  border: 1px solid #ffc24d;
  padding: 1.875rem 2.0625rem;
  margin-right: 2rem;
  span {
    color: #2a4f48;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const RangeInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RangeInputNumber = styled.input`
  all: unset;
  color: #2a4f48;
  font-size: 1.5rem;
  max-width: 75px;
  height: 56px;
  border-radius: 16px;
  background: #fff1d4;
  border: 1px solid #2a4f48;
`;

export const RangeInputRange = styled.input`
  -webkit-appearance: none;
  margin: 1.2rem 0rem;
  max-width: 75%;
  width: 100%;
  :focus {
    outline: none;
  }
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.825rem;
    cursor: pointer;
    background: #ffc24d;
    border-radius: 16px;
  }
  ::-webkit-slider-thumb {
    height: 2rem;
    width: 2rem;
    border-radius: 1rem;
    background: #2a4f48;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -0.625rem;
    transition: transform 0.3s ease-in-out;

    :hover {
      transform: scale(1.1);
    }
  }
  ::-moz-range-track {
    width: 100%;
    height: 0.825rem;
    cursor: pointer;
    background: #ffc24d;
    border-radius: 16px;
  }
  ::-moz-range-thumb {
    height: 2rem;
    width: 2rem;
    border-radius: 1rem;
    background: #2a4f48;
    cursor: pointer;
  }
`;

export const PasswordTypeContainer = styled.div`
  flex: 1;
  margin: 0rem 1rem;
  div {
    display: flex;
    align-items: center;
    margin: 1rem 0rem;
  }
`;

export const PasswordTypeInput = styled.input`
  margin: 0;
  background-color: #ffc24d;
  font: inherit;
  display: inline-block;
  background-clip: content-box;
  width: 1.625em;
  height: 1.625em;
  padding: 6px;
  border: 1px solid #2a4f48;
  border-radius: 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  :checked {
    background-color: #2a4f48;
  }
`;
export const PasswordTypeLabel = styled.label`
  color: #2a4f48;
  font-size: 1.5rem;
  margin-left: 1rem;
  cursor: pointer;
`;

export const PasswordContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    margin: 0.5rem 0rem;
  }
`;
export const PasswordContentInput = styled.input`
  margin: 0;
  background-color: #ffc24d;
  font: inherit;
  display: inline-block;
  background-clip: content-box;
  width: 1.625em;
  height: 1.625em;
  padding: 6px;
  border: 1px solid #2a4f48;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  :checked {
    background-color: #2a4f48;
  }
`;
export const PasswordContentLabel = styled.label`
  color: #2a4f48;
  font-size: 1.5rem;
  margin-left: 1rem;
  cursor: pointer;
`;
