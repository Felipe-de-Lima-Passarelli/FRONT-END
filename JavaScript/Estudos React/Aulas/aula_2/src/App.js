import "./App.css";
import Evento from "./components/Evento";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="App">
      <h2 className="listContainer">Testando Eventos</h2>
      <Evento />
      <Formulario />
    </div>
  );
}

export default App;
