import "./App.css";
import Lista from "./components/Lista";

function App() {
  const listaAtual = ["React", "JavaScript", "HTML", "CSS", "Python"];

  return (
    <div className="App">
      <h2>Início</h2>
      <Lista listaAtual={listaAtual} />
    </div>
  );
}

export default App;
