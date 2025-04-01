import { useState } from "react";

function Lista({ listaAtual }) {
  const [valorNovo, setValorNovo] = useState(listaAtual);
  const [input, setInput] = useState();

  function adicionarNovoElemento() {
    setValorNovo([...valorNovo, input]);
    setInput("");
  }

  return (
    <>
      <h1>Lista de programas interessantes:</h1>
      <ul>
        {valorNovo.map((valor, index) => (
          <li key={index}>
            Na posição {index + 1} da lista, temos o valor{" "}
            <strong>{valor}</strong>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Digite um novo elemento"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button onClick={adicionarNovoElemento}>Adicionar</button>
    </>
  );
}

export default Lista;
