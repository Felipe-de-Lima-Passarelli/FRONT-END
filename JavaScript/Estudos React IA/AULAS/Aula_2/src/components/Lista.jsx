import React, { useState } from "react";
import "./Lista.css";

const Lista = () => {
  const [tarefas, setTarefas] = useState([
    "Estudar React",
    "Fazer exercícios",
    "Tirar as dúvidas",
  ]);
  const [novaPalavra, setNovaPalavra] = useState("");
  const [id, setId] = useState(-1);

  const adicionarTarefa = () => {
    if (novaPalavra.trim() === "") return;
    setTarefas((atual) => [...atual, novaPalavra]);
    setNovaPalavra("");
  };

  const removerTarefa = () => {
    if (id === -1 || id > tarefas.length - 1) {
      alert("Escolha um id válido");
    } else {
      setTarefas((atual) => atual.filter((_, index) => index !== id));
    }
  };

  return (
    <div className="borda">
      <h2>Minhas tarefas</h2>
      <ul>
        {tarefas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
      <label>
        Nova Tarefa:
        <input
          type="text"
          value={novaPalavra}
          onChange={(e) => setNovaPalavra(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </label>
      <br />
      <label>
        Remover Tarefa (Posição na lista):
        <input
          type="number"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
        />
        <button onClick={removerTarefa}>Remover</button>
      </label>
    </div>
  );
};

export default Lista;
