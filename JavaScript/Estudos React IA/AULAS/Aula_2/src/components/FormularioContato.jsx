import { useState } from "react";
import styles from "./FormularioContato.module.css";

const FormularioContato = () => {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim() === "" || mensagem.trim() === "") {
      alert("Por favor, preencha todos os campos!");
    } else {
      alert(`Nome: ${nome}\nMensagem: ${mensagem}`);
      setNome("");
      setMensagem("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.borda}>
      <h2>Contato</h2>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Mensagem:
        <textarea
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioContato;
