import React, { useState } from "react";
import { LogoLink } from "../PasswordGenerator/PasswordGeneratorElements";
import { Container, Logo, Wrapper } from "./pdfGeneratorElements";
import pdfGeneratorLogo from "../../icons/pdfGenerator.png";
import { jsPDF } from "jspdf";
import Output from "./components/Output/Output";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext } from "react";

export const Context = createContext();

const PdfGenerator = () => {
  const defaultText =
    "Contract Text. This Contract has been made out of four (4) originals for Party A and Party B each holding two (2), which shall be equally authentic. During the valid credit period and within the credit line, all the legal documents concerning the creditor and debtor relationship between Party A and Party B shall be deemed as an integral part of this Contract.";
  const templates = [
    "Invoice",
    "Letter",
    "Agreement",
    "Recommendation",
    "Certificate",
  ];

  const companies = [
    {
      title: "Sal-to International LLC",
      address: "65139 Rough St. Oakland",
      state: "California 395213",
    },
    {
      title: "VCare Ltd",
      address: "33139 McBean Blvd. Valencia",
      state: "California 91355",
    },
  ];
  const [data, setData] = useState({
    postage: "2022-10-12",
    sections: [
      "Employee Address",
      "Contractor Signature",
      "Contractor Address",
      "Title",
    ],
    template: "Agreement",
    companies,
  });

  const [text, setText] = useState(defaultText);

  console.log(data);
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

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "in",
    format: [11.7, 8.3],
  });
  const generatePDF = () => {
    doc.addFont("Roboto", "normal");

    // Postage
    doc.setFontSize(12);
    doc.text(`${data.postage}`, 8, 1, null, null, "right");

    //Employer

    doc.setFontSize(15);
    doc.setFont("Roboto", "bold");
    doc.text(`${data.companies[0].title}`, 0.4, 2, null, null, "left");

    doc.setFontSize(12);
    doc.setFont("Roboto", "normal");
    doc.text(`${data.companies[0].address}`, 0.4, 2.5, null, null, "left");

    doc.setFontSize(12);
    doc.setFont("Roboto", "normal");
    doc.text(`${data.companies[0].state}`, 0.4, 2.7, null, null, "left");

    //Contractor
    doc.setFontSize(15);
    doc.setFont("Roboto", "bold");
    doc.text(`${data.companies[1].title}`, 6.5, 4, null, null, "right");

    doc.setFontSize(12);
    doc.setFont("Roboto", "normal");
    doc.text(`${data.companies[1].address}`, 7.6, 4.5, null, null, "right");

    doc.setFontSize(12);
    doc.setFont("Roboto", "normal");
    doc.text(`${data.companies[1].state}`, 6.67, 4.7, null, null, "right");

    //Title
    doc.setFont("Roboto", "bold");
    doc.text(`${data.template}`, 3.8, 6.5);

    // Main Text
    doc.setFont("Roboto", "normal");
    doc.setFontSize(14);
    doc.setLineHeightFactor(1.7);
    doc.text(`${text}`, 0.4, 7.5, {
      maxWidth: "7.5",
      align: "justify",
    });

    //Signature
    doc.setLineWidth(0.005);
    doc.line(0.4, 10, 3, 10);
    doc.setFontSize(10);
    doc.text("Contractor Signature", 0.95, 10.3);

    doc.save("demo.pdf");
  };

  return (
    <Wrapper>
      <LogoLink to="/">
        <Logo src={pdfGeneratorLogo} />
      </LogoLink>
      <Context.Provider value={{ data, text }}>
        <Container>
          <Sidebar
            selectHandler={selectHandler}
            handleText={handleText}
            templates={templates}
          />
          <Output
            generatePDF={generatePDF}
            title={data.template}
            companies={data.companies}
          />
        </Container>
      </Context.Provider>
    </Wrapper>
  );
};

export default PdfGenerator;
