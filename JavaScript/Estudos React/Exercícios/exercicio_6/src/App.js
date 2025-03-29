import "./App.css";
import { useState } from "react";
import MultiCounter from "./components/MultiCounter";

function App() {
  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <h2>Exercício</h2>
      <MultiCounter num={num} setNum={setNum} />
    </div>
  );
}

export default App;
