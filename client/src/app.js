const MapWrapper = require('./services/mapWrapper.js');
const Request = require('./services/request');
const ListView = require('./views/listView');
const DropDown = require('./views/dropDown');

const countryRequest = new Request('https://restcountries.eu/rest/v2/all');
const dbRequest = new Request('http://localhost:3000/api/countries');
const dropDown = new DropDown();

const populateDropDown = function(countries){
  dropDown.populate(countries);
};

const app = function(){
  const mapWrapper = new MapWrapper("map", 55.8642, 4.2518, 10);
  countryRequest.get(populateDropDown);
};

window.addEventListener('load', app);
