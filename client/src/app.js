<<<<<<< HEAD
// const Request = require('./services/request.js');
const MapWrapper = require('./services/mapWrapper.js');

const makeRequest = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};
=======
const Request = require('./services/request');
const ListView = require('./views/listView');
const DropDown = require('./views/dropDown');
>>>>>>> master

const countryRequest = new Request('https://restcountries.eu/rest/v2/all');
const dbRequest = new Request('http://localhost:3000/api/countries');
const dropDown = new DropDown();

const populateDropDown = function(countries){
  dropDown.populate(countries);
};

const app = function(){
<<<<<<< HEAD
  const mapWrapper = new MapWrapper("map", 55.8642, 4.2518, 10);

  const url = 'https://restcountries.eu/rest/v2/all';
  makeRequest(url, requestComplete);
=======
  countryRequest.get(populateDropDown);
>>>>>>> master
};

window.addEventListener('load', app);
