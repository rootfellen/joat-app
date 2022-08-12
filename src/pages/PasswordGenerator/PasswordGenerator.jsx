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
import { CopyToClipboard } from "react-copy-to-clipboard";
import Modal from "./Modal/Modal.jsx";

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(5);
  const [password, setPassword] = useState({
    value: "",
    length: "",
    easytosay: false,
    easytoread: false,
    allcharacters: true,
    pin: false,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  useEffect(() => {
    setPassword((prevState) => {
      return {
        ...prevState,
        value: generateResult(),
        length: +passwordLength,
      };
    });
  }, [
    passwordLength,
    password.length,
    password.uppercase,
    password.lowercase,
    password.numbers,
    password.symbols,
  ]);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  //* HANDLING PASSWORD GENERATION

  //! generate lowercase letter
  const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };
  //! generate uppercase letter
  const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };
  //! generate random number
  const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };
  //! generate random symbol
  const getRandomSymbol = () => {
    const symbols = "!@#$%^&*()_+=-{}[]<>?/.,:;±§~";
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  //* Object with methods to generate random letters,numbers,symbols
  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  //* Function to use generate random password function with given types
  const generateResult = () => {
    const hasLower = password.lowercase;
    const hasUpper = password.uppercase;
    const hasNumber = password.numbers;
    const hasSymbol = password.symbols;
    const hasLength = password.length;
    const result = generateRandomPassword(
      hasLower,
      hasUpper,
      hasNumber,
      hasSymbol,
      hasLength
    );
    setPassword((prevPassword) => {
      return {
        ...prevPassword,
        value: result,
      };
    });
  };

  //* Generating random string based on given length, methods and choosen types
  function generateRandomPassword(lower, upper, number, symbol, length) {
    // 1. Initialize password variable
    // 2. Filter out unchecked types
    // 3. Loop over length call generator function for each type
    // 4. Add final password to result variable and return

    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0]
    );
    if (typesCount == 0) {
      return "";
    }
    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach((type) => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }
    const finalOutput = generatedPassword.slice(0, length);
    return finalOutput;
  }

  //* Setting password length based on the input range value
  const rangeHandler = (e) => {
    if (e.target.value < 0) {
      alert("We suggest to use minimum of 5 digits password.");
      setPasswordLength(() => {
        return 5;
      });
    } else if (e.target.value > 36) {
      setPasswordLength(() => {
        return 36;
      });
    } else if (e.target.value < 5) {
      setPasswordLength(() => {
        return 5;
      });
    } else {
      setPasswordLength(() => {
        return e.target.value;
      });
    }
  };
  //* Controlling pass types checkboxes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPassword((prevPassword) => {
      return {
        ...prevPassword,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  return (
    <>
      <Container>
        {showModal ? <Modal clipboard={password.value} /> : null}
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
                onChange={generateResult}
              />
              <CopyToClipboard text={password.value} onCopy={() => openModal()}>
                <CopyBtn>
                  <IoCopyOutline style={{ fontSize: "2rem" }} />
                </CopyBtn>
              </CopyToClipboard>

              <GenerateBtn onClick={generateResult}>
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
                      value={passwordLength}
                      onChange={rangeHandler}
                    />
                    <RangeInputRange
                      type="range"
                      min="5"
                      max="36"
                      value={passwordLength}
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
