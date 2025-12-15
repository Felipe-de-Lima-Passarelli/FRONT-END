"use client";

import Botao from "@/components/Botao";
import Input from "@/components/Input";
import { useState } from "react";

export default function Home() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resposta, setResposta] = useState("");

  const calcular = () => {
    if (peso === "" || altura === "") return;
    let imc = Number(peso) / (Number(altura) * Number(altura));
    imc = Number(imc.toFixed(2));

    if (imc < 18) {
      setResposta("Resultado: Abaixo do peso");
    } else if (imc <= 25) {
      setResposta("Resultado: Peso normal");
    } else {
      setResposta("Resultado: Sobrepeso");
    }

    //Reset dos estados
    setPeso("");
    setAltura("");
  };

  return (
    <div>
      <h1>Cálculo IMC</h1>
      <hr />
      <div className="p-2">
        <h1>Digite seu peso</h1>
        <Input
          type="number"
          placeholder="Digite seu peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <h1>Digite sua altura</h1>
        <Input
          type="number"
          placeholder="Digite sua altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <br />
        <Botao functionProp={calcular} />
        <br />
        <div id="resposta">{resposta && <h1>{resposta}</h1>}</div>
      </div>
    </div>
  );
}
