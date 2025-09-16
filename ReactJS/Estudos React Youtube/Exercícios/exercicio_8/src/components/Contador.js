import styles from "./Contador.module.css";
import { useState } from "react";

function Contador({ num, setNum }) {
  const [valor, setValor] = useState(0);

  function alteraValor(e) {
    setValor(Number(e.target.value));
  }

  function aumentar() {
    setNum(num + valor);
  }

  function diminuir() {
    setNum(num - valor);
  }

  return (
    <>
      <h2>Valor Atual: {num}</h2>
      <input
        type="number"
        className={styles.custom_number_input}
        onChange={alteraValor}
      ></input>
      <br />
      <button className={styles.buttonStyle} onClick={aumentar}>
        Aumentar
      </button>
      <button className={styles.buttonStyle} onClick={diminuir}>
        Diminuir
      </button>
    </>
  );
}

export default Contador;
