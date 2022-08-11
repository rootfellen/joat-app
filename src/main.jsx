import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PasswordGenerator from "./pages/PasswordGenerator/PasswordGenerator";
import PdfGenerator from "./pages/PdfGenerator/PdfGenerator";
import QrGenerator from "./pages/QrGenerator/QrGenerator";
import RegexHelper from "./pages/RegExHelper/RegexHelper";
import ColorGenerator from "./pages/ColorGenerator/ColorGenerator";
import VoteCreator from "./pages/VoteCreator/VoteCreator";
import SaloUI from "./pages/SaloUI/SaloUI";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="passwordgenerator" element={<PasswordGenerator />} />
        <Route path="salo-ui" element={<SaloUI />} />
        <Route path="pdfgenerator" element={<PdfGenerator />} />
        <Route path="qrgenerator" element={<QrGenerator />} />
        <Route path="regexhelper" element={<RegexHelper />} />
        <Route path="colorgenerator" element={<ColorGenerator />} />
        <Route path="votecreator" element={<VoteCreator />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
