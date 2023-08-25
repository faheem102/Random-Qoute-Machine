import "./App.css";
import { QouteGenerator } from "./QouteContainer";
import CurrentTime from "./CurrentTime";
import "./styles.css";
import famousQoutations from "./Qoutes";
import { FaHeart } from "react-icons/fa";

let x = Math.floor(Math.random() * 10 + 1);

function App() {
  return (
    <div className="App">
      <CurrentTime />
      <QouteGenerator
        key={famousQoutations[x].id}
        qoute={famousQoutations[x].qoute}
        author={famousQoutations[x].author}
      />
      <FaHeart />
    </div>
  );
}

export default App;
