// var userFormEl = document.querySelector('#user-form');
// var languageButtonsEl = document.querySelector('#language-buttons');
// var cityInputEl = document.querySelector('#city');
// var repoContainerEl = document.querySelector('#repos-container');
// var repoSearchTerm = document.querySelector('#repo-search-term');
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function gettingJSON() {
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=London&APPID=972645ea3e3eb66f33aa8de495ed0816", function(json) {
            JSON.stringify(json);

                // document.getElementById('name').innerHTML = nameValue;
                name.innerHTML = nameValue;
                temp.innerHTML = tempValue;
                desc.innerHTML = descValue;
        });
    })

// button.addEventListener('click', function() {
//   fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=972645ea3e3eb66f33aa8de495ed0816');
//   console.log(response.data);
//   then(response => response.json())
//   then(data => {
//     var nameValue = data['name'];
//     var temp = data['main']['temp'];
//     var descValue = data['weather'][0]['description'];

//     name.innerHTML = nameValue;
//     temp.innerHTML = tempValue;
//     desc.innerHTML = descValue;
//   })

//   .catch(err => alert("wrong city name"))
// })

// var formSubmitHandler = function (event) {
//   event.preventDefault();

//   var city = cityInputEl.value.trim();

//   if (city) {
//     getUserRepos(username);

//     repoContainerEl.textContent = '';
//     cityInputEl.value = '';
//   } else {
//     alert('Please enter a city');
//   }
// };

// var buttonClickHandler = function (event) {
//   var language = event.target.getAttribute('data-language');

//   if (language) {
//     getFeaturedRepos(language);

//     repoContainerEl.textContent = '';
//   }
// };

// var getWeatherData = function (user) {
//   var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=9281b394d8bfd8899fe3cd5158e1a60e';
//   fetch(apiUrl)
//     .then(function (response) {
//       if (response.ok) {
//         response.json().then(function (data) {
//           displayRepos(data, user);
//         });
//       } else {
//         alert('Error: ' + response.statusText);
//       }
//     })
//     .catch(function (error) {
//       alert('Unable to connect to GitHub');
//     });
// };


// const xhr = new XMLHttpRequest();
// xhr.open('GET','https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=9281b394d8bfd8899fe3cd5158e1a60e');
// xhr.send();
// xhr.onload = () =>{
//     // we can change the data type to json also by
//     const data = JSON.parse(xhr.response);
//     console.log(data);
// };

// to Change the value in DOM, use 
// ELEMENT-SELECTOR.innerHTML;'THE-DATA' 

// // This API also returns a image for the weather and can be accessed from 
// data.weather[0].icon 
// it will give the icon name change the src of image to 
// http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png




// var getFeaturedRepos = function (language) {
//   var apiUrl = 'https://api.github.com/search/repositories?q=' + language + '+is:featured&sort=help-wanted-issues';

//   fetch(apiUrl).then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         displayRepos(data.items, language);
//       });
//     } else {
//       alert('Error: ' + response.statusText);
//     }
//   });
// };

// var displayRepos = function (repos, searchTerm) {
//   if (repos.length === 0) {
//     repoContainerEl.textContent = 'No repositories found.';
//     return;
//   }

//   repoSearchTerm.textContent = searchTerm;

//   for (var i = 0; i < repos.length; i++) {
//     var repoName = repos[i].owner.login + '/' + repos[i].name;

//     var repoEl = document.createElement('a');
//     repoEl.classList = 'list-item flex-row justify-space-between align-center';
//     repoEl.setAttribute('href', './single-repo.html?repo=' + repoName);

//     var titleEl = document.createElement('span');
//     titleEl.textContent = repoName;

//     repoEl.appendChild(titleEl);

//     var statusEl = document.createElement('span');
//     statusEl.classList = 'flex-row align-center';

//     if (repos[i].open_issues_count > 0) {
//       statusEl.innerHTML =
//         "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
//     } else {
//       statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
//     }

//     repoEl.appendChild(statusEl);

//     repoContainerEl.appendChild(repoEl);
//   }
// };

// userFormEl.addEventListener('submit', formSubmitHandler);
// languageButtonsEl.addEventListener('click', buttonClickHandler); //
//