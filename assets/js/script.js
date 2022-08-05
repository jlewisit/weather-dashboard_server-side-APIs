var button = document.querySelector('.submit');
var inputValue = document.querySelector('.inputValue');
var cityName = document.querySelector('.cityName');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var input = document.querySelector('.input');
// +inputValue.value+

    // Get coordinates for the city/state
    // Works when '+inputValue.value+' is replaced with London
    function getWeather() {
        var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+inputValue.value+'&limit=5&appid=972645ea3e3eb66f33aa8de495ed0816';
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
                // WriteHTML();
            })
    };

// // Get weather using the coordinates
//     function getWeather() {
//       var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&APPID=972645ea3e3eb66f33aa8de495ed0816';
//       fetch(apiUrl)
//           .then(function (response) {
//               if (response.ok) {
//                   console.log(response);
//                   response.json().then(function (data) {
//                       console.log(data);
//                   });
//               } else {
//                   alert('Error: ' + response.statusText);
//               }
//               WriteHTML()
//           })
//   };
                
// function WriteHTML() {
//   name.innerHTML = nameValue;
//   temp.innerHTML = tempValue;
//   desc.innerHTML = descValue;

// }

button.addEventListener('click', getWeather());
