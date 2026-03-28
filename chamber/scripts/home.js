// Footer Dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

// Fetch weather data from OpenWeatherMap
async function getWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_KEY';
    const city = 'Dar es Salaam, TZ';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    // Current weather
    const current = data.list[0];
    document.getElementById('current-weather').innerHTML = `
        <p>Temperature: ${current.main.temp}°C</p>
        <p>${current.weather[0].description}</p>
    `;

    // 3-day forecast (skipping 8 entries per day)
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = '';
    for (let i = 8; i <= 24; i += 8) {
        const f = data.list[i];
        forecastDiv.innerHTML += `
            <p>${new Date(f.dt_txt).toLocaleDateString()}: ${f.main.temp}°C, ${f.weather[0].description}</p>
        `;
    }
}

// Fetch 2-3 random Gold/Silver members from JSON
async function getSpotlights() {
    const res = await fetch('data/members.json');
    const data = await res.json();
    const members = data.members.filter(m => m.level === 'Gold' || m.level === 'Silver');

    // Shuffle array
    const shuffled = members.sort(() => 0.5 - Math.random());
    const spotlight = shuffled.slice(0, 3);

    const container = document.getElementById('spotlight-cards');
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
menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));

// Run functions
getWeather();
getSpotlights();

