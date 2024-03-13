
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather?appid=618570a643644035c14556cfb4a74929&lat=43.822860127722464&lon=-111.7926467548487&units=imperial';

async function apiFetch() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

apiFetch();