//Next
import Link from "next/link";

const EstaticNav = () => {
  return (
    <>
      <h2 className="my-2">Módulo 1 - Navegação Estática</h2>
      <Link
        href="/about"
        className="bg-gray-700 p-2 rounded-full text-white font-semibold hover:bg-gray-500"
      >
        Sobre
      </Link>
    </>
  );
};

export default EstaticNav;
