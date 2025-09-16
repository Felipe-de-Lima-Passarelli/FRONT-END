import "./Todolist.css";
import { useState } from "react";

const Todolist = () => {
  const [tarefas, setTarefas] = useState([]);

  const [nome, setNome] = useState("");
  const [dificuldade, setDificuldade] = useState("");

  const apagarTarefa = (tarefaAtual) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.nome != tarefaAtual));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome === "" || dificuldade === "") return;

    setTarefas((prev) => [...prev, { nome, dificuldade }]);
    setNome("");
    setDificuldade("");
  };

  return (
    <div className="main_todo">
      <form className="form">
        <span>Título:</span>
        <input
          type="text"
          name="titulo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <span>Dificuldade:</span>
        <input
          type="number"
          name="dificuldade"
          value={dificuldade}
          onChange={(e) => setDificuldade(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Cadastrar nova tarefa
        </button>
      </form>
      <h2>Suas Tarefas:</h2>
      <ul className="tarefa">
        {tarefas.length ? (
          tarefas.map((tarefa) => (
            <li key={tarefa.nome}>
              <div className="bloco_Tarefa">
                <span>{tarefa.nome}</span>
                <button onClick={() => apagarTarefa(tarefa.nome)}>
                  Apagar
                </button>
                <p>Dificuldade: {tarefa.dificuldade}</p>
              </div>
            </li>
          ))
        ) : (
          <span>Não há tarefas cadastradas</span>
        )}
      </ul>
    </div>
  );
};

export default Todolist;
