

var cardDisplay = document.getElementById('bottomDisplay');// base element for creating the cards
var userCity = [];  //empty; will be filled by a modified user response 
var searchButton = document.getElementById('buttonSearch');
var weatherArray = [];

// %20 to indicate whitespace in the api call for city names with multiple words

/* Need code for taking user input and turning it into search terms. */


searchButton.addEventListener('click', getLocation);

function getLocation(){
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

function getWeather(lat, lon){

    const lat = lat;
    const lon = lon;
    const requestWeather = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=appid=b991ded89c6cce5d77260525125773a3&units=imperial `;
    const today = new Date();
    const currentTime = today.getHours();

    fetch(requestWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Need to convert UTC to relative time
      /* https://stackoverflow.com/questions/6525538/convert-utc-date-time-to-local-date-time */
      /* var date = new Date(data.list[0].dt);
      date.toString(); // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
 */

    });
}

function createSmolWeather (weather){
    var weatherObject = weather;
    var weatherSection = document.getElementById('bottomDisplay');
    var weatherCard = document.createElement('div');
    var weatherList = document.createElement('ul');
    var weatherListItem = document.createElement('li');

    weatherCard.setAttribute('class', 'weatherCard' );
    weatherList.setAttribute('class', 'weatherListStyle');

    weatherListItem

    weatherCard.appendChild(weatherList);
    weatherSection.appendChild(weatherCard);

}


