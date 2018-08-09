const country_borders = require('./country_borders.js');

const MapWrapper = function (element, lat, lng, zoom) {
  const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const osm = new L.TileLayer(osmUrl);
  this.map = L.map(element).addLayer(osm).setView([lat, lng], zoom);
  const countryLayers = L.geoJson(country_borders, {
    color: "black",
    "weight": 1,
}).addTo(this.map);
}

MapWrapper.prototype.colorCountry = function (selectedCountry) {
  const countryLayers = L.geoJson(country_borders).addTo(this.map);

  countryLayers.eachLayer(function (layer) {
    if (layer.feature.properties.name == selectedCountry.innerText) {
      // console.log(layer);
      layer.setStyle({fillColor: "red"});
    }
  });

  // const countriesLayer = L.geoJson(country_borders.name).addTo(this.map);
};

// MapWrapper.prototype.addMarker = function (coords) {
//   L.marker(coords).addTo(this.map);
// };

module.exports = MapWrapper;
