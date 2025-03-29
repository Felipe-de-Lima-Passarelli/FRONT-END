import styles from "./MultiCounter.module.css";

function MultiCounter({ num, setNum }) {
  function diminuir() {
    if (num !== 0) return setNum(num - 5);
  }

  return (
    <>
      <h2>{num}</h2>
      <button className={styles.buttonStyle} onClick={() => setNum(num + 5)}>
        Aumentar 5
      </button>
      <button className={styles.buttonStyle} onClick={diminuir}>
        Diminuir 5
      </button>
      <button className={styles.buttonStyle} onClick={() => setNum(0)}>
        Resetar
      </button>
    </>
  );
}

export default MultiCounter;
