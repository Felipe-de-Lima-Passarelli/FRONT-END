//Next
import Link from "next/link";

//Components
import NavData from "@/components/NavData";
import ParamURL from "@/components/ParamURL";
import EstaticNav from "@/components/EstaticNav";
import NestedRoutes from "@/components/NestedRoutes";

export default function Home() {
  return (
    <div className="my-4 mx-2">
      <Link href="/">
        <h1 className="text-2xl font-semibold">Página Home</h1>
      </Link>

      {/* Módulo 1 - Navegação Estática */}
      <EstaticNav />

      {/* Módulo 2 - Navegação Dinâmica */}
      <NavData />

      {/* Módulo 3 - Parâmetros na URL */}
      <ParamURL />

      {/* Módulo 4 - Nested Routes */}
      <NestedRoutes />

      {/* Módulo 5 - Teste */}
    </div>
  );
}
