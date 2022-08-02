var button = document.querySelector('.submit');
var inputValue = document.querySelector('.inputValue');
var cityName = document.querySelector('.cityName');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var input = document.querySelector('.input');
// var city  = document.querySelector('.city_name');
// var temperature = document.querySelector('.temperature');
// var humidity = document.querySelector('.humidity');
// var weather = document.querySelector('.weather'); 

    button.addEventListener('click', getWeather())

    function getWeather() {
      var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&APPID=972645ea3e3eb66f33aa8de495ed0816';
      fetch(apiUrl)
          .then(function (response) {
              if (response.ok) {
                  console.log(response);
                  response.json().then(function (data) {
                      console.log(data);
                  });
              } else {
                  alert('Error: ' + response.statusText);
              }
              WriteHTML()
          })
  };
                
function WriteHTML() {
  // var tempValue = data['main']['temp'];
  // var cityValue = data['name'];
  // var weatherValue = data['weather'][0]['description'];
  // var humidityValue = data['main']['humidity'];

  name.innerHTML = nameValue;
  temp.innerHTML = tempValue;
  desc.innerHTML = descValue;
  // city.innerHTML = "weather at "+ cityValue;
  // weather.innerHTML = "weather: "+ weatherValue;
  // temperature.innerHTML = "temperature: "+ tempValue + " celcius";
  // humidity.innerHTML = "humidity: "+ humidityValue;
}

