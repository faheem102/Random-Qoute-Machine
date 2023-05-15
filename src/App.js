import logo from "./logo.svg";
import "./App.css";
import { MyComponent } from "./Examplefile";
import "./styles.css";


function App() {
  return (
    <div className="App" >
      <MyComponent date={Date()} />
    </div>
  );
}

export default App;
