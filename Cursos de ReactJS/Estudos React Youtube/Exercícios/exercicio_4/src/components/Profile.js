import styles from "./Profile.module.css";

function Profile({
  nome = "Usuário",
  biografia = "Nenhuma biografia disponível",
}) {
  return (
    <>
      <h2 className={styles.nameStyle}>Nome: {nome}</h2>
      <p className={styles.pStyle}>Biografia: {biografia}</p>
    </>
  );
}

export default Profile;
