/*
  Colocar colunas: columns-quantidade
*/

const Page = () => {
  return (
    <div>
      <h1 className="bg-gray-800 text-5xl p-3 text-white">Colunas</h1>
      <br />
      <div className="p-2 columns-3">
        <div className="w-32 h-32 bg-blue-500 border-2">Item 1</div>
        <div className="w-32 h-32 bg-blue-500 border-2">Item 2</div>
        <div className="w-32 h-32 bg-blue-500 border-2">Item 3</div>
        <div className="w-32 h-32 bg-blue-500 border-2">Item 4</div>
        <div className="w-32 h-32 bg-blue-500 border-2">Item 5</div>
        <div className="w-32 h-32 bg-blue-500 border-2">Item 6</div>
      </div>
    </div>
  );
};

export default Page;
