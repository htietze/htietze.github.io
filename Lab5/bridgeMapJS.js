// array for all the bridge information! Coordinates set as an array too
let bridges = [
    {'name': 'Verrazano-Narrows Bridge', 'cityState': 'New York, NY', 'span': '1298.4', 'coordinates': [40.6066, -74.0447]},
    {'name': 'Golden Gate Bridge', 'cityState': 'San Francisco/Marin, CA', 'span': '1280.2', 'coordinates': [37.8199, -122.4783]},
    {'name': 'Mackinac Bridge', 'cityState': 'Mackinaw and St Ignace, MI', 'span': '1158.0', 'coordinates': [45.8174, -84.7278]},
    {'name': 'George Washington Bridge', 'cityState': 'New York, NY and New Jersey, NJ', 'span': '1067.0', 'coordinates': [40.8517, -73.9527]},
    {'name': 'Tacoma Narrows Bridge', 'cityState': 'Tacoma and Kitsap, WA', 'span': '853.44', 'coordinates': [47.2690, -122.5517]}
]
// setting up the bridge icon, using the Leaflet's function to set it and the sizing and location
let bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize: [30, 40],
    iconAnchor: [0, 0]
})
// using the coordinates for the center of the US (from google)
let USCenterCoordinates = [39.83, -98.58]
// zoom level of 4 gives a good amount of visual space (after slightly increasing the canvas width from the college map)
let zoomLevel = 4
// Starting up the tile to start centered on the coordinates at that zoom level
let map = L.map('bridge-map').setView(USCenterCoordinates, zoomLevel)
// I think this is all for using the tiles from Leaflet and adding it to the map object?
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id:'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidGVzdGFjY291bnR5YXlhIiwiYSI6ImNrNmxpbXptMDAzdW4zbmxmM2ZteTlqdTEifQ._gVLiIIwA0ff21a1vErfSA'}).addTo(map)

// looping over the bridges array, pulling out each bridge
bridges.forEach(function(bridge){
    // then creating markers in leaflet using the coordinates stored
    let bridgeCoords = bridge.coordinates
    L.marker(bridgeCoords, {icon: bridgeIcon})
    // as well as adding a pop up with the other information to each one.
    .bindPopup(`${bridge.name} spans ${bridge.span} meters.
    It is located in ${bridge.cityState}`).addTo(map)
})
