const StatsCity = ({
  text,
  symbol,
  value,
}: {
  text: string;
  symbol: string;
  value: number;
}) => {
  return (
    <div className="rounded-md w-[23%] h-35 p-5 text-gray-400 bg-[#25253F] text-sl">
      {text}
      <p className="font-semibold mt-10 text-4xl text-white">
        {value} {symbol}
      </p>
    </div>
  );
};

export default StatsCity;
