import { Container } from "./AppElements";
import data from "../../assets/data";
import saloUI from "../../../public/icons/saloUI.png";
import passwordGenerator from "../../../public/icons/passwordGenerator.png";
import pdfGenerator from "../../../public/icons/pdfGenerator.png";
import qrGenerator from "../../../public/icons/qrGenerator.png";
import regExHelper from "../../../public/icons/regExHelper.png";
import colorGenerator from "../../../public/icons/colorGenerator.png";
import voteCreator from "../../../public/icons/voteCreator.png";

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
