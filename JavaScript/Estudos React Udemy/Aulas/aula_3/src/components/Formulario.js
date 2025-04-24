import { useState } from "react";
import "./Formulario.module.css";

const Formulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Enviando o formulário com nome: ${name} e email: ${email}`);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <span>Nome:</span>
            <input
              type="text"
              name="name"
              placeholder="Digite o seu nome"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            <span>Email:</span>
            <input
              type="email"
              name="email"
              placeholder="Digite o seu email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Formulario;
