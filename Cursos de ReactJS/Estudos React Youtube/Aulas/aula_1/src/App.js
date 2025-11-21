import "./App.css";
import HelloWorld from "./components/Hello";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";

function App() {
  const nome = "Felipe";
  const url = "https://placehold.co/150";

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {nome}</p>
      <img src={url} alt="Minha imagem" />
      <HelloWorld />
      <SayMyName nome="usuário1" />
      <SayMyName nome="usuário2" />
      <Pessoa
        nome="Felipe"
        idade="24"
        profissao="Programador"
        foto="https://placehold.co/150"
      />
      <List />
    </div>
  );
}

export default App;
