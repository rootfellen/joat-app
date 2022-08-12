import React, { useEffect } from "react";
import {
  Container,
  Wrapper,
  LogoLink,
  LogoImg,
  Title,
  Quote,
  SettingsWrapper,
  TopSettings,
  LowSettings,
  PasswordInput,
  CopyBtn,
  GenerateBtn,
  LowSettingsTitle,
  Divider,
  LowSettingsWrapper,
  LengthSettings,
  RangeInputContainer,
  RangeInputNumber,
  RangeInputRange,
  PasswordTypeContainer,
  PasswordTypeInput,
  PasswordTypeLabel,
  PasswordContentContainer,
  PasswordContentInput,
  PasswordContentLabel,
} from "./PasswordGeneratorElements";
import PasswordGeneratorLogo from "/icons/passwordGenerator.png";
import { IoCopyOutline } from "react-icons/io5";
import { TbRefresh } from "react-icons/tb";
import { useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(5);
  const [password, setPassword] = useState({
    value: "",
    length: length,
    type: {
      easyToSay: false,
      easyToRead: false,
      allCharacters: true,
    },
    settings: {
      upperCase: true,
      lowerCase: true,
      numbers: true,
      symbols: true,
    },
  });

  useEffect(() => {
    setPassword((prevState) => {
      return {
        ...prevState,
        length: +length,
      };
    });
  }, [length]);

  const randomString = () => {
    const random = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .slice(0, length);
    setPassword((prevState) => {
      return {
        ...prevState,
        value: random,
      };
    });
    console.log(random);
    console.log(random.length);
  };

  const rangeHandler = (e) => {
    if (e.target.value < 0) {
      alert("We suggest to use minimum of 5 digits password.");
      setLength(5);
    } else if (e.target.value > 36) {
      setLength(36);
    } else if (e.target.value < 5) {
      setLength(5);
    } else {
      setLength(e.target.value);
    }
    console.log(length);
  };

  return (
    <>
      <Container>
        <LogoLink to="/">
          <LogoImg src={PasswordGeneratorLogo} />
        </LogoLink>

        <Wrapper>
          <Title>
            Generate
            <span>secure password</span>
          </Title>
          <Quote>
            “Treat your password like your toothbrush. Don't let anybody else
            use it, and get a new one every six months.”
            <span>Clifford Stoll</span>
          </Quote>
          <SettingsWrapper>
            <TopSettings>
              <PasswordInput
                type="text"
                value={password.value}
                onChange={randomString}
              />
              <CopyBtn>
                <IoCopyOutline style={{ fontSize: "2rem" }} />
              </CopyBtn>
              <GenerateBtn onClick={randomString}>
                <TbRefresh style={{ marginRight: "1rem" }} />
                generate
              </GenerateBtn>
            </TopSettings>
            <LowSettings>
              <LowSettingsTitle>Customize your password</LowSettingsTitle>
              <Divider />
              <LowSettingsWrapper>
                <LengthSettings>
                  <span>Password Length</span>
                  <RangeInputContainer>
                    <RangeInputNumber
                      type="number"
                      value={length}
                      onChange={rangeHandler}
                    />
                    <RangeInputRange
                      type="range"
                      min="5"
                      max="36"
                      value={length}
                      onChange={rangeHandler}
                    />
                  </RangeInputContainer>
                </LengthSettings>
                <PasswordTypeContainer>
                  <div>
                    <PasswordTypeInput
                      type="radio"
                      value="easy-to-say"
                      id="1"
                      name="easy"
                    />
                    <PasswordTypeLabel htmlFor="1">
                      Easy to say
                    </PasswordTypeLabel>
                  </div>
                  <div>
                    <PasswordTypeInput
                      type="radio"
                      value="easy-to-read"
                      id="2"
                      name="easy"
                    />
                    <PasswordTypeLabel htmlFor="2">
                      Easy to read
                    </PasswordTypeLabel>
                  </div>
                  <div>
                    <PasswordTypeInput
                      type="radio"
                      value="all characters"
                      id="3"
                      name="easy"
                    />
                    <PasswordTypeLabel htmlFor="3">
                      All Characters
                    </PasswordTypeLabel>
                  </div>
                  <div>
                    <PasswordTypeInput
                      type="radio"
                      value="all characters"
                      id="4"
                      name="easy"
                    />
                    <PasswordTypeLabel htmlFor="4">PIN</PasswordTypeLabel>
                  </div>
                </PasswordTypeContainer>
                <PasswordContentContainer>
                  <div>
                    <PasswordContentInput
                      type="checkbox"
                      id="uppercase"
                      name="uppercase"
                      value="Uppercase"
                    />
                    <PasswordContentLabel htmlFor="uppercase">
                      Uppercase
                    </PasswordContentLabel>
                  </div>
                  <div>
                    <PasswordContentInput
                      type="checkbox"
                      id="lowercase"
                      name="lowercase"
                      value="Lowercase"
                    />
                    <PasswordContentLabel htmlFor="lowercase">
                      Lowercase
                    </PasswordContentLabel>
                  </div>
                  <div>
                    <PasswordContentInput
                      type="checkbox"
                      id="numbers"
                      name="numbers"
                      value="numbers"
                    />
                    <PasswordContentLabel htmlFor="numbers">
                      Numbers
                    </PasswordContentLabel>
                  </div>
                  <div>
                    <PasswordContentInput
                      type="checkbox"
                      id="symbols"
                      name="symbols"
                      value="symbols"
                    />
                    <PasswordContentLabel htmlFor="symbols">
                      Symbols
                    </PasswordContentLabel>
                  </div>
                </PasswordContentContainer>
              </LowSettingsWrapper>
            </LowSettings>
          </SettingsWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default PasswordGenerator;
