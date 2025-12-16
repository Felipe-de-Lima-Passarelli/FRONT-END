//Será criado no globals.css com o @layer components

const Page = () => {
  return (
    <div>
      <h1 className="bg-gray-800 text-5xl p-3 text-white">
        Componentes em Tailwind CSS
      </h1>
      <br />
      <button className="btn-sucess">Sucesso</button>
      <button className="btn-warning">Atenção</button>
      <button className="btn-error">Falha</button>
    </div>
  );
};

export default Page;
