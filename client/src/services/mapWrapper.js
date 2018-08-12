const country_borders = require('./country_borders.js');

const MapWrapper = function (element, lat, lng, zoom) {
    const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const osm = new L.TileLayer(osmUrl);
    this.map = L.map(element).addLayer(osm).setView([lat, lng], zoom);
    countryLayers = L.geoJson(country_borders, {
      color: "black",
      "weight": 1,
      "fillColor": "gray"
  }).addTo(this.map);
}

MapWrapper.prototype.colorCountry = function (selectedCountry) {
  countryLayers.eachLayer(function (layer) {
    if (layer.feature.id == selectedCountry.attributes.alpha.value) {
      layer.setStyle({fillColor: "red"});
    }
  });
};

MapWrapper.prototype.populateCountry = function (selectedCountry) {
  console.log(selectedCountry);
  countryLayers.eachLayer(function (layer) {
    if (layer.feature.id == selectedCountry.alpha) {
      layer.setStyle({fillColor: "red"});
      console.log(layer);
    }
  });
};

MapWrapper.prototype.deleteColour = function (selectedCountryCode) {
  countryLayers.eachLayer(function (layer) {
    console.log(selectedCountryCode);
    if (layer.feature.id == selectedCountryCode) {
      layer.setStyle({fillColor: "gray"});
    }
  });
};

module.exports = MapWrapper;
