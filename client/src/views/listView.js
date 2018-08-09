var ListView = function(){
  this.countries = [];
}

ListView.prototype.addCountry = function(country) {
  this.countries.push(country);
  this.render(country);
}

ListView.prototype.clear = function() {
  this.countries = [];
  const ul = document.querySelector('#countries');
  ul.innerHTML = '';
}

ListView.prototype.render = function(country){
    const ul = document.querySelector('#countries');
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.innerText = country.name;
    deleteButton.innerText = "DELETE";
    deleteButton.setAttribute('class', 'country-delete');
    deleteButton.setAttribute('data-country', country.name);
    li.appendChild(deleteButton);
    ul.appendChild(li);
}

 module.exports = ListView;
