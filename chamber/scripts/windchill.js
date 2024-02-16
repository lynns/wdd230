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

const windSpeed = document.querySelector("#Windspeed").textContent;
const temperature = document.querySelector("#Temperature").textContent;
setWindChill(windSpeed, temperature);
