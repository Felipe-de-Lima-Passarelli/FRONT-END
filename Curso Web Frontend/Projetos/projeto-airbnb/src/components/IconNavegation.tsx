//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//Icones e Componentes
import { Photos } from "@/data/fetchDataApi";

//Next
import Link from "next/link";
import Image from "next/image";

//Type
type iconNavegationProps = {
  icons: Photos[];
};

const IconNavegation = ({ icons }: iconNavegationProps) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      breakpoints={{
        764: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
        1280: { slidesPerView: 9 },
      }}
    >
      {icons.map((icone, indice) => (
        <SwiperSlide key={indice}>
          <Link
            href={icone.url ?? "#"}
            className="flex flex-col items-center hover:text-red-500"
          >
            <Image
              src={icone.source}
              alt={icone.description}
              width={24}
              height={24}
            />
            <span>{icone.description}</span>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default IconNavegation;
