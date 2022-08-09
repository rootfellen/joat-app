import { Container } from "./AppElements";
import data from "../../assets/data";

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
            />
          );
        })}
      </Container>
    </div>
  );
}

export default App;
