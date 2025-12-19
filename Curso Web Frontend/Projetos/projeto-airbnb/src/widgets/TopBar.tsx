//Components
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import Button from "@/components/Button";

//Icones
import { IconUserCircle } from "../components/Icons";

const TopBar = () => {
  return (
    <div className="py-6 flex flex-row justify-between items-center">
      <Logo />
      <Menu />
      <Button
        Icon={IconUserCircle}
        text="Entrar"
        label="Ícone de Usuário"
        size={32}
      />
    </div>
  );
};

export default TopBar;
