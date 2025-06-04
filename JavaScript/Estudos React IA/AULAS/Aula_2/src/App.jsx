import "./App.css";
import FormularioContato from "./components/FormularioContato";
import FormularioCadastro from "./components/FormularioCadastro";
import Lista from "./components/Lista";
import ListaDeCompras from "./components/ListaDeCompras";

function App() {
  return (
    <div>
      <h2>Início</h2>
      <br />
      <FormularioContato />
      <br />
      <FormularioCadastro />
      <br />
      <Lista /> <br />
      <ListaDeCompras />
    </div>
  );
}

export default App;
