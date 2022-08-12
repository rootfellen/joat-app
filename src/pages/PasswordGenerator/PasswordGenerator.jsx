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
    easytosay: "",
    easytoread: "",
    allcharacters: true,
    pin: "",
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const randomString = () => {
    const random = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substring(0, length);
    return random;
  };

  useEffect(() => {
    setPassword((prevState) => {
      return {
        ...prevState,
        value: randomString(),
        length: +length,
      };
    });
  }, [length]);

  const rangeHandler = (e) => {
    if (e.target.value < 0) {
      alert("We suggest to use minimum of 5 digits password.");
      setLength(() => {
        return 5;
      });
    } else if (e.target.value > 36) {
      setLength(() => {
        return 36;
      });
    } else if (e.target.value < 5) {
      setLength(() => {
        return 5;
      });
    } else {
      setLength(() => {
        return e.target.value;
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPassword((prevPassword) => {
      return {
        ...prevPassword,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  console.log(password);
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
                name="password"
                onChange={randomString}
              />
              <CopyBtn>
                <IoCopyOutline style={{ fontSize: "2rem" }} />
              </CopyBtn>
              <GenerateBtn>
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
                      type="checkbox"
                      value="easytosay"
                      id="easytosay"
                      name="easytosay"
                      onChange={handleChange}
                      checked={password.easytosay}
                    />
                    <PasswordTypeLabel htmlFor="easytosay">
                      Easy to say
                    </PasswordTypeLabel>
                  </div>
                  <div>
                    <PasswordTypeInput
                      type="checkbox"
                      value="easytoread"
                      id="easytoread"
                      name="easytoread"
                      onChange={handleChange}
                      checked={password.easytoread}
                    />
                    <PasswordTypeLabel htmlFor="easytoread">
                      Easy to read
                    </PasswordTypeLabel>
                  </div>
                  <div>
                    <PasswordTypeInput
                      type="checkbox"
                      value="allcharacters"
                      id="allcharacters"
                      name="allcharacters"
                      onChange={handleChange}
                      checked={password.allcharacters}
                    />
                    <PasswordTypeLabel htmlFor="allcharacters">
                      All Characters
                    </PasswordTypeLabel>
                  </div>
                  <div>
                    <PasswordTypeInput
                      type="checkbox"
                      value="pin"
                      id="pin"
                      name="pin"
                      onChange={handleChange}
                      checked={password.pin}
                    />
                    <PasswordTypeLabel htmlFor="pin">PIN</PasswordTypeLabel>
                  </div>
                </PasswordTypeContainer>

                {/* PASSWORD CONTENT CONTAINER */}
                <PasswordContentContainer>
                  <div>
                    <PasswordContentInput
                      type="checkbox"
                      id="uppercase"
                      name="uppercase"
                      value="uppercase"
                      onChange={handleChange}
                      checked={password.uppercase}
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
                      value="lowercase"
                      onChange={handleChange}
                      checked={password.lowercase}
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
                      onChange={handleChange}
                      checked={password.numbers}
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
                      onChange={handleChange}
                      checked={password.symbols}
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
