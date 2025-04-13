import "./App.css";
import UserDetails from "./components/UserDetails";

function App() {
  const pessoas = [
    { nome: "Paulo", idade: 17, profissao: "Estudante" },
    { nome: "Felipe", idade: 24, profissao: "Programador" },
    { nome: "Patricia", idade: 30, profissao: "Programadora" },
    { nome: "Usuário", idade: 68, profissao: "Aposentado" },
  ];

  return (
    <div className="App">
      <h2>Início</h2>
      <UserDetails pessoas={pessoas} />
    </div>
  );
}

export default App;
