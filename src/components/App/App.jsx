import { Container } from "./AppElements";
import data from "../../assets/data";
import saloUI from "/icons/saloUI.png";
import passwordGenerator from "/icons/passwordGenerator.png";
import pdfGenerator from "/icons/pdfGenerator.png";
import qrGenerator from "/icons/qrGenerator.png";
import regExHelper from "/icons/regExHelper.png";
import colorGenerator from "/icons/colorGenerator.png";
import voteCreator from "/icons/voteCreator.png";

import "./App.jsx";
import Tool from "../Tool/Tool";

function App() {
  return (
    <div className="App">
      <Container>
        {data.map((util, idx) => {
          return (
            <Tool
              key={idx}
              title={util.title}
              description={util.description}
              styleProp={util.styleProp}
              icon={
                util.styleProp == "saloUI"
                  ? saloUI
                  : util.styleProp == "pdfGenerator"
                  ? pdfGenerator
                  : util.styleProp == "qrGenerator"
                  ? qrGenerator
                  : util.styleProp == "regExHelper"
                  ? regExHelper
                  : util.styleProp == "colorGenerator"
                  ? colorGenerator
                  : util.styleProp == "voteCreator"
                  ? voteCreator
                  : passwordGenerator
              }
            />
          );
        })}
      </Container>
      <p className="copyright">
        Made by <a href="https://github.com/rootfellen"> Serhii Tarasenko</a>
      </p>
    </div>
  );
}

export default App;
