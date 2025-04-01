import "./App.css";
import OutraLista from "./components/OutraLista";

function App() {
  const meusItens = ["React", "Vue", "Angular"];

  return (
    <div className="App">
      <h2>Início</h2>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  );
}

export default App;
