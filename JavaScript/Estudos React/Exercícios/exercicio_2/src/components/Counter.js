import styles from "./Counter.module.css";
import { useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);

  return (
    <>
      <p>
        <strong>
          {num >= 0 ? "Contador Positivo" : "Contador Negativo"}: {num}
        </strong>
      </p>
      <button
        className={styles.buttonStyle}
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Aumentar valor
      </button>
      <button
        className={styles.buttonStyle}
        onClick={() => {
          setNum(num - 1);
        }}
      >
        Diminuir valor
      </button>
    </>
  );
}

export default Counter;
