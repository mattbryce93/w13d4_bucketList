const Request = require('../services/request');
const MapWrapper = require('../services/mapWrapper.js');

var ListView = function(){
  this.countries = [];
}

ListView.prototype.addCountryToList = function(country) {
  this.countries.push(country);
  this.render();
}

ListView.prototype.clear = function() {
  this.countries = [];
  const ul = document.getElementById('bucketlist');
  ul.innerHTML = '';
}

const deleteOneRequestComplete = function(itemID){
  const listItem = document.getElementById(itemID).parentElement;
  listItem.parentNode.removeChild(listItem);
};

const deleteListItem = function(deleteButton){
  const dbRequest = new Request('http://localhost:3000/api/countries');
  // console.log(deleteButton);
  dbRequest.deleteOne(deleteButton.id, deleteOneRequestComplete);
  // console.log(deleteButton.getAttribute("alpha"));
    const event = new CustomEvent('removeCountry', {
        detail: {
          countryToRemove: deleteButton.getAttribute("alpha")
        }
    });
    document.dispatchEvent(event);
};

ListView.prototype.render = function(){
    const countryDiv = document.getElementById('countries');
    const ul = document.createElement('ul');
    ul.setAttribute('id', "bucketlist")
    countryDiv.appendChild(ul);
    ul.innerHTML = '';
    for(let country of this.countries){
      console.log(country);
      const li = document.createElement('li');
      li.innerText = country.name;
      li.id = country.name;
      const deleteButton = document.createElement('button');
      deleteButton.innerText = "DELETE";
      deleteButton.setAttribute('class', 'country-delete');
      deleteButton.setAttribute('alpha', country.alpha);
      deleteButton.id = country._id;
      deleteButton.setAttribute('datacountry', country.name);
      deleteButton.addEventListener('click', function () {
        deleteListItem(deleteButton);
      });

      li.appendChild(deleteButton);
      ul.appendChild(li);
  }
}

 module.exports = ListView;
