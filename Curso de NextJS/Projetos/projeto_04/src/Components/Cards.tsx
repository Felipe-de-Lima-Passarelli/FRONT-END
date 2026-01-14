//Next
import Image from "next/image";

//Interface
interface cardsProps {
  title: string;
  img: string;
  color: string;
}

const Cards = ({ title, img, color }: cardsProps) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="p-3 text-2xl font-semibold relative h-50 overflow-hidden rounded-xl"
    >
      <h1>{title}</h1>
      <Image
        src={img}
        alt="Podcast logo"
        width={110}
        height={100}
        className="absolute -right-[9%] bottom-[2%] rotate-25"
      />
    </div>
  );
};

export default Cards;
