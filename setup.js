var map = L.map('map', {
  center: [40.10762, -88.22725],
  zoom: 18,
});


<img src="/Users/shivamsrivastava/Desktop/School Files/Senior Year - Penn/Second Semester/ENVS 3700/Lab8-Interactive-Mapping/UIUC_logo.png">

<h3> Mapping UIUC Campus </h3>

<p> This map highlights the Illini Student Union and my favorite coffee shop near campus. </p>


// Search Addresses
L.Control.geocoder({
  defaultMarkGeocode: false
})
  .on('markgeocode', function(e) {
    map.fitBounds(e.geocode.bbox);
  })
  .addTo(map);

map.locate({ setView: true, maxZoom: 18 });

map.on('locationfound', function(e) {
  L.marker(e.latlng).addTo(map)
    .bindPopup("You are here").openPopup();
});


//Scale bar
L.control.scale().addTo(map);

// --- Basemap options ---
var Satellite = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

var CartoLight = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  { attribution: '&copy; OpenStreetMap contributors & CARTO' }
);

var CartoDark = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  { attribution: '&copy; OpenStreetMap contributors & CARTO' }
);

var StamenTerrain = L.tileLayer(
  'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
  { attribution: 'Map tiles by Stamen Design — Data © OpenStreetMap' }
);


var EsriTopo = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

var EsriSat = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

// Default basemap
Satellite.addTo(map);

// You can add or remove basemaps here. A button will appear top right of map to toggle.
var baseMaps = {
  "Satellite (Esri)": EsriSat,
  "CARTO Light": CartoLight,
  "CARTO Dark": CartoDark,
  "Stamen Terrain": StamenTerrain,
  "Esri Topo": EsriTopo
};

L.control.layers(baseMaps).addTo(map);


//// adding shapes to the map


// Make a simple circle
var circle = L.circle([39.983219999796114, -75.15256557830536], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5
}).addTo(map);

// Make a shape
var polygon = L.polygon([
    [40.10891, -88.22773],
    [40.10892, -88.22752],
    [40.10898, -88.22750],
    [40.10898, -88.22688],
    [40.10952, -88.22689],
    [40.10953, -88.22668],
    [40.10989, -88.22669],
    [40.10989, -88.22774],
    [40.10952, -88.22774],
    [40.10952, -88.22752],
    [40.10924, -88.22752],
    [40.10924, -88.22773],
    [40.10891, -88.22773],
]).addTo(map);

Polygon.bindPopup ("Illini Student Union")

// Add a marker
L.marker([40.10574, -88.21945]).addTo(map) .bindPopup("My favorite coffee shop!");


