import React, { useState } from "react";
import { LogoLink } from "../PasswordGenerator/PasswordGeneratorElements";
import { Container, Logo, Wrapper } from "./pdfGeneratorElements";
import pdfGeneratorLogo from "../../icons/pdfGenerator.png";
import jsPDF from "jspdf";
import Output from "./components/Output/Output";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext } from "react";

export const Context = createContext();

const PdfGenerator = () => {
  const defaultText =
    "Contract Text. This Contract has been made out of four (4) originals for Party A and Party B each holding two (2), which shall be equally authentic. During the valid credit period and within the credit line, all the legal documents concerning the creditor and debtor relationship between Party A and Party B shall be deemed as an integral part of this Contract.";
  const [data, setData] = useState({
    postage: "2022-10-12",
    sections: [
      "Employee Address",
      "Contractor Signature",
      "Contractor Address",
      "Title",
    ],
    template: "Agreement",
  });
  const [text, setText] = useState(defaultText);

  const selectHandler = (e) => {
    setData((prevState) => {
      const { name, value, type, checked } = e.target;
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  const handleText = (e) => {
    setText(e.target.value);
  };

  const doc = new jsPDF();
  const generatePDF = () => {
    doc.text(20, 20, "This is the first title.");
    doc.addFont("helvetica", "normal");
    doc.text(20, 60, "This is the second title.");
    doc.text(20, 100, "This is the thrid title.");
    doc.save("demo.pdf");
  };

  console.log(data);
  return (
    <Wrapper>
      <LogoLink to="/">
        <Logo src={pdfGeneratorLogo} />
      </LogoLink>
      <Context.Provider value={{ data, text }}>
        <Container>
          <Sidebar selectHandler={selectHandler} handleText={handleText} />
          <Output generatePDF={generatePDF} />
        </Container>
      </Context.Provider>
    </Wrapper>
  );
};

export default PdfGenerator;
