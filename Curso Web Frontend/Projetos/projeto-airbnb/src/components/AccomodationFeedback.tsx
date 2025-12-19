//Icones
import { IconStarFilled } from "./Icons";

//components
import Button from "./Button";

//Next
import Image from "next/image";

//Type
import { Accommodation } from "@/data/fetchDataApi";

interface AccomodationFeedbackProps {
  actualAccommodation: Accommodation;
}

const AccomodationFeedback = ({
  actualAccommodation,
}: AccomodationFeedbackProps) => {
  const feedBacks = actualAccommodation.testimonials;
  return (
    <div className="py-4 w-full">
      <h2 className="text-xl font-semibold py-6">Depoimentos</h2>
      <div className="flex flex-row items-center gap-2">
        <Button
          Icon={IconStarFilled}
          text=""
          label="Ícone de Estrela"
          size={20}
          noBorder
        />
        <span>{actualAccommodation.rating} (400+ avaliações)</span>
      </div>
      {feedBacks.map((feedback, indice) => (
        <div key={indice} className="flex flex-row items-start gap-2 py-4">
          <Image
            className="aspect-square object-cover rounded-full"
            src={feedback.image}
            alt={feedback.name}
            width={48}
            height={48}
          />
          <div>
            <span className="text-md font-semibold">{feedback.name}</span>
            <p>{feedback.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccomodationFeedback;
