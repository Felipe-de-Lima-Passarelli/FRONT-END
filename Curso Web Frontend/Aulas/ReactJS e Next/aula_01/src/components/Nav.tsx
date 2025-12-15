import NavItem from "./NavItem";

const Nav = () => {
  return (
    <div className="bg-gray-400">
      <NavItem text="Home" href="/" />
      <NavItem text="Utilizando Imagens" href="/1_Utilizando-Imagens" />
      <NavItem text="Utilizando Listas" href="/2_Utilizando-Listas" />
      <NavItem text="Children" href="/3_Children" />
      <NavItem text="Componente com Estado" href="/4_Componente-Estado" />
    </div>
  );
};

export default Nav;
