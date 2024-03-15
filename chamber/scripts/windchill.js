// Show the meet-greet message on Tue/Thu
// Date.getDay() uses a 0 based index to return the day of the week
var messagedate = new Date();
if (messagedate.getDay() == 2 || messagedate.getDay() == 4) {
    document.querySelector("#meet-greet").classList.add("active");
}

// Wind chill stuff
function setWindChill(windSpeed, temperature, data) {
    // Get the DOM objects that are dynamic
    let temperatureSpan = document.querySelector("#Temperature");
    let windSpeedSpan = document.querySelector("#Windspeed");
    let windChillSpan = document.querySelector("#Windchill");
    let weatherDescription = document.querySelector("#WeatherDescription");
    let weatherImage = document.querySelector("#WeatherIcon");

    // Set up the wind chill content
    let windChillMessage = "N/A";
    if (windSpeed >= 3.0 && temperature <= 50) {
        let chill = Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
        windChillMessage = `${chill}`;
    }

    // Write out the dynamic content
    temperatureSpan.textContent = Math.round(temperature);
    windSpeedSpan.textContent = Math.round(windSpeed);
    windChillSpan.innerHTML = windChillMessage;
    weatherDescription.textContent = data.weather[0].description;
    weatherImage.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
}

const url = 'https://api.openweathermap.org/data/2.5/weather?appid=618570a643644035c14556cfb4a74929&lat=43.822860127722464&lon=-111.7926467548487&units=imperial';

async function apiFetch() {
    const response = await fetch(url);
    const data = await response.json();

    setWindChill(data.wind.speed, data.main.temp, data);
}

apiFetch();


function updateForecast(data) {
    var count = 0;
    for (let i = 0; i < data.list.length; i++) {
        const forecast = data.list[i];
        if (forecast["dt_txt"].includes('12:00:00')) {
            showForecast(forecast);
            if (++count == 3) {
                break;
            }
        }
    }
}

function showForecast(data) {
    var element = document.createElement("ul");
    element.classList.add("weatherDetails");

    var date = new Date(data.dt * 1000);
    var d = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    element.innerHTML = `
        <li><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}" width="40"></li>
        <li>${Math.round(data.main.temp)}° F</li>
        <li>${data.weather[0].description}</li>
        <li>${d}</li>
    `;

    document.querySelector("#ThreeDayForecast").appendChild(element);
}

const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=43.85553021534834&lon=-111.84350042263397&appid=618570a643644035c14556cfb4a74929&units=imperial';

async function apiFetchForecast() {
    const response = await fetch(urlForecast);
    const data = await response.json();

    updateForecast(data);
}

apiFetchForecast();

