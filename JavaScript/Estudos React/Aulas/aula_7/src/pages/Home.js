import styles from "../components/pages.module.css";

function Home() {
  return (
    <div>
      <h1 className={styles.tituloEstilo}>Home</h1>
      <p className={styles.paragrafoEstilo}>Conteúdo da Página</p>
    </div>
  );
}

export default Home;
