import styles from "./UserStatus.module.css";

function UserStatus({ isLoggedIn, setIsLoggedIn }) {
  function changeLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <>
      <p className={styles.pStyle}>
        {isLoggedIn ? "Bem-vindo, usuário" : "Por favor, faça login."}
      </p>
      <button className={styles.buttonStyle} onClick={changeLogin}>
        {isLoggedIn ? "Sair" : "Fazer Login"}
      </button>
    </>
  );
}

export default UserStatus;
