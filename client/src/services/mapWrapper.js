// const borders = "https://raw.githubusercontent.com/openlayers/openlayers/master/examples/data/geojson/countries.geojson";
const country_borders = require('./country_borders.js');

const MapWrapper = function (element, lat, lng, zoom) {
  const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const osm = new L.TileLayer(osmUrl);
  this.map = L.map(element).addLayer(osm).setView([lat, lng], zoom);
  const countriesLayer = L.geoJson(country_borders).addTo(this.map);
}

MapWrapper.prototype.addMarker = function (coords) {
  L.marker(coords).addTo(this.map);
};

module.exports = MapWrapper;
