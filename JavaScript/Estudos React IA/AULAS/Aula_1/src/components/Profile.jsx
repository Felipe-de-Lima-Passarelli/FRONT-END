import { useState } from "react";
import styles from "./Card.module.css";

const Profile = ({ nome, curso, objetivo, frase }) => {
  const [fraseNova, setFraseNova] = useState(frase);
  let novo;

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
        {fraseNova}
      </p>
      <input type="text" onChange={(e) => (novo = e.target.value)} />
      <button
        onClick={() => setFraseNova(novo.trim() === "" ? "Input vazio" : novo)}
      >
        Mudar frase
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          const backgroundColor = getComputedStyle(
            document.body
          ).backgroundColor;

          if (backgroundColor === "rgb(36, 36, 36)") {
            document.body.style.backgroundColor = "#ffffff";
          } else {
            document.body.style.backgroundColor = "#242424";
          }
        }}
      >
        Mudar cor de fundo
      </button>
    </div>
  );
};

export default Profile;
