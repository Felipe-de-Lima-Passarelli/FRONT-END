import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1);
  };

  const diminuir = () => {
    if (contador === 0) return;
    setContador(contador - 1);
  };

  const resetar = () => {
    if (contador === 0) return;
    setContador(0);
  };

  return (
    <div className="counter">
      <h3>Contagem atual: {contador}</h3>
      <div className="botoes">
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button>
        <button onClick={resetar}>Resetar</button>
      </div>
    </div>
  );
};

export default Counter;
