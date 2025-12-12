import Image from "next/image";

const Imagem = ({
  name,
  src,
  alt,
}: {
  name: string;
  src: string;
  alt: string;
}) => {
  return (
    <div>
      <h2 className="text-blue-300">{name}</h2>
      {/* Atributo Image é obrigatório parâmetro src, alt, width e height */}
      <Image src={src} alt={alt} width={200} height={500} />
    </div>
  );
};

export default Imagem;
