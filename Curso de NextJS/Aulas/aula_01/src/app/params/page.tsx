"use client";

//Next
import { useSearchParams } from "next/navigation";

//Components
import Button from "@/components/Button";

const Page = () => {
  const searchParams = useSearchParams();

  return (
    <div>
      <h1 className="text-2xl font-semibold">Página com parâmetro</h1>
      <br />
      <p className="mb-4">
        Parâmetro recebido:{" "}
        <span className="font-semibold">{searchParams.get("name")}</span>
      </p>
      <Button href="/" text="Home" />
    </div>
  );
};

export default Page;
