var cardDisplay = document.getElementById("bottomDisplay"); // base element for creating the cards
var userCity = []; //empty; will be filled by a modified user response
var searchButton = document.getElementById("buttonSearch");
var weatherArray = [];


// %20 to indicate whitespace in the api call for city names with multiple words

/* Need code for taking user input and turning it into search terms. */

searchButton.addEventListener("click", getWeather);

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
function getWeather() {
  var cityName = document.getElementById("citySearchBar").value;
  var apiKey = 'b991ded89c6cce5d77260525125773a3';
  /* const lat = lat;
    const lon = lon;
    const requestWeather = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b991ded89c6cce5d77260525125773a3&units=imperial `; */
  //var requestWeather = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=b991ded89c6cce5d77260525125773a3';
  var requestWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`;
  const today = new Date();
  const currentTime = today.getHours();
var weatherSection = document.getElementById("bottomDisplay");
  fetch(requestWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
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
