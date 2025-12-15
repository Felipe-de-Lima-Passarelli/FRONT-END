"use client";

import { useState } from "react";

const Page = () => {
  const [valor, setValor] = useState("");

  return (
    <div className="p-2">
      <h1>Página de Entradas</h1>
      <br />
      <input
        type="text"
        className="campoTexto"
        placeholder="Digite seu nome"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
    </div>
  );
};

export default Page;
