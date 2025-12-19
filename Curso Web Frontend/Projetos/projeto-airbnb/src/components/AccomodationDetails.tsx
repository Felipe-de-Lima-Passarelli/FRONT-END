//Icones
import {
  IconPhoto,
  IconToolsKitchen2,
  IconDesk,
  IconPool,
  IconBrandCarbon,
  IconSailboat,
  IconWifi,
  IconParking,
  IconDog,
  IconAlarmSmoke,
} from "./Icons";

//Components
import Button from "./Button";

//li Style
const styleLi = "flex flex-row gap-1.5";

//Type
import { Accommodation } from "@/data/fetchDataApi";

interface AccomodationDetailsProps {
  actualAccommodation: Accommodation;
}

const AccomodationDetails = ({
  actualAccommodation,
}: AccomodationDetailsProps) => {
  return (
    <div className="py-4 w-full">
      <h2 className="text-xl font-semibold">{actualAccommodation.title}</h2>
      <ul className="flex flex-row gap-2">
        <li>10 hóspedes</li>
        <>&middot;</>
        <li>5 quartos</li>
        <>&middot;</>
        <li>5 camas</li>
        <>&middot;</>
        <li>6 banheiros</li>
      </ul>
      <h2 className="text-xl font-semibold pt-4">O que esse lugar oferece?</h2>
      <ul className="py-6 grid grid-cols-2 items-center gap-y-6">
        <li className={styleLi}>
          <Button
            Icon={IconPhoto}
            text="Vista para as montanhas"
            label="Ícone de Montanha"
            size={25}
            noBorder
          />
        </li>
        <li className={styleLi}>
          <Button
            Icon={IconToolsKitchen2}
            text="Cozinha"
            label="Ícone de Cozinha"
            size={25}
            noBorder
          />
        </li>
        <li className={styleLi}>
          <Button
            Icon={IconDesk}
            text="Espaço de trabalho exclusivo"
            label="Ícone de Mesa"
            size={25}
            noBorder
          />
        </li>
        <li className={styleLi}>
          <Button
            Icon={IconPool}
            text="Piscina privativa"
            label="Ícone de Piscina"
            size={25}
            noBorder
          />
        </li>
        <li className={styleLi}>
          <Button
            Icon={IconBrandCarbon}
            text="Alarme de segurança p/gás"
            label="Ícone de Segurança"
            size={25}
            noBorder
          />
        </li>
        <li className={styleLi}>
          <Button
            Icon={IconSailboat}
            text="Vista para as águas"
            label="Ícone de água"
            size={25}
            noBorder
          />
        </li>
        <li className={styleLi}>
          <Button
            Icon={IconWifi}
            text="Wi-Fi rápido (83 Mbps)"
            label="Ícone de Wi-Fi"
            size={25}
            noBorder
          />
        </li>
        <li className={styleLi}>
          <Button
            Icon={IconParking}
            text="Estacionamento incluso"
            label="Ícone de Estacionamento"
            size={25}
            noBorder
          />
        </li>
        <li className={styleLi}>
          <Button
            Icon={IconDog}
            text="Permitido animais"
            label="Ícone de Cachorro"
            size={25}
            noBorder
          />
        </li>
        <li className={styleLi}>
          <Button
            Icon={IconAlarmSmoke}
            text="Detector de fumaça"
            label="Ícone de detector de fumaça"
            size={25}
            noBorder
          />
        </li>
      </ul>
    </div>
  );
};

export default AccomodationDetails;
