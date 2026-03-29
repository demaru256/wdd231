// Footer Dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

// Fetch weather data from WeatherAPI
async function getWeather() {
    if (!document.getElementById("weather")) return;

    const apiKey = "6e2c85ffe8534eb7b99101103262903"; // Your WeatherAPI Key
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Dar%20es%20Salaam&days=3`;

    const res = await fetch(url);
    const data = await res.json();

    const current = data.current;

    document.getElementById('current-weather').innerHTML = `
        <img src="https:${current.condition.icon}" alt="Weather icon">
        <p><strong>${current.temp_c}°C</strong></p>
        <p>${current.condition.text}</p>
    `;

    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = '';

    data.forecast.forecastday.forEach(day => {
        forecastDiv.innerHTML += `
            <p>${day.date}: ${day.day.avgtemp_c}°C - ${day.day.condition.text}</p>
        `;
    });
}

// Fetch 2-3 random Gold/Silver members from JSON
async function getSpotlights() {
    if (!document.getElementById("spotlight-cards")) return;

    const res = await fetch('data/members.json');
    const data = await res.json();
    const members = data.members.filter(m => m.level === 'Gold' || m.level === 'Silver');

    const shuffled = members.sort(() => 0.5 - Math.random());
    const spotlight = shuffled.slice(0, 3);

    const container = document.getElementById('spotlight-cards');
    container.innerHTML = '';
    spotlight.forEach(m => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="images/${m.image}" alt="${m.name} logo" loading="lazy">
            <h3>${m.name}</h3>
            <p>${m.address}</p>
            <p>${m.phone}</p>
            <p><a href="${m.url}" target="_blank">${m.url}</a></p>
            <p>Membership Level: ${m.level}</p>
        `;
        container.appendChild(card);
    });
}

// Menu toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
if(menuBtn) {
    menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));
}

// Run functions
getWeather();
getSpotlights();