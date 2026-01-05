import Image from "next/image";

interface weekProps {
  day: string;
  src: string;
  tempMin: number;
  tempMax: number;
}

const Week = ({ day, src, tempMin, tempMax }: weekProps) => {
  return (
    <>
      <div className="rounded-md w-[12%] h-45 p-2 text-center text-gray-400 bg-[#25253F] text-[13px]">
        {day}
        <Image src={src} alt="logo" width={200} height={200} className="mt-2" />
        <p className="text-sm flex flex-row mt-4 justify-between items-center">
          <span className="text-white font-semibold">{tempMin}º C</span>
          <span className="text-white font-semibold">{tempMax}º C</span>
        </p>
      </div>
    </>
  );
};

export default Week;
