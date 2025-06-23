import styles from "./Botao.module.css";

const Botao = ({
  texto,
  onClick,
  cor = "blue",
  tipo = "button",
  disabled = false,
}) => {
  return (
    <button
      type={tipo}
      className={`${styles.botao} ${styles[cor]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {texto}
    </button>
  );
};

export default Botao;
