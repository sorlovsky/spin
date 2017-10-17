var key = 'AIzaSyA-vgAZyJIqhPtREMEyMUvsPetu8sQEPXY'

var googleMapsClient = require('@google/maps').createClient({
      key: key
});

var directions = googleMapsClient.directions({origin: "Campbell", destination: "San Jose", mode: "transit"})

console.log(directions.finally)


