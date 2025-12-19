"use client";

//Icones e Componentes
import { IconAdjustmentsHorizontal } from "../components/Icons";

import { fetchDataProps } from "@/data/fetchDataApi";
import Button from "@/components/Button";

//Next
import IconNavegation from "@/components/IconNavegation";
import Accomodation from "@/components/Accomodation";

const Main = ({ accommodation, icons }: fetchDataProps) => {
  return (
    <main className="container mx-auto">
      <div className="flex flex-row items-center gap-2">
        <IconNavegation icons={icons} />
        <Button
          Icon={IconAdjustmentsHorizontal}
          text="Filtros"
          label="Ícone de Filtro"
          size={32}
        />
      </div>
      <Accomodation accommodation={accommodation} />
    </main>
  );
};

export default Main;
