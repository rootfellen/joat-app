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
  PasswordTypeInfo,
} from "./PasswordGeneratorElements";
import PasswordGeneratorLogo from "../../icons/passwordGenerator.png";
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
    passwordType: "allcharacters",
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
    if (password.passwordType == "pin") {
      setPassword((prevState) => {
        return {
          ...prevState,
          uppercase: false,
          lowercase: false,
          symbols: false,
          numbers: true,
        };
      });
    }
    if (password.passwordType == "allcharacters") {
      setPassword((prevState) => {
        return {
          ...prevState,
          uppercase: true,
          lowercase: true,
          symbols: true,
          numbers: true,
        };
      });
    }
    if (password.passwordType == "easytosay") {
      setPassword((prevState) => {
        return {
          ...prevState,
          uppercase: true,
          lowercase: true,
          symbols: false,
          numbers: false,
        };
      });
    }
    if (password.passwordType == "easytoread") {
      setPassword((prevState) => {
        return {
          ...prevState,
          uppercase: true,
          lowercase: true,
          symbols: true,
          numbers: true,
        };
      });
    }
  }, [
    passwordLength,
    password.length,
    password.uppercase,
    password.lowercase,
    password.numbers,
    password.symbols,
    password.passwordType,
  ]);

  //? HANDLING MODAL COMPONENT

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  //* HANDLING PIN GENERATION

  const pinGenerator = (value) => {
    if (passwordLength == 5) {
      const output = value.match(/.{1,1}/g).join("-");
      return output;
    }
    if (passwordLength % 2 == 0) {
      const output = value.match(/.{1,2}/g).join("--");
      return output;
    }
    if (passwordLength > 5 && passwordLength % 2 == 1) {
      const output = value.match(/.{1,3}/g).join("---");
      return output;
    }
    if (passwordLength > 10 && passwordLength % 2 == 0) {
      const output = value.match(/.{1,3}/g).join("--");
      return output;
    }
  };

  //* HANDLING EASY TO READ PASSWORD GENERATION

  const easyToReadFilter = (value) => {
    const output = value.match(/[^lI1O0]/g).join("");
    return output;
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
    const typesArr = [{ lower }, { upper }, { number }, { symbol }]
      .sort(function () {
        return Math.random() - 0.5;
      })
      .filter((item) => Object.values(item)[0]);
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
    if (password.passwordType == "pin") {
      return pinGenerator(finalOutput);
    }
    if (password.passwordType == "easytoread") {
      return easyToReadFilter(finalOutput);
    } else {
      return finalOutput;
    }
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
        passwordType: value,
      };
    });
  };

  const test = (e) => {
    // Easy to read - Avoid ambiguous characters like l, 1, O, 0
    // Easy to say - Avoid numbers and special characters
    // PIN - sequense of numbers seperated with "-"
    const { name, value, type, checked, id } = e.target;
    setPassword((prevPassword) => {
      return {
        ...prevPassword,
        passwordType: value,
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
              <LowSettingsTitle onClick={pinGenerator}>
                Customize your password
              </LowSettingsTitle>
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
                      type="radio"
                      value="easytosay"
                      id="easytosay"
                      name="passwordType"
                      onChange={test}
                      checked={password.passwordType == "easytosay"}
                    />
                    <PasswordTypeLabel htmlFor="easytosay">
                      Easy to say
                    </PasswordTypeLabel>
                    <PasswordTypeInfo>
                      i <span>Avoid numbers and special characters</span>
                    </PasswordTypeInfo>
                  </div>
                  <div>
                    <PasswordTypeInput
                      type="radio"
                      value="easytoread"
                      id="easytoread"
                      name="passwordType"
                      onChange={test}
                      checked={password.passwordType == "easytoread"}
                    />
                    <PasswordTypeLabel htmlFor="easytoread">
                      Easy to read
                    </PasswordTypeLabel>
                    <PasswordTypeInfo>
                      i<span>Avoid ambiguous characters like l, 1, O, 0</span>
                    </PasswordTypeInfo>
                  </div>
                  <div>
                    <PasswordTypeInput
                      type="radio"
                      value="allcharacters"
                      id="allcharacters"
                      name="passwordType"
                      onChange={test}
                      checked={password.passwordType == "allcharacters"}
                    />
                    <PasswordTypeLabel htmlFor="allcharacters">
                      All Characters
                    </PasswordTypeLabel>
                  </div>
                  <div>
                    <PasswordTypeInput
                      type="radio"
                      value="pin"
                      id="pin"
                      name="passwordType"
                      onChange={test}
                      checked={password.passwordType == "pin"}
                    />
                    <PasswordTypeLabel htmlFor="pin">PIN</PasswordTypeLabel>
                    <PasswordTypeInfo>
                      i
                      <span>Randomly generated digits, seperated with '-'</span>
                    </PasswordTypeInfo>
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
                      disabled={password.passwordType == "pin" ? true : false}
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
                      disabled={password.passwordType == "pin" ? true : false}
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
                      disabled={
                        password.passwordType == "easytosay" ? true : false
                      }
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
                      disabled={
                        password.passwordType == "pin"
                          ? true
                          : password.passwordType == "easytosay"
                          ? true
                          : false
                      }
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
