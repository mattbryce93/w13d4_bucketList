const MapWrapper = require('./services/mapWrapper.js');
const Request = require('./services/request');
const ListView = require('./views/listView');
const DropDown = require('./views/dropDown');

const countryRequest = new Request('https://restcountries.eu/rest/v2/all');
const dbRequest = new Request('http://localhost:3000/api/countries');
const dropDown = new DropDown();
const listView = new ListView();

const populateDropDown = function(countries){
  dropDown.populate(countries);
};

const populateList = function(listItems){
  for(let country of listItems){
    listView.addCountry(country);
  }
};

const addCountry = function(event){
  event.preventDefault();
  const selectedCountry = document.querySelector('#country-list').selectedOptions[0].innerText;
  console.log(selectedCountry);
};

const app = function(){
  const mapWrapper = new MapWrapper("map", 55.864237, -4.251806, 10);
  countryRequest.get(populateDropDown);
  dbRequest.get(populateList);
  //add listener for button click
  const addCountryButton = document.querySelector('#submit-country');
  addCountryButton.addEventListener('click', addCountry);
};

window.addEventListener('load', app);