/*
  Para aplicar a borda geral: border-numeroEspessura
  Para aplicar a borda top: border-t-numeroEspessura
  Para aplicar a borda right: border-r-numeroEspessura
  Para aplicar a borda bottom: border-b-numeroEspessura
  Para aplicar a borda left: border-l-numeroEspessura
  Para aplicar a borda no topo e em baixo: border-y-numeroEspessura
  Para aplicar a borda na direita e esquerda: border-x-numeroEspessura

  Cor na borda: border-nomeCor

  Borda circular: rounded-sm (md, xl, 2xl)

  Estilo daa borda: border-nomeEstilo (solid, dashed, dotted, etc)
*/

const Page = () => {
  return (
    <div>
      <h1 className="bg-gray-800 text-5xl p-3 text-white">Bordas</h1>
      <br />
      <div className="m-8 border-2 border-red-900 rounded-md border-solid">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
        Consectetur similique nisi reiciendis ab vero veniam enim <br />
        asperiores a corporis, saepe adipisci? Magni hic inventore <br />
        nulla facilis molestiae quo quis! Quibusdam.
      </div>
      <br />
      <div className="m-8 border-4 border-green-900 rounded-md border-double">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
        Consectetur similique nisi reiciendis ab vero veniam enim <br />
        asperiores a corporis, saepe adipisci? Magni hic inventore <br />
        nulla facilis molestiae quo quis! Quibusdam.
      </div>
    </div>
  );
};

export default Page;
