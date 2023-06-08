import logo from "./logo.svg";
import "./App.css";
import { QouteGenerator } from "./Examplefile";
import famousQoutations from "./Qoutes";
import "./styles.css";

function App() {
  return (
    <div className="App">
      {famousQoutations.map((qouteitem) => {
        return (
          <QouteGenerator
            key={qouteitem.id}
            qoute={qouteitem.qoute}
            author={qouteitem.author}
          />
        );
      })}
    </div>
  );
}

export default App;
