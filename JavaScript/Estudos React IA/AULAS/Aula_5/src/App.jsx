import "./App.css";
import Botao from "./components/Botao";
import Input from "./components/Input";
import Card from "./components/Card";

function App() {
  const helloWorld = () => {
    console.log("Deu certo");
  };

  const estouDigitando = () => {
    console.log("Digitei no Input");
  };

  return (
    <div>
      <h1>Início</h1>
      <br />
      <Botao texto="Clique Aqui" onClick={helloWorld} cor="green" />
      <br />
      <br />
      <input
        label="email"
        name="email"
        onChange={estouDigitando}
        tipo="email"
        placeholder="Digite seu email"
      />
      <br />
      <br />
      <Card titulo="Counter Strike 2" descricao="Jogo de FPS" />
    </div>
  );
}

export default App;
