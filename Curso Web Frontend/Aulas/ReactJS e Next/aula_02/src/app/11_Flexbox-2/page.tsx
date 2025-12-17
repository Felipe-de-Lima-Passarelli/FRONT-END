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
        Flexbox - Ordem, Crescimento e Alinhameno
      </h1>
      <br />
      <div className="border-2 p-3 m-2 flex flex-row flex-wrap gap-10 h-50  justify-center items-center">
        <div className="caixa order-1 basis-1/6 text-center">Caixa 1</div>
        <div className="caixa order-2 basis-1/6 text-center">Caixa 2</div>
        <div className="caixa order-3 basis-1/6 text-center">Caixa 3</div>
      </div>
    </div>
  );
};

export default Page;
