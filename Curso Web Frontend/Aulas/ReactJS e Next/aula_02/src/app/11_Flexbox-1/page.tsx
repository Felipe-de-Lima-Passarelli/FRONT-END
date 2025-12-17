/*
  Aula 1: 
    Flexbox: flex flex-row/flex-col
    Tamanho do flex item: basis-numero ou basis-fração
    Quebra de linha flex item: flex-nowrap / flex-wrap / flex-wrap-reverse
    Espaçamento entre flex items: gap-numero

  Aula 2:
    Ordem dos flex items: order-numero (Do menor para o maior)
    Crescimento dos flex items: grow (Expande) / grow-0 (Não expande)

    Alinhamentos:
      justify-start (end, center, between, around, evenly, stretch, baseline, normal) -> Eixo principal

      items-stretch (start, end, center, baseline) -> Eixo secundário
*/

const Page = () => {
  return (
    <div>
      <h1 className="bg-gray-800 text-5xl p-3 text-white">
        Flexbox - Direções e Espaçamentos
      </h1>
      <br />
      <div className="border-2 p-3 m-2 flex flex-row flex-wrap gap-10">
        <div className="caixa basis-1/3">Caixa 1</div>
        <div className="caixa basis-1/3">Caixa 2</div>
        <div className="caixa basis-2/7">Caixa 3</div>
      </div>
    </div>
  );
};

export default Page;
