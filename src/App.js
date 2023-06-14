import "./App.css";
import { QouteGenerator } from "./QouteContainer";

import "./styles.css";
import famousQoutations from "./Qoutes";
import { useState } from "react";
import { ColorPicker } from "./Qoutes";

let x = Math.floor(Math.random() * 10 + 1);

function App() {
  const [color, setColor] = useState("red");
  function newColor() {
    setColor(ColorPicker());
  }
  return (
    <div className="App">
      <QouteGenerator
        key={famousQoutations[x].id}
        qoute={famousQoutations[x].qoute}
        author={famousQoutations[x].author}
      />
      <button onClick={newColor}>Next Qoute</button>
    </div>
  );
}

export default App;
