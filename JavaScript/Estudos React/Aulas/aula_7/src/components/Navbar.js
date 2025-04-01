import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className={styles.listaStyle}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/empresa">Empresa</Link>
      </li>
      <li>
        <Link to="/contato">Contato</Link>
      </li>
    </ul>
  );
}

export default Navbar;
