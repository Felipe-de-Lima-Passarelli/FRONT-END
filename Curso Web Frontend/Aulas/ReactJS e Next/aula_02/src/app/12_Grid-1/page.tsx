/*
  Aula 1: 
    Grid: grid
    Colunas do Grid: grid-cols-numero
    Aumentar o tamanho de um grid item: col-span-numero

  Aula 2:
    Responsividade no Grid com sm, md, lg e xl

  Aula 3:
    Alinhamentos Grid: justify-items-stretch (start, end, center e normal) Eixo Principal

    content-stretch (normal, center, start, end, between, around, evenly e baseline)  Eixo Secundário
*/

const Page = () => {
  return (
    <div>
      <h1 className="bg-gray-800 text-5xl p-3 text-white">
        Grid - Colunas e Espaçamentos
      </h1>
      <br />
      <div className="border-2 p-3 m-2 gap-2 grid grid-cols-4">
        <div className="caixa col-span-3">Caixa 1</div>
        <div className="caixa">Caixa 2</div>
        <div className="caixa">Caixa 3</div>
        <div className="caixa">Caixa 4</div>
        <div className="caixa">Caixa 5</div>
        <div className="caixa">Caixa 6</div>
        <div className="caixa">Caixa 7</div>
        <div className="caixa">Caixa 8</div>
        <div className="caixa col-span-2">Caixa 9</div>
      </div>
    </div>
  );
};

export default Page;
