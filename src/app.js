//TIME & DATE
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

// SEARCH CITY
/*
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);*/
/*let searchButton = document.querySelector("button");
dearchButton.addEventListener("click", searchCity);*/
// CURRENT LOCATION - geolocation

navigator;

// CURRENT LOCATION TEMPERATURE & othr info

// CITY TEMPERATURE & othr info

// CESLSIUS

//FAHRENHEITS (& mph)

let city = `Taipei`;
let apiKey = ``;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

axios.get(apiUrl).then();

navigator.geolocation.getCurrentPosition;
