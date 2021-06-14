const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4aaf2c25ac91866dd1ff9e4eda7f327a&query=' + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude) + '&units=f'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error){
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " but it feels like " + body.current.feelslike + ". The humidity is " + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast