//Next
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = () => {
  const user = false; //Simulação de banco de dados

  if (!user) {
    redirect("/");
  }

  return (
    <div className="m-2">
      <h1 className="mb-2">Página do seu Perfil</h1>
      <Link
        href="/"
        className="bg-gray-700 p-2 rounded-full text-white font-semibold hover:bg-gray-500"
      >
        Home
      </Link>
    </div>
  );
};

export default Page;
