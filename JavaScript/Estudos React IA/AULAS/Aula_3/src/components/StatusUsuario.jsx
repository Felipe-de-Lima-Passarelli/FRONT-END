import { useState } from "react";

const StatusUsuario = () => {
  const [logado, setLogado] = useState(false);

  return (
    <div>
      <h2>Página Oficial</h2>
      <br />
      {logado ? (
        <>
          <p>Você está conectado</p>
          <button onClick={() => setLogado(false)}>Sair</button>
        </>
      ) : (
        <>
          <p>Por favor, faça login</p>
          <button onClick={() => setLogado(true)}>Logar</button>
        </>
      )}
    </div>
  );
};

export default StatusUsuario;
