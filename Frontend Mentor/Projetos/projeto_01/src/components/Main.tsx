// Next
import Image from "next/image";
import StatsCity from "./StatsCity";
import Week from "./Week";

interface MainProps {
  actualCity: string;
  icon: string;
  temp: number;
  feelsTemp: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  datas: string[];
  nameIcon: string[];
  tempMin: number[];
  tempMax: number[];
}

const Main = ({
  actualCity,
  icon,
  temp,
  feelsTemp,
  humidity,
  windSpeed,
  precipitation,
  datas,
  nameIcon,
  tempMin,
  tempMax,
}: MainProps) => {
  const today = new Date();

  // Data formatada atual
  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  }).format(today);

  // Nomes dos dias da semana para a previsão
  const nomesDias = datas.map((dataStr) => {
    const data = new Date(dataStr + "T00:00:00");
    return new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      timeZone: "America/Sao_Paulo",
    }).format(data);
  });

  return (
    <main className="m-auto w-250 mt-10">
      <div className="flex flex-col relative">
        <Image
          src="/img/bg-today-large.svg"
          alt="logo"
          width={1000}
          height={1000}
        />
        <div className="relative -top-53 left-10 text-4xl font-semibold">
          <h2 id="title">{actualCity || "Loading..."}</h2>
          <p className="opacity-50 text-xl">{formattedDate}</p>
          <Image
            src={`/img/${icon || "icon-sunny"}.webp`}
            alt="weather icon"
            width={200}
            height={200}
            className="relative -top-35 left-140"
          />
          <p className="absolute -top-2 left-190 text-7xl">
            {temp != null ? temp.toFixed(0) : "-"} º
          </p>
        </div>

        {/* Estatísticas */}
        <div className="flex flex-row justify-between absolute top-100 w-full">
          <StatsCity
            text="Feels Like"
            value={feelsTemp != null ? Number(feelsTemp.toFixed(0)) : 0}
            symbol="º C"
          />
          <StatsCity text="Humidity" value={humidity ?? 0} symbol="%" />
          <StatsCity
            text="Wind"
            value={windSpeed != null ? Number(windSpeed.toFixed(1)) : 0}
            symbol="km/h"
          />
          <StatsCity
            text="Precipitation"
            value={precipitation != null ? Number(precipitation.toFixed(1)) : 0}
            symbol="mm"
          />
        </div>

        {/* Previsão semanal */}
        <div className="flex flex-row justify-between gap-4 mt-8">
          {nomesDias.map((day, index) => (
            <Week
              key={index}
              day={day || "loading..."}
              src={`/img/${nameIcon[index] || "icon-sunny"}.webp`}
              tempMin={Number(tempMin[index]?.toFixed(0)) ?? 0}
              tempMax={Number(tempMax[index]?.toFixed(0)) ?? 0}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
