const temperature = 5; // °C
const windSpeed = 10; // km/h

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else if (temperature <= 50 && windSpeed > 3) {
        return (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else {
        return "N/A"; 
    }
}

window.onload = function() {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("wind-chill").textContent = "Wind Chill: " + windChill + " °F";
};


//-------------------footer---------------------------------------------//

let footerCopy = document.querySelector('.copy');

// Get the current year
let currentYear = new Date().getFullYear();

// Create the copyright year text
let copyrightText = '© ' + currentYear + ' Luis Ebrahim Herrera Rengel -- Venezuela'

footerCopy.textContent = copyrightText;

let secondCopy = document.querySelector('.copy2');

// Get the date of the last modification of the document
var lastModifiedDate = new Date(document.lastModified);

// Create the last modified date text
var lastModifiedText = 'Last modification: ' + lastModifiedDate.toLocaleString();

// Assign the text to the second paragraph of the footer
secondCopy.textContent = lastModifiedText;