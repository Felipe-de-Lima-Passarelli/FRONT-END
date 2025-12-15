import Imagem from "@/components/Imagem";
import Nav from "@/components/Nav";

const Page = () => {
  return (
    <div>
      <h1>Página de Imagens</h1>
      <Nav />
      <hr />
      <hr />
      <br />
      <Imagem name="ReactJS" src="/img/Logo_React.png" alt="React Logo" />
      <br />
      <Imagem name="Html5" src="/img/Logo_Html.png" alt="Html5 Logo" />
    </div>
  );
};

export default Page;
