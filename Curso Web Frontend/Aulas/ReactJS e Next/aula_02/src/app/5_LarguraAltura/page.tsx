/*
  Largura/Width: w-numero ou w-1/2 (50% da tela)
  Altura/Heigth: h-numero ou h-1/2 (50% da tela)

  Ambos: size-numero
*/

const Page = () => {
  return (
    <div>
      <h1 className="bg-gray-800 text-5xl p-3 text-white">Largura e Altura</h1>
      <br />
      <div className="bg-blue-300 p-8 rounded-md w-1/2">Caixa 1</div>
      <br />
      <div className="bg-blue-500 p-8 rounded-md w-2/3">Caixa 2</div>
      <br />
      <div className="bg-blue-500 p-8 rounded-md size-100">Caixa 3</div>
    </div>
  );
};

export default Page;
