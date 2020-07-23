
// // Goal: Mess around with the callback pattern
// //
// // 1. Define an add function that accepts the correct arguments
// // 2. Use setTimeout to simulate a 2 second delay
// // 3. After 2 seconds are up, call the callback function with the sum
// // 4. Test your work!
// setTimeout(()=>{
// console.log("2 seconds")
// },2000)
// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })
 
const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}


module.exports = geoco