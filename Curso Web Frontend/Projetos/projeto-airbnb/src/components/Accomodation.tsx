//Components
import Button from "./Button";

//Next
import Image from "next/image";

//Icone
import { IconHeartFilled, IconStarFilled } from "./Icons";
import { Accommodation } from "@/data/fetchDataApi";
import Link from "next/link";

//Type
type accommodationProps = {
  accommodation: Accommodation[];
};

const Accomodation = ({ accommodation }: accommodationProps) => {
  return (
    <section className="py-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {accommodation.map((acomodacao, indice) => (
        <Link href={acomodacao.slug} key={indice}>
          <figure className="relative">
            <div className="p-2 absolute w-full flex flex-row justify-between items-center">
              <div>
                {acomodacao.hasBadge && (
                  <span className="bg-white rounded-full px-3 py-2 font-semibold">
                    Preferido dos hóspedes
                  </span>
                )}
              </div>

              <Button
                Icon={IconHeartFilled}
                text=""
                label="Ícone de Favorito"
                size={30}
                noBorder
                className
              />
            </div>
            <Image
              className="w-full aspect-square object-cover rounded-xl"
              src={acomodacao.photos[0].source}
              alt={acomodacao.photos[0].description}
              width={300}
              height={300}
            />
            <figcaption className="pt-2">
              <div className="flex flex-row justify-between">
                <span className="font-semibold">
                  {acomodacao.location.description}
                </span>
                <div className="flex flex-row justify-between items-center">
                  <Button
                    Icon={IconStarFilled}
                    text=""
                    label="Ícone de Avaliações"
                    size={20}
                    noBorder
                  />
                  <span className="font-semibold">{acomodacao.rating}</span>
                </div>
              </div>
              <div>
                <div>Anfitriã(o): {acomodacao.host}</div>
                <div>{acomodacao.date}</div>
              </div>
              <div className="font-semibold">
                R$ {acomodacao.price} reais por noite
              </div>
            </figcaption>
          </figure>
        </Link>
      ))}
    </section>
  );
};

export default Accomodation;
