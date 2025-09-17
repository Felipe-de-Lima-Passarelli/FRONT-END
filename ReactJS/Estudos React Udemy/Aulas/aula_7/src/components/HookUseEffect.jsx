import { useEffect, useState } from "react";

const HookUseEffect = () => {
  //useEffect sem dependências
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(0);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  //useEffect com dependências vazias
  useEffect(() => {
    console.log("Serei executado apenas uma vez!");
  }, []);

  //useEffect com dependências
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    console.log("Sou executado apenas quando o outro número muda!");
  }, [anotherNumber]);

  //useEffect com cleanup
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Olá, Mundo!");
    }, 2000);

    return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Número atual: {number}</p>
      <button onClick={changeNumber}>Executar!</button>
      <p>Outro número: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar outro número
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
