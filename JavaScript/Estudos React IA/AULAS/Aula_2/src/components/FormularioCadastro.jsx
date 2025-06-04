import { useState } from "react";
import styles from "./FormularioCadastro.module.css";

const FormularioCadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim() === "" || email.trim() === "") {
      alert("Por favor, preencher todos campos");
    } else if (senha.trim().length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres");
    } else {
      alert(
        `Registrado com sucesso\nNome: ${nome}\nEmail: ${email}\nSenha: ${senha}`
      );
      setNome("");
      setEmail("");
      setSenha("");
    }
  };

  return (
    <div className={styles.borda}>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Nome:{" "}
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label>
          E-mail:{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Senha:{" "}
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default FormularioCadastro;
