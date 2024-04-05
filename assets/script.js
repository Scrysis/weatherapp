var cardDisplay = document.getElementById("bottomDisplay"); // base element for creating the cards
var userCity = []; //empty; will be filled by a modified user response
var searchButton = document.getElementById("buttonSearch");
var weatherArray = [];
var cities = [];
var cityList = document.querySelector("#cityList");
var cityName = "";
var topCitySection = document.querySelector("#topSearchSection");
var topCitySectionById = document.getElementById("topSearchSection");



// %20 to indicate whitespace in the api call for city names with multiple words

/* Need code for taking user input and turning it into search terms. */


/* document.addEventListener('click', function (e) {
  if (hasClass(e.target, 'cityButton')) {
      
  } else if (hasClass(e.target, 'test')) {
      // .test clicked
      // Do your other thing
  }
}, false); */


function hasClass(elem, className) {
  return elem.classList.contains(className);
}
document.addEventListener("click", function(event){

  event.preventDefault();
if(hasClass(event.target, 'searchCity')){
var element = event.target;
  var cityBar = document.getElementById("citySearchBar");
  
  if (cityBar){
    cityName = cityBar.value.trim(); 
  }
 

  if (cityName === ""){
    return;
  }

  cities.push(cityName);
  cityBar.value = "";
  getWeather(cityName);

var bottomDisplay = document.getElementById("bottomDisplay");
bottomDisplay.innerHTML = "";
storeCities();
showCities();


} else if (hasClass(event.target, 'cityButton')){
  var element = event.target;
cityName = element.getAttribute("data-index");

getWeather(cityName);

var bottomDisplay = document.getElementById("bottomDisplay");
bottomDisplay.innerHTML = "";
storeCities();
showCities();
}
}, false);
/* 
if (element.classList.contains("cityButton") === true){
  

} */






function init(){
  getCities();
  showCities();
}

/* function getLocation(){
    const cityName = citySearchBar.value.trim();
    const stateCode = stateSearchBar.value.trim();
    //const countryCode;
    const geoCode= `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode}&appid=b991ded89c6cce5d77260525125773a3`; // insert user response here

    
   
    fetch(geoCode)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const lat = data[1].lat;
      const lon = data[1].lon;
      getWeather(lat, lon);
    });
};
 */
function getCities(){
  var storedCities = JSON.parse(localStorage.getItem("cities"));

  if(storedCities !== null){
    cities = storedCities;
  }
  
}

function showCities(){
  cityList.innerHTML = "";
  var cityReset = document.getElementById("cityList");
  cityReset.innerHTML = "";

  for (var x =0; x < cities.length; x++){
    var city = cities[x];
    var li = document.createElement("li");
   
    li.setAttribute("data-index", city);

    var button = document.createElement("button");
    button.textContent = city;
    button.setAttribute('class', "cityButton");
    button.setAttribute("data-index", city);
//button.addEventListener('click', getWeather(city));

  /* document.addEventListener('click', function (e) {
  if (hasClass(e.target, 'cityButton')) {
      
  } else if (hasClass(e.target, 'test')) {
      // .test clicked
      // Do your other thing
  }
}, false); */
   

    li.appendChild(button);
    cityList.appendChild(li);

    
  }

}

function storeCities(){
  localStorage.setItem("cities", JSON.stringify(cities));
}


