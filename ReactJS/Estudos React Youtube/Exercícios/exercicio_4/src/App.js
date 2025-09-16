import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <h2>Exercício</h2>
      <Profile
        nome="Felipe"
        biografia="Estudante de Análise e Desenvolvimento de Sistemas, futuro programador."
      />
    </div>
  );
}

export default App;
