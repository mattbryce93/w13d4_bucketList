const MapWrapper = require('./services/mapWrapper.js');
const Request = require('./services/request');
const ListView = require('./views/listView');
const DropDown = require('./views/dropDown');

const countryRequest = new Request('https://restcountries.eu/rest/v2/all');
const dbRequest = new Request('http://localhost:3000/api/countries');
const dropDown = new DropDown();
const listView = new ListView();

var mapWrapper;


const populateDropDown = function(countries){
  dropDown.populate(countries);
};

const populateList = function(listItems){
  for(let country of listItems){
    listView.addCountryToList(country);
  }
};

const createRequestComplete = function(newCountry){
  listView.addCountryToList(newCountry);
}

const clearList = function(event){
  event.preventDefault();
  dbRequest.delete(clearListRequestComplete);
}

const clearListRequestComplete = function(){
  listView.clear();
};

const addCountryToDB = function(event){
  event.preventDefault();
  const selectedCountry = document.querySelector('#country-list').selectedOptions[0];
  mapWrapper.colorCountry(selectedCountry);
  const newCountry = {
    "name": selectedCountry.innerText,
    "lat" : selectedCountry.attributes.lat.value,
    "lng" : selectedCountry.attributes.lng.value,
    "alpha" : selectedCountry.attributes.alpha.value
  }
  dbRequest.post(createRequestComplete, newCountry);
};

const app = function(){
  mapWrapper = new MapWrapper("map", 55.864237, -4.251806, 2);
  countryRequest.get(populateDropDown);
  dbRequest.get(populateList);
  const addCountryButton = document.querySelector('#submit-country');
  addCountryButton.addEventListener('click', addCountryToDB);
  const deleteAllButton = document.querySelector('#clear-list');
  deleteAllButton.addEventListener('click', clearList);
};

window.addEventListener('load', app);
