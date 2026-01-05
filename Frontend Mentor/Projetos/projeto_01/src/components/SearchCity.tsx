"use client";

//Next
import { useState, useEffect } from "react";

//Icons
import { IconSearch } from "@tabler/icons-react";

//Components
import Main from "./Main";

function getWeatherIcon(weatherCode: number): string {
  if (weatherCode === 0) return "icon-sunny";
  if (weatherCode === 1) return "icon-partly-cloudy";
  if (weatherCode === 2 || weatherCode === 3) return "icon-overcast";
  if (weatherCode === 45 || weatherCode === 48) return "icon-fog";
  if ([51, 53, 55, 56, 57].includes(weatherCode)) return "icon-drizzle";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode))
    return "icon-rain";
  if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) return "icon-snow";
  if ([95, 96, 99].includes(weatherCode)) return "icon-storm";

  // Padrão caso o código seja desconhecido
  return "icon-sunny";
}

const SearchCity = () => {
  async function getWeatherByCity(cidade: string) {
    // 1. Geocoding
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        cidade
      )}&count=1&language=pt&format=json`
    );
    const geoData = await geoRes.json();

    if (!geoData.results) {
      setCity("");
      throw new Error("Cidade não encontrada");
    }

    const { latitude, longitude } = geoData.results[0];

    // 2. Previsão do tempo
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,apparent_temperature,precipitation,relativehumidity_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,weathercode&forecast_days=7&timezone=auto`
    );

    const weatherData = await weatherRes.json();
    setIcon(getWeatherIcon(weatherData.current_weather.weathercode));
    setTemp(weatherData.current_weather.temperature);
    setFeelsTemp(weatherData.hourly.apparent_temperature[0]);
    setHumidity(weatherData.hourly.relativehumidity_2m[0]);
    setWindSpeed(weatherData.current_weather.windspeed);
    setPrecipitation(weatherData.hourly.precipitation[0]);

    setDatas(weatherData.daily.time);

    const iconsName = weatherData.daily.weathercode.map((number: number) =>
      getWeatherIcon(number)
    );

    setNameIcon(iconsName);

    const temperatureMin = weatherData.daily.apparent_temperature_min;

    setTempMin(temperatureMin);

    const temperatureMax = weatherData.daily.apparent_temperature_max;

    setTempMax(temperatureMax);

    console.log(weatherData);
    setActualCity(cidade);
    setCity("");
  }

  function formSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    getWeatherByCity(city);
  }

  const [city, setCity] = useState("");
  const [actualCity, setActualCity] = useState("");
  const [icon, setIcon] = useState("icon-sunny");
  const [temp, setTemp] = useState(0);
  const [feelsTemp, setFeelsTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [precipitation, setPrecipitation] = useState(0);
  const [nameIcon, setNameIcon] = useState<string[]>([]);
  const [datas, setDatas] = useState([]);
  const [tempMin, setTempMin] = useState<number[]>([]);
  const [tempMax, setTempMax] = useState<number[]>([]);

  //Iniciar o site com a previsão de Curitiba
  useEffect(() => {
    getWeatherByCity("Curitiba");
  }, []);

  return (
    <>
      <form onSubmit={formSubmit} className="text-center">
        <div className="relative inline-block mr-5">
          <input
            type="text"
            placeholder="Search for a place..."
            onChange={(e) => setCity(e.target.value)}
            value={city}
            className="w-100 h-15 pl-10 bg-[#25253F] rounded-md"
          />
          <IconSearch stroke={2} className="absolute top-4 left-1" />
        </div>
        <button
          type="submit"
          className="cursor-pointer bg-blue-500 text-white font-semibold py-4 px-10 rounded-md"
        >
          Search
        </button>
      </form>
      <Main
        actualCity={actualCity}
        icon={icon}
        temp={temp}
        feelsTemp={feelsTemp}
        humidity={humidity}
        windSpeed={windSpeed}
        precipitation={precipitation}
        datas={datas}
        nameIcon={nameIcon}
        tempMin={tempMin}
        tempMax={tempMax}
      />
    </>
  );
};

export default SearchCity;
