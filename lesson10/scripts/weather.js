// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.85409701252895&lon=-111.83276484716764&appid=618570a643644035c14556cfb4a74929&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const data = await response.json();
        console.log(data);
        displayWeather(data);

    } catch (error) {
        console.error('There was a problem fetching the data:', error);
    }
}

function displayWeather(data) {
    currentTemp.textContent = data.main.temp;
    captionDesc.textContent = data.weather[0].description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.alt = data.weather[0].description;
}

apiFetch();