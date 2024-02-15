// Show the meet-greet message on Tue/Thu
// Date.getDay() uses a 0 based index to return the day of the week
var messagedate = new Date();
if (messagedate.getDay() == 2 || messagedate.getDay() == 4) {
    document.querySelector("#meet-greet").classList.add("active");
}

// Wind chill stuff
function setWindChill(windSpeed, temperature) {
    // Get the DOM objects that are dynamic
    let temperatureSpan = document.querySelector("#Temperature");
    let windSpeedSpan = document.querySelector("#Windspeed");
    let windChillSpan = document.querySelector("#Windchill");

    // Set up the wind chill content
    let windChillMessage = "N/A";
    if (windSpeed >= 3.0 && temperature <= 50) {
        let chill = Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
        windChillMessage = `${chill}`;
    }

    // Write out the dynamic content
    temperatureSpan.textContent = temperature;
    windSpeedSpan.textContent = windSpeed;
    windChillSpan.innerHTML = windChillMessage;
}

// select HTML elements in the document
const weatherIcon = document.querySelector("#WeatherIcon");
const weatherDesc = document.querySelector("#WeatherDesc");

// I have intentionally set the weather data to a static weather file because I don't want to publish my API key.
// If you borrow this example, you will need to get your own API KEY from OpenWeather as instructed
// And use the commented out apiURL below.
const LAT = "43.8866";
const LON = "-111.6777";
const APIKEY = "GET YOUR OWN KEY!";
// const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;
const apiURL = "./data/weather.json";

function displayResults(weatherData) {
    // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
    const desc = weatherData.weather[0].description;
    const main = weatherData.weather[0].main;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.textContent = main;
    setWindChill(weatherData.wind.speed.toFixed(0), weatherData.main.temp.toFixed(0));
}

async function getTheWeather() {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getTheWeather();
