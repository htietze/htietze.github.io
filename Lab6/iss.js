let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')

let issMarker // leaflet marker
let update = 10000 // 10 seconds

let icon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

// creating the leaflet map, adding the tile to it, maxZoom giving the limit to the number of tiles?
let map = L.map('iss-map').setView([0, 0], 1)
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 7,
    id:'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidGVzdGFjY291bnR5YXlhIiwiYSI6ImNrNmxpbXptMDAzdW4zbmxmM2ZteTlqdTEifQ._gVLiIIwA0ff21a1vErfSA'
}).addTo(map)

// setting the maximum number of fetch attempts for the function to use
let max_failed_attempts = 3
iss(max_failed_attempts)

function iss(attempts) {
    fetch(url)
    // response contains json, but as a string
    // convert json from response into object (res = response)
    // response.json() returns a promise, the result is handled in
    // the next then() block when it resolves
    .then( res => res.json() )
    .then( issData => {
        // data is a javascript object
        // it's the resolved result of response.json()
        console.log(issData)
        // do stuff with the data now!
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long
        // setting up the map marker, using the data that was fetched from the API
        // and using the marker icon chosen earlier.
        if (!issMarker) {
            issMarker = L.marker([lat, long], {icon: icon}).addTo(map) // create marker
        } else {
            issMarker.setLatLng([lat, long]) // already there, so move it
        }
        // update the time element to the current date and time
        let date = Date()
        time.innerHTML = `At ${date} the ISS is over the following coordinates:`
    })
    // If an error occurs, a promise is rejected
    // in this case, the catch runs, so deal with it here:
    .catch( err => {
        attempts--
        console.log(err)
    })
    .finally( () => {
        // finally runs whether the fetch() worked or failed.
        // call the ISS function after a delay of update milliseconds
        // to update the position
        setTimeout(iss, update, attempts)
    })
}
