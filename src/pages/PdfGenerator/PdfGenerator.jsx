import React from "react";
import { LogoLink } from "../PasswordGenerator/PasswordGeneratorElements";
import { Container, Logo, Wrapper } from "./pdfGeneratorElements";
import pdfGeneratorLogo from "../../icons/pdfGenerator.png";
import jsPDF from "jspdf";
import Output from "./components/Output/Output";
import Sidebar from "./components/Sidebar/Sidebar";

const PdfGenerator = () => {
  const doc = new jsPDF();
  const generatePDF = () => {
    doc.text(20, 20, "This is the first title.");
    doc.addFont("helvetica", "normal");
    doc.text(20, 60, "This is the second title.");
    doc.text(20, 100, "This is the thrid title.");
    doc.save("demo.pdf");
  };
  return (
    <Wrapper>
      <LogoLink to="/">
        <Logo src={pdfGeneratorLogo} />
      </LogoLink>
      <Container>
        <Sidebar />
        <Output generatePDF={generatePDF} />
      </Container>
    </Wrapper>
  );
};

export default PdfGenerator;
