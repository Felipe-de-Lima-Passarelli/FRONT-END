import "./App.css";

//Components
import Mensagem from "./components/Mensagem";
import Card from "./components/Card";
import Contador from "./components/Contador";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <h1>Olá, Felipe 👋</h1>
      <p>Esse é seu primeiro projeto com React!</p>
      <Mensagem />
      <br />
      <Card
        nome="Felipe de Lima Passarelli"
        curso="Análise e Desenvolvimento de Sistemas"
        objetivo="Conquistar a primeira vaga na
        área de TI"
        frase="Be better"
      />
      <Card
        nome="Segundo Card"
        curso="Estudante"
        objetivo="Testando"
        frase="Be better"
      />
      <Contador />
      <br />
      <Profile
        nome="Perfil Interativo"
        curso="Análise e Desenvolvimento de Sistemas"
        objetivo="Conquistar a primeira vaga na
        área de TI"
        frase="Be better"
      />
    </div>
  );
}

export default App;
