const Request = require('../services/request');

var ListView = function(){
  this.countries = [];
}

ListView.prototype.addCountryToList = function(country) {
  this.countries.push(country);
  this.render();
}

ListView.prototype.clear = function() {
  this.countries = [];
  const ul = document.querySelector('#countries');
  ul.innerHTML = '';
}

const deleteOneRequestComplete = function(itemID){
  const listItem = document.getElementById(itemID).parentElement;
  listItem.parentNode.removeChild(listItem);
};

const deleteListItem = function(){
  const dbRequest = new Request('http://localhost:3000/api/countries');
  dbRequest.deleteOne(this.id, deleteOneRequestComplete);
};

ListView.prototype.render = function(){
    const ul = document.querySelector('#countries');
    ul.innerHTML = '';
    for(let country of this.countries){
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.innerText = country.name;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = `${country.name}`;
    checkbox.value = `${country.name}`;
    li.appendChild(checkbox);
    li.id = country.name;
    deleteButton.innerText = "DELETE";
    deleteButton.setAttribute('class', 'country-delete');
    deleteButton.id = country._id;
    deleteButton.setAttribute('data-country', country.name);
    deleteButton.addEventListener('click', deleteListItem);
    li.appendChild(deleteButton);
    ul.appendChild(li);
  }
}

 module.exports = ListView;
