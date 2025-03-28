import styles from "./Card.module.css";

function Card({ title, description }) {
  return (
    <div className={styles.CardStyle}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
