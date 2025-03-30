import styles from "./Tarefas.module.css";
import { useState } from "react";

function Tarefas() {
  const [valor, setValor] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (valor.trim() !== "") {
      setTarefas([...tarefas, valor]);
      setValor("");
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        className={styles.inputStyle}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button className={styles.buttonStyle} onClick={adicionarTarefa}>
        Adicionar Tarefa
      </button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </>
  );
}

export default Tarefas;
