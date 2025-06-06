import styles from "./FormularioContato.module.css";
import { useState } from "react";

const FormularioContato = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
    checkbox: false,
  });

  const handleForm = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((atual) => ({
      ...atual,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Cadastrado com Sucesso!\n Nome: ${form.nome}\n Email: ${form.email}`
    );
    setForm({ nome: "", email: "", mensagem: "", checkbox: false });
  };

  const formularioValido =
    form.nome.trim().length > 2 &&
    form.email.includes("@") &&
    form.mensagem.trim().length > 9 &&
    form.checkbox;

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleForm}
            className={styles.input}
          ></input>
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleForm}
            className={styles.input}
          ></input>
        </label>
        <label>
          Mensagem:
          <textarea
            name="mensagem"
            value={form.mensagem}
            placeholder="Digite sua mensagem aqui"
            onChange={handleForm}
          ></textarea>
        </label>
        <label>
          Confirmar
          <input
            type="checkbox"
            name="checkbox"
            checked={form.checkbox}
            onChange={handleForm}
            className={styles.input}
          />
        </label>
        <button type="submit" disabled={!formularioValido}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default FormularioContato;
