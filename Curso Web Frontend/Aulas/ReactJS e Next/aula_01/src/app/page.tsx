import Acomodacao from "@/components/Acomodacao";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <h1 className="meuTexto">Fundamentos do ReactJS - Aulas</h1>
      <Nav />
      <Acomodacao title="Cândido Mota" desc="Perto de Assis" />
    </>
  );
}
