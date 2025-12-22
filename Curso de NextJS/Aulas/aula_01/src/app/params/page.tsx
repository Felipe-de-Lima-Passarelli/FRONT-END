"use client";

//Next
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();

  return (
    <div>
      <h1>Página com parâmetro</h1>
      <p>Parâmetro recebido: {searchParams.get("name")}</p>
    </div>
  );
};

export default Page;
