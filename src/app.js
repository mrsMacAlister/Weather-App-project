function showTime(time) {
  let currentHour = time.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = time.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let currentTime = `${currentHour}:${currentMinutes}`;
  console.log(currentTime);

  return currentTime;
}

let timeElement = document.querySelector("#time");
let currentTime = new Date();
timeElement.innerHTML = showTime(currentTime);

function showDay(day) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[day.getDay()];

  return currentDay;
}

let dayElement = document.querySelector("#day");
let currentDay = new Date();
dayElement.innerHTML = showDay(currentDay);

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search");
  city = city.value;
  console.log(city);
  city = city.trim();

  let cityCaps = city.charAt(0).toUpperCase() + city.slice(1);
  //city.innerHTML = cityCaps;
  let cityName = document.querySelector("#city");
  cityName.innerHTML = cityCaps;

  let units = `metric`;
  let apiKey = `4c09ae07987b07a4993b3f7e761af71d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityCaps}&appid=${apiKey}&units=${units}`;
  //https://api.openweathermap.org/data/2.5/weather?q=Taipei&appid=4c09ae07987b07a4993b3f7e761af71d&units=metric`;

  axios.get(apiUrl).then(showTemp);
}

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", searchCity);

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = temperature;

  let weather = response.data.weather[0].main; //(sky)
  let currentWeather = document.querySelector("#sky");
  currentWeather.innerHTML = weather;
  console.log(weather);
  let humidity = response.data.main.humidity;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = humidity;
  let windSpeed = Math.round(response.data.wind.speed);
  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = windSpeed;
  let windUnit = document.querySelector("#windUnit");
  windUnit.innerHTML = `km/h`;
  let weatherIcon = document.querySelector("#big-icon");
  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  weatherIcon.setAttribute("alt", response.data.weather[0].description);

  let country = response.data.sys.country;

  let currentCountry = document.querySelector("#country");
  currentCountry.innerHTML = country;

  let colorC = document.querySelector("#celsius");
  colorC.style.color = "#0d6efd";

  let colorF = document.querySelector("#fahrenheits");
  colorF.style.color = `rgba(0, 0, 0, 0.8)`;

  //showTime();
  //showDay();
}

function clickFahrenheits(response) {
  let city = document.querySelector("#city");
  city = city.innerHTML;
  let units = `imperial`;
  let apiKey = `4c09ae07987b07a4993b3f7e761af71d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showFahrenheits);
}
function showFahrenheits(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = temperature;

  let weather = response.data.weather[0].main; //(sky)
  let currentWeather = document.querySelector("#sky");
  currentWeather.innerHTML = weather;
  console.log(weather);
  let humidity = response.data.main.humidity;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = humidity;
  let windSpeed = Math.round(response.data.wind.speed);
  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = windSpeed;
  let windUnit = document.querySelector("#windUnit");
  windUnit.innerHTML = `mph`;
  let weatherIcon = document.querySelector("#big-icon");
  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  weatherIcon.setAttribute("alt", response.data.weather[0].description);

  let colorF = document.querySelector("#fahrenheits");
  colorF.style.color = "#0d6efd";
  //colorC.classList.remove("hover-unit:hover");

  let colorC = document.querySelector("#celsius");
  colorC.style.color = `rgba(0, 0, 0, 0.8)`;
  //colorF.classList.add("hover-unit:hover");
  //showTime();
  //showDay();
}

let fahrenheits = document.querySelector("#fahrenheits");
fahrenheits.addEventListener("click", clickFahrenheits);

function clickCelsius(response) {
  let city = document.querySelector("#city");
  city = city.innerHTML;
  let units = `metric`;
  let apiKey = `4c09ae07987b07a4993b3f7e761af71d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemp);
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", clickCelsius);

// CURRENT LOCATION - geolocation - navigator;

function showMyLocation(response) {
  let city = response.data.name;
  console.log(city);
  let cityName = document.querySelector("#city");
  cityName.innerHTML = city;

  let units = `metric`;
  let apiKey = `4c09ae07987b07a4993b3f7e761af71d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemp);
}

function findMyLocation(position) {
  let lat = position.coords.latitude;
  console.log(lat);
  let long = position.coords.longitude;
  console.log(long);

  let units = `metric`;
  let apiKey = `4c09ae07987b07a4993b3f7e761af71d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showMyLocation);
}

navigator.geolocation.getCurrentPosition(findMyLocation);
