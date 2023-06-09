import logo from "./logo.svg";
import "./App.css";
import { QouteGenerator } from "./Examplefile";

import "./styles.css";
import famousQoutations from "./Qoutes";

let x = Math.floor(Math.random() * 10 + 1);
function App() {
  return (
    <div className="App">
      <QouteGenerator
        key={famousQoutations[x].id}
        qoute={famousQoutations[x].qoute}
        author={famousQoutations[x].author}
      />
    </div>
  );
}

export default App;
