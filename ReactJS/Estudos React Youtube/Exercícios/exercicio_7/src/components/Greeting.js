import styles from "./Greeting.module.css";

function Greeting({ hour }) {
  if (hour >= 5 && hour < 12) {
    return (
      <>
        <p className={styles.pStyle}>Bom Dia!</p>
        <br />
      </>
    );
  } else if (hour >= 12 && hour < 18) {
    return (
      <>
        <p className={styles.pStyle}>Boa Tarde!</p>
        <br />
      </>
    );
  } else {
    return (
      <>
        <p className={styles.pStyle}>Boa Noite!</p>
        <br />
      </>
    );
  }
}

export default Greeting;
