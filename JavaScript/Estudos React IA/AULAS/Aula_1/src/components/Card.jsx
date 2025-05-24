import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.Card}>
      <h2>Felipe de Lima Passarelli</h2>
      <img
        src="https://ui-avatars.com/api/?name=Felipe+Passarelli"
        alt="Meu avatar"
      />
      <p>
        <strong>Curso Atual: </strong>Análise e Desenvolvimento de Sistemas
        <br />
        <strong>Objetivo Profissional: </strong>Conquistar a primeira vaga na
        área de TI
        <br />
        <strong>Frase motivacional: </strong>Be better
      </p>
    </div>
  );
};

export default Card;
