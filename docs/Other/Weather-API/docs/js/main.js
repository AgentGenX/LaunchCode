"use strict";


const data = {

    "appid": "ad6f453ca4a450ff0f13e75d1ccab6d5"
};
// {
//     "coord": {
//         "lon": -118.41,
//         "lat": 34.09
//     },
//     "weather": [{
//         "id": 741,
//         "main": "Fog",
//         "description": "fog",
//         "icon": "50d"
//     }],
//     "base": "stations",
//     "main": {
//         "temp": 298.03,
//         "feels_like": 300.97,
//         "temp_min": 290.15,
//         "temp_max": 305.37,
//         "pressure": 1014,
//         "humidity": 88
//     },
//     "visibility": 11265,
//     "wind": {
//         "speed": 3.1,
//         "deg": 230
//     },
//     "clouds": {
//         "all": 40
//     },
//     "dt": 1588120609,
//     "sys": {
//         "type": 1,
//         "id": 5872,
//         "country": "US",
//         "sunrise": 1588079200,
//         "sunset": 1588127709
//     },
//     "timezone": -25200,
//     "id": 0,
//     "name": "Beverly Hills",
//     "cod": 200
// }

function responseHandler(response) {
    // Your code here...
    $("#main").append(`
        <h1>${response.name}</h1>
        <h1>${response.weather[0].main}</h1>
    `);
}

$(document).ready(function(event) {
    navigator.geolocation.getCurrentPosition(function(position) {
        data["lat"] = position.coords.latitude;
        data["lon"] = position.coords.longitude;

        $.get("https://api.openweathermap.org/data/2.5/weather", data, responseHandler);
    }, function(error) {
        let response = prompt("I see you didn't want to share your location with us. Fair enough. Can we have your ZIP code instead?", "90210");

        if (response.length === 5 && !isNaN(parseInt(response, 10))) {
            data["zip"] = response;

            $.get("https://api.openweathermap.org/data/2.5/weather", data, responseHandler);
        } else {
            alert("An error occurred. Sorry about that.");
        }
    });
});
