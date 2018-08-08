const CountryView = require('./views/countryView');
const Request = require('./services/request.js');

const countryView = new CountryView();
const request = new Request("https://restcountries.eu/rest/v2/all");

const getCountriesRequestComplete = function(allCountries){
  for(let country of allCountries){
    countryView.addCountry(country);
  }
};

const appStart = function(){
  console.log("started");
  request.get(getCountriesRequestComplete);
};

document.addEventListener('DOMContentLoaded', appStart);
