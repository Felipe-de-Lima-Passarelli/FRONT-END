//Next
import Link from "next/link";

//Components
import NavData from "@/components/NavData";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Página Home</h1>
      {/* Módulo 1 - Navegação */}
      <div className="my-4 mx-2">
        <h2 className="my-2">Navegação Estática</h2>
        <Link
          href="/about"
          className="bg-gray-700 p-2 rounded-full text-white font-semibold hover:bg-gray-500"
        >
          Sobre
        </Link>

        {/* Módulo 2 - Navegação Dinâmica */}
        <div className="mt-2">
          <NavData />
        </div>
      </div>
      {/* Módulo 3 - N */}
      <div className="mx-2 my-10">
        <h2>Teste</h2>
      </div>
    </div>
  );
}
