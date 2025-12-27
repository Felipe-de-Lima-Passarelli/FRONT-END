//Next
import NavBar from "@/components/NavBar";
import Link from "next/link";

const Page = () => {
  return (
    <div className="my-4 mx-2">
      <h1 className="text-2xl font-semibold">Página Sobre</h1>
      <div>
        <h2 className="my-2">Módulo 1 - Navegação Estática</h2>
        <Link
          href="/"
          className="bg-gray-700 p-2 rounded-full text-white font-semibold hover:bg-gray-500"
        >
          Home
        </Link>
      </div>
      <NavBar />
    </div>
  );
};

export default Page;
