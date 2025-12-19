import "./App.css";
import { useState } from "react";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h2>Início</h2>
      {/* Container com elementos Children na prop */}
      <Container>
        <p>Lista de Itens</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Container>
      {/* Executar função via props */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
