"use client";

//Next
import { useParams } from "next/navigation";

//Components
import Button from "@/components/Button";

const Page = () => {
  const { category } = useParams();

  return (
    <div className="m-2">
      <h1 className="text-2xl font-semibold mb-2">Pasta de Categorias</h1>
      <p className="text-xl mb-4">
        Categoria atual: <span className="font-semibold">{category}</span>
      </p>
      <Button href="/" text="Home" />
    </div>
  );
};

export default Page;
