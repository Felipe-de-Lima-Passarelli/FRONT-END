import { useState } from "react";

const HookUseState = () => {
  let userName = "João";
  const [name, setName] = useState("Matheus");

  const changeNames = () => {
    userName = "João Souza";
    setName("Matheus Battisti");
  };

  return (
    <div>
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
      <hr />
    </div>
  );
};

export default HookUseState;
