import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
      <NavLink to="/contato">Contato</NavLink>
    </nav>
  );
};

export default Navbar;
