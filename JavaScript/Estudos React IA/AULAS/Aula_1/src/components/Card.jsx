import styles from "./Card.module.css";

const Card = ({ nome, curso, objetivo, frase }) => {
  return (
    <div className={styles.Card}>
      <h2>{nome}</h2>
      <img
        className={styles.Image}
        src="https://ui-avatars.com/api/?name=Felipe+Passarelli"
        alt="Meu avatar"
      />
      <p>
        <strong>Curso Atual: </strong>
        {curso}
        <br />
        <strong>Objetivo Profissional: </strong>
        {objetivo}
        <br />
        <strong>Frase motivacional: </strong>
        {frase}
      </p>
    </div>
  );
};

export default Card;
