import styles from "./Tema.module.css";

function Tema() {
  function mudaCorFundo(corFundo, corTexto) {
    let tela = document.querySelector("body");
    let texto = document.querySelector("h2");
    tela.style.backgroundColor = corFundo;
    texto.style.color = corTexto;
  }

  return (
    <>
      <button
        className={styles.buttonStyle}
        onClick={() => {
          mudaCorFundo("white", "black");
        }}
      >
        Modo LIGHT
      </button>
      <button
        className={styles.buttonStyle}
        onClick={() => {
          mudaCorFundo("black", "white");
        }}
      >
        Modo DARK
      </button>
    </>
  );
}

export default Tema;
