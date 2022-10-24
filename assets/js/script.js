// Global variables
var searchHistory = [];
var apiKey = "972645ea3e3eb66f33aa8de495ed0816";

// DOM element references
var button = document.querySelector(".submit");
var inputValue = document.querySelector(".inputValue");
var cityName = document.querySelector(".cityName");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var input = document.querySelector(".input");

// // Function to display search history list
// function renderSearchHistory() {
//   searchHistoryContainer.innerHTML = "";
//   //Start at end of history array and count down, showing the most recent at top
//   for (var i = searchHistory.length - 1; i >= 0; i--) {
//     var btn = document.createElement("button");
//     btn.setAttribute("type", "button");
//     btn.setAttribute("aria-controls", "today forecast");
//     btn.classList.add("history-btn", "btn-history");
//   }
// }

// Getting weather from the One Call API using coordinates
function getWeather(lat, lon) {
  console.log(lat, lon, "getWeather running");
  var apiUrl2 =
    "https://api.openweathermap.org/data/3.0/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&exclude=hourly,daily&appid=" +
    apiKey;
  fetch(apiUrl2)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response
          .json()
          .then(function (data) {
            console.log(data);
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    })
    .then((data) => {
      // var cityNameValue = data[0].name;
      var tempValue = data["main"]["temp"];
      var descValue = data["weather"][0]["description"];

      // cityName.innerHTML = cityNameValue;
      temp.innerHTML = tempValue;
      desc.innerHTML = descValue;
    });
}

// Get coordinates for the city/state from the Geocoding API
// Calls get Weather and extracts latitude and longitude from the array
function getLatLon(event) {
  event.preventDefault();
  var apiUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    inputValue.value +
    "&limit=5&appid=" +
    apiKey;
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      console.log(response);
      response.json().then(function (data) {
        console.log(data);
        console.log("getLatLon ran");
        getWeather(data[0].lat, data[0].lon);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  });
}

button.addEventListener("click", getLatLon);

// Regarding the local storage functionality, you just need to push the city search into an array and save that array in the local storage.
// Don't forget to pull the data from local storage, append the new search onto it, and re-save it in local storage.
// HINT, you will need the following methods to accomplish this, localstorage.getItem, localstorage.setItem, JSON.parse and JSON.stringify.

// To accomplish the color-coded UV index, you take the UV number from the weather data and assign a class to the element based on the number. See this resource for the number of color associations https://www.epa.gov/enviro/uv-index-overview.
