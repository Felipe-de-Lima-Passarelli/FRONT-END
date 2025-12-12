const Acomodacao = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div>
      <span>Imagem Acomodação</span>
      <h1>{title}</h1>
      <p>Desc. {desc}</p>
    </div>
  );
};

export default Acomodacao;
