

var cardDisplay = document.getElementById('bottomDisplay');// base element for creating the cards
var userCity = [];  //empty; will be filled by a modified user response 
var searchButton = document.getElementById('buttonSearch');

// %20 to indicate whitespace in the api call for city names with multiple words

/* Need code for taking user input and turning it into search terms. */

function getLocation(){
    const cityName;
    const stateCode;
    const countryCode;
    const geoCode= `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=b991ded89c6cce5d77260525125773a3`; // insert user response here

    
   
    fetch(geoCode)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // insert stuff here
    });
};

function getWeather(lat, lon){

    const lat = lat;
    const lon = lon;
    const requestUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=appid=b991ded89c6cce5d77260525125773a3`;

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // insert stuff here
    });
}

