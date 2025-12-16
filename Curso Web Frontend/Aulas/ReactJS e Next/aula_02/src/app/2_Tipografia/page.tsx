/*
  Fontes: "font-nome"

  Tamanho_Fonte: "text-tamanho" ou "text-[??px]"

  Estilo_Fonte: "italic" / "not-italic"

  Espessura_Fonte: "font-thin" -> extraligth / ligth / normal /medium / semibold / bold / extrabold / black
*/

const Page = () => {
  return (
    <div>
      <h1 className="bg-gray-700 text-5xl p-3 text-white">Tipografia</h1>
      <br />
      <div className="m-3">
        <h1 className="font-sans">Título 01</h1>
        <h1 className="font-serif">Título 02</h1>
        <h1 className="font-mono">Título 03</h1>
        <h1 className="text-2xl">Título 04</h1>
        <h1 className="text-[40px]">Título 05</h1>
        <h1 className="italic">Título 06</h1>
        <h1 className="font-black">Título 07</h1>
        <br />
        <h1 className="text-left">Esquerda</h1>
        <h1 className="text-center">Centro</h1>
        <h1 className="text-right">Direita</h1>
      </div>
    </div>
  );
};

export default Page;