function getWeather(cityName) {
  //var cityName = document.getElementById("citySearchBar").value;
  
  var apiKey = 'b991ded89c6cce5d77260525125773a3';
 
  var requestWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`;
  const today = new Date();
  const currentTime = today.getHours();
var weatherSection = document.getElementById("bottomDisplay");
var todayWeather = document.getElementById("topDisplay");
  fetch(requestWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      var bigDay = data.list[0];
      var weatherCard = document.createElement("div");
      var weatherList = document.createElement("ul");
      var weatherListItem = document.createElement("li");
      var weatherIcon = document.createElement("img");

      var iconNum = bigDay.weather[0].icon;

      weatherCard.setAttribute("class", "bigWeatherCard");
      weatherList.setAttribute("class", "weatherListStyle");

      weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${iconNum}.png`);


      weatherListItem.appendChild(weatherIcon);


      
      console.log(bigDay.weather[0].description);
      var descList = document.createElement('li');
      var weatherDesc = document.createElement('h2');
      weatherDesc.textContent = `${bigDay.weather[0].description}` ;
      descList.append(weatherDesc);
      //var makeText = document.createTextNode(day.weather[0].description);
      //weatherDesc.append(makeText);
      //weatherDesc.setAttribute("textContent", `${day.weather[0].description}`);
      //weatherDesc.textContent = day.weather[0].description;
      //weatherListItem.setAttribute("textContent", day.weather[0].description);
      
      var tempList = document.createElement('li');
      var weatherTemp = document.createElement('h1');
      weatherTemp.textContent = `Temp: ${bigDay.main.temp} °F`;
      tempList.append(weatherTemp);

      var windList = document.createElement('li');
      var windDesc = document.createElement('h3');
      windDesc.textContent = `Wind: ${bigDay.wind.speed} mph`;
      windList.append(windDesc);

      var humidList = document.createElement('li');
      var humidDesc = document.createElement('h3');
      humidDesc.textContent = `Humidity: ${bigDay.main.humidity}%`;
      humidList.append(humidDesc);

      
      weatherList.appendChild(weatherListItem);
      weatherList.appendChild(tempList);
      weatherList.appendChild(descList);
      weatherList.appendChild(windList);
      weatherList.appendChild(humidList);

      weatherCard.appendChild(weatherList);
      //weatherCard.appendChild(weatherIcon, weatherDesc);
      weatherSection.appendChild(weatherCard);


      for (var x = 0; x < data.list.length; x += 8) {
        var day = data.list[x];
       
        
        var weatherCard = document.createElement("div");
        var weatherList = document.createElement("ul");
        var weatherListItem = document.createElement("li");
        var weatherIcon = document.createElement("img");

        var iconNum = day.weather[0].icon;

        weatherCard.setAttribute("class", "weatherCard");
        weatherList.setAttribute("class", "weatherListStyle");

        weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${iconNum}.png`);


        weatherListItem.appendChild(weatherIcon);


        
        console.log(day.weather[0].description);
        var descList = document.createElement('li');
        var weatherDesc = document.createElement('h2');
        weatherDesc.textContent = `${day.weather[0].description}` ;
        descList.append(weatherDesc);
        //var makeText = document.createTextNode(day.weather[0].description);
        //weatherDesc.append(makeText);
        //weatherDesc.setAttribute("textContent", `${day.weather[0].description}`);
        //weatherDesc.textContent = day.weather[0].description;
        //weatherListItem.setAttribute("textContent", day.weather[0].description);
        
        var tempList = document.createElement('li');
        var weatherTemp = document.createElement('h1');
        weatherTemp.textContent = `Temp: ${day.main.temp} °F`;
        tempList.append(weatherTemp);

        var windList = document.createElement('li');
        var windDesc = document.createElement('h3');
        windDesc.textContent = `Wind: ${day.wind.speed} mph`;
        windList.append(windDesc);

        var humidList = document.createElement('li');
        var humidDesc = document.createElement('h3');
        humidDesc.textContent = `Humidity: ${day.main.humidity}%`;
        humidList.append(humidDesc);

        
        weatherList.appendChild(weatherListItem);
        weatherList.appendChild(tempList);
        weatherList.appendChild(descList);
        weatherList.appendChild(windList);
        weatherList.appendChild(humidList);

        weatherCard.appendChild(weatherList);
        //weatherCard.appendChild(weatherIcon, weatherDesc);
        weatherSection.appendChild(weatherCard);

      }

      // Need to convert UTC to relative time
      /* https://stackoverflow.com/questions/6525538/convert-utc-date-time-to-local-date-time */
      /* var date = new Date(data.list[0].dt);
      date.toString(); // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
 */
    });
}

/* function createSmolWeather(weather) {
  var weatherObject = weather;
  var weatherSection = document.getElementById("bottomDisplay");
  var weatherCard = document.createElement("div");
  var weatherList = document.createElement("ul");
  var weatherListItem = document.createElement("li");
  var weatherIcon = document.createElement("img");

  var iconNum = weatherObject.weather[0].icon;

  weatherCard.setAttribute("class", "weatherCard");
  weatherList.setAttribute("class", "weatherListStyle");

  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${iconNum}.png`
  );

  weatherListItem.value(weatherIcon);
  weatherList.appendChild(weatherListItem);

  // add more here

  weatherCard.appendChild(weatherList);
  weatherSection.appendChild(weatherCard);
} */

/*  fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            for (var i = 0; i < data.list.length; i = i + 8) {
                var day = data.list[i]
                document.getElementById('weatherIcon' + (i / 8 + 1)).src = "https://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png"
                // document.getElementById('date' + (i / 8 + 1)).textContent = list[0].dt_txt
                document.getElementById('weatherDescription' + (i / 8 + 1)).textContent = day.weather[0].description
                document.getElementById('temp' + (i / 8 + 1)).textContent = 'Temperature: ' + day.main.temp + '°F'
                document.getElementById('wind' + (i / 8 + 1)).textContent = 'Wind Speed: ' + day.wind.speed + 'mph'
                document.getElementById('humidity' + (i / 8 + 1)).textContent = 'Humidity: ' + day.main.humidity + '%'
                localStorage.setItem('weatherIcon', 'temp', 'wind', 'humidity')
            }
        }); */


        init()