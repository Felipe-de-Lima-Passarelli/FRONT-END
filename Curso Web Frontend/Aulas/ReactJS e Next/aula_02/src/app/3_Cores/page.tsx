/*
  Cores: text-nomeDaCor/Opacidade ou text-[#hex]
  Cores_Fundo: bg-nomeDaCor/Opacidade
  Imagem_Fundo: bg-[url('/favicon.ico')] bg-no-repeat bg-center 
*/

const Page = () => {
  return (
    <div>
      <h1 className="bg-gray-800 text-5xl p-3 text-white">Cores</h1>
      <br />
      <div className="bg-gray-200">
        <h1 className="text-gray-900 font-black">Cor 100 opacidade</h1>
        <h1 className="text-gray-900/75 font-black">Cor 75 opacidade</h1>
        <h1 className="text-gray-900/50 font-black">Cor 50 opacidade</h1>
        <h1 className="text-gray-900/25 font-black">Cor 25 opacidade</h1>
        <br />
        <h1 className="text-[#32c8d3] font-black">Cor com hexadecimal</h1>
      </div>
      <br />
      <h1
        className="bg-gray-800 text-5xl p-3 text-white h-70
      bg-[url('/favicon.ico')]
      bg-no-repeat
      bg-center"
      >
        Fundo com Imagem
      </h1>
    </div>
  );
};

export default Page;
