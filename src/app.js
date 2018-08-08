const makeRequest = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};

const requestComplete = function () {
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const countries = JSON.parse(jsonString);
  populateList(countries);
};

const populateList = function (countries) {
  let select = document.getElementById('country-list');
  countries.forEach(function(country, index) {
    let option = document.createElement('option');
    option.innerText = country.name;
    option.value = index;
    select.appendChild(option);
  });
};

const app = function(){
  const url = 'https://restcountries.eu/rest/v2/all';

  makeRequest(url, requestComplete);
};

document.addEventListener('DOMContentLoaded', app);
