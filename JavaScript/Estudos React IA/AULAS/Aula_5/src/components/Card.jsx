import styles from "./Card.module.css";

const Card = ({ titulo, descricao, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.textos}>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
