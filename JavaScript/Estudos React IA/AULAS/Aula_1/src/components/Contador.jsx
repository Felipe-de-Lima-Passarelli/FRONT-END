import { useState } from "react";

const Contador = () => {
  const [valor, setValor] = useState(10);

  return (
    <div>
      <h3>Número Atual: {valor >= 0 ? valor : "Valor mínimo atingido"}</h3>
      <button onClick={() => setValor(valor + 1)}>+1</button>
      <button onClick={() => setValor(valor > 0 ? valor - 1 : -1)}>-1</button>
      <button onClick={() => setValor(0)}>Resetar</button>
    </div>
  );
};

export default Contador;
