import "./App.css";
import { useState } from "react";
import Contador from "./components/Contador";

function App() {
  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <h2>Exercício</h2>
      <Contador num={num} setNum={setNum} />
    </div>
  );
}

export default App;
