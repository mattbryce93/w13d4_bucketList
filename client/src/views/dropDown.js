var DropDown = function(){
  this.countries = [];
}

DropDown.prototype.populate = function(countries) {
  let select = document.getElementById('country-list');
  countries.forEach(function(country, index) {
    let option = document.createElement('option');
    option.innerText = country.name;
    option.value = index;
    select.appendChild(option);
  });
};

module.exports = DropDown;
