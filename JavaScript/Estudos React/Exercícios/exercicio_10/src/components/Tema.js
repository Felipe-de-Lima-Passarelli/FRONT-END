import styles from "./Tema.module.css";

function Tema() {
  function mudarCorFundo(cor, texto) {
    let x = document.querySelector("body");
    let y = document.querySelector("h2");
    x.style.backgroundColor = cor;
    y.style.color = texto;
  }

  return (
    <>
      <button
        className={styles.buttonStyle}
        onClick={() => mudarCorFundo("white", "black")}
      >
        Tema Claro
      </button>
      <button
        className={styles.buttonStyle}
        onClick={() => mudarCorFundo("black", "white")}
      >
        Tema Escuro
      </button>
    </>
  );
}

export default Tema;
