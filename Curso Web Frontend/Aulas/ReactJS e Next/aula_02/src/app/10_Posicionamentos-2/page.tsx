/*
  Posicionamentos:
  static e relative (aula 1)
  absolute fixed e sticky (aula 2)

  Posição estática: static (Posição normal)
  Posição estática: relative (Posição relativa de onde estava antes)
  Posição estática: absolute (Posição absoluta baseado na div pai)
  Posição estática: fixed (Posição fixa baseado na tela do navegador)
  Posição estática: sticky (Parecido com fixed, mas fixa após encostar)
*/

const Page = () => {
  return (
    <div>
      <h1 className="bg-gray-800 text-5xl p-3 text-white">
        Posicionamento absolute, fixed e sticky
      </h1>
      <br />
      <div>
        <p className="bg-orange-400 m-2">
          ITEM DE DESTAQUE Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Laborum commodi obcaecati <br />
          necessitatibus odit inventore porro expedita <br />
          recusandae quisquam vel ipsa pariatur quisquam.
        </p>
        <p className="bg-purple-400 m-2 absolute bottom-0 left-0 right-0">
          ITEM 1 <span className="font-black">(POSIÇÃO ABSOLUTA)</span> Lorem
          ipsum dolor sit <br />
          amet consectetur adipisicing elit. Laborum <br />
          commodi obcaecati necessitatibus odit inventore <br />
          porro expedita recusandae quisquam vel ipsa pariatur quisquam.
        </p>
        <p className="bg-gray-400 m-2 fixed top-18 left-0 right-0">
          ITEM 2 Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Laborum commodi obcaecati <br />
          necessitatibus odit inventore porro expedita <br />
          recusandae quisquam vel ipsa pariatur quisquam.
        </p>
      </div>
    </div>
  );
};

export default Page;
