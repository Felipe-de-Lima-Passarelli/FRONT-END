//API Key
const apiKey = "d7367f3bbed21c0a06d522b0eb892f59";

//form
const form = document.getElementById("form");

//Search Input
const search_input = document.getElementsByClassName("search_city")[0];

//Search Button
const img_search = document.getElementsByClassName("img_search")[0];

//Sky Image
const sky_image = document.getElementsByClassName("sky_image")[0];

//Span Temperature
const temperature = document.getElementsByClassName("temperature")[0];

//Span Name
const nameCity = document.getElementsByClassName("city_name")[0];

//Span Humidity
const humidity = document.getElementsByClassName("humidity_percent")[0];

//Span WindSpeed
const wind_speed = document.getElementsByClassName("wind_speed")[0];

async function weatherAPI(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
  const response = await fetch(url);
  if (response.status === 404) {
    return undefined;
  } else {
    const data = await response.json();
    return data;
  }
}

async function searchCity(city) {
  const data = await weatherAPI(city || search_input.value.toLowerCase());

  if (data === undefined) {
    temperature.innerHTML = "??º C";
    nameCity.innerHTML = "Not Found";
    humidity.innerHTML = `?? %`;
  } else {
    temperature.innerHTML = `${Math.round(data.main.temp)}º C`;
    nameCity.innerHTML = data.name;
    humidity.innerHTML = `${Math.round(data.main.humidity)} %`;
    wind_speed.innerHTML = `${data.wind.speed} Km/h`;

    const id = data.weather[0].id;

    if (id === 800) sky_image.src = "img/clear.png";
    else if (id >= 300 && id <= 321) sky_image.src = "img/drizzle.png";
    else if (id >= 500 && id <= 531) sky_image.src = "img/rain.png";
    else if (id >= 600 && id <= 622) sky_image.src = "img/snow.png";
    else sky_image.src = "img/cloud.png";
  }

  //Input Clear
  search_input.value = "";
}

async function formSubmit(e) {
  e.preventDefault();
  searchCity(e.target.value);

  //Clear Input
  search_input.value = "";
}

img_search.addEventListener("click", () => searchCity());
form.addEventListener("submit", formSubmit);

//Inicial Default City
const defaultCity = async () => {
  const data = await weatherAPI("Brasilia");
  searchCity("Brasilia");
};

defaultCity();
