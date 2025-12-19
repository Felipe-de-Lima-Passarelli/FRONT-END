//Next
import Image from "next/image";

type picture = {
  id: string;
  source: string;
  description: string;
};

interface galeriaProps {
  pictures: picture[];
}

const Galeria = ({ pictures }: galeriaProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
      {pictures.slice(0, 9).map((picture, indice) => {
        const firstPicture = indice == 0 ? "col-span-2 row-span-2" : "";

        return (
          <div key={indice} className={`border-2 ${firstPicture}`}>
            <Image
              className="w-full aspect-square object-cover"
              src={picture.source}
              alt={picture.description}
              width={1280}
              height={720}
              priority={indice === 0}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Galeria;
