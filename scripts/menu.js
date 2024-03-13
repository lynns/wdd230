const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    nav.classList.toggle('show');
});


const url = 'https://api.openweathermap.org/data/2.5/weather?appid=618570a643644035c14556cfb4a74929&lat=43.822860127722464&lon=-111.7926467548487&units=imperial';

async function apiFetch() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.querySelector('#Temp').textContent = `${Math.round(data.main.temp)}° F`;
    document.querySelector('#Conditions').textContent = data.weather[0].description;
    document.querySelector('#WeatherIcon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
}

apiFetch();