import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function limparEmail() {
    setUserEmail("");
  }

  return (
    <>
      <h2>Cadastre o seu e:mail</h2>
      <form>
        <input
          type="email"
          placeholder="Digite o seu e-mail..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar E-mail
        </button>
        {userEmail && (
          <>
            <p>O e-mail do usuário é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar e-mail</button>
          </>
        )}
      </form>
    </>
  );
}

export default Condicional;
