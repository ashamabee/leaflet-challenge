// Creating map object
var myMap = L.map("mapid", {
    center: [34.0522, -98.4842],
    zoom: 5
  });

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// // Load in geojson data
var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

var geojson;

// // Grab data with d3
d3.json(geoData, function(data) {

  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

   // Loop through data
   for (var i = 0; i < data.length; i++) {

    // Set the data location property to a variable
    var location = data.features.geometry.coordinates;

    // Check for location property
    if (location) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([location[1], location[0]])
        // .bindPopup(data[i].descriptor));
      )};

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});

// geojson layer functions:
// point to layer
