interface AcomodacaoProps {
  title: string;
  desc: string;
}

const Acomodacao = ({ title, desc }: AcomodacaoProps) => {
  return (
    <div>
      <span>Imagem Acomodação</span>
      <h1>{title}</h1>
      <p>Desc. {desc}</p>
    </div>
  );
};

export default Acomodacao;
