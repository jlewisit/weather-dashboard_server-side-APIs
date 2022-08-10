var button = document.querySelector('.submit');
var inputValue = document.querySelector('.inputValue');
var cityName = document.querySelector('.cityName');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var input = document.querySelector('.input');
// var apiKey = "972645ea3e3eb66f33aa8de495ed0816";
var apiKey = "9281b394d8bfd8899fe3cd5158e1a60e";

// Getting weather from the One Call API using coordinates
function getWeather(lon, lat) {
    console.log(lon, lat);
var apiUrl2 ='https://api.openweathermap.org/data/3.0/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly&appid='+apiKey;
    // var apiUrl2 ='https://api.openweathermap.org/data/3.0/onecall?lat='+lat+'&lon='+lon+'&appid='+apiKey
fetch(apiUrl2)
.then(function (response) {
    if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
            console.log(data);
    }).catch(function (err) {
console.log(err);
    })
//             //   WriteHTML() 
    } 
})
}
              
// function WriteHTML() {
//   name.innerHTML = nameValue;
//   temp.innerHTML = tempValue;
//   desc.innerHTML = descValue;

// }

    // Get coordinates for the city/state from the Geocoding API
    // Calls get Weather and extracts latitude and longitude from the array
    function getLatLon(event) {
        event.preventDefault();
        var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+inputValue.value+'&limit=5&appid='+apiKey;
        fetch(apiUrl)
            .then(function (response) {
                if (response.ok) {
                    console.log(response);
                    response.json().then(function (data) {
                        console.log(data);
                        getWeather(data[0].lon,data[0].lat)
                    });
                } else {
                    alert('Error: ' + response.statusText);
                }
            })
    };

button.addEventListener('click', getLatLon);

// Regarding the local storage functionality, you just need to push the city search into an array and save that array in the local storage. 
// Don't forget to pull the data from local storage, append the new search onto it, and re-save it in local storage. 
// HINT, you will need the following methods to accomplish this, localstorage.getItem, localstorage.setItem, JSON.parse and JSON.stringify.

// To accomplish the color-coded UV index, you take the UV number from the weather data and assign a class to the element based on the number. See this resource for the number of color associations https://www.epa.gov/enviro/uv-index-overview.
