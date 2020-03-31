// setting up the canvas, and context object to use it
let canvas = document.getElementById('bridge-chart')
let context = canvas.getContext('2d')
// as well as setting up the arrays for pulling data from the bridges array
let bridgeNames = []
let bridgeSpans = []
// looping through the bridges array and taking out the names and spans,
// saving them in the array to use for the chart later
bridges.forEach(function(bridge) {
    bridgeNames.push(bridge.name)
})
bridges.forEach(function(bridge) {
    bridgeSpans.push(bridge.span)
})
// Initializing the chart, which is static, set as a bar type
chart = new Chart(context, {
    type: 'bar',
    data: {
        // since the labels have to be arrays, that's already done and we can
        // just plug in values
        labels: bridgeNames,
        datasets: [{
            label: 'Longest Bridges',
            // same here for the bridge span data
            data: bridgeSpans,
            // then just pick five colors for our five bridges
            backgroundColor: ['red', 'blue', 'yellow', 'orange', 'green']
        }]
    }, options: {
        // defaults the scale to start at 0 I'm pretty sure.
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})



