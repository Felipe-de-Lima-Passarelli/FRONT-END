import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <h2>Exercício</h2>
      <Greeting hour={10} />
      <Greeting hour={14} />
      <Greeting hour={22} />
    </div>
  );
}

export default App;
