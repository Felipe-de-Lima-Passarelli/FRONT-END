"use client";

import Nav from "@/components/Nav";
import { useState } from "react";

const Page = () => {
  const [numero, setNumero] = useState(0);

  function incrementar() {
    setNumero(numero + 1);
  }

  function decrementar() {
    setNumero(numero - 1);
  }

  return (
    <div>
      <h1>Componente com Estado</h1>
      <Nav />
      <br />
      <div>
        <button onClick={incrementar} className="p-2 bg-blue-200 m-2">
          Clique aqui
        </button>
        <br />
        <button onClick={decrementar} className="p-2 bg-blue-200 m-2">
          Clique aqui
        </button>
        <br />
        <p className="m-2">Número Atual: {numero}</p>
      </div>
    </div>
  );
};

export default Page;
