import { places } from "../data/discover.mjs";

// BUILD CARDS
const container = document.getElementById("discoverCards");

places.forEach((place, index) => {

const card = document.createElement("div");
card.classList.add("discover-card");
card.style.gridArea = String.fromCharCode(97 + index); // a-h

card.innerHTML = `
<h2>${place.name}</h2>

<figure>
<img src="images/${place.image}" alt="${place.name}" loading="lazy">
</figure>

<address>${place.address}</address>

<p>${place.description}</p>

<button>Learn More</button>
`;

container.appendChild(card);

});

// LOCAL STORAGE VISIT MESSAGE
const msg = document.getElementById("visitMessage");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
msg.textContent = "Welcome! Let us know if you have any questions.";
} else {
const days = Math.floor((now - lastVisit) / 86400000);

if (days < 1) {
msg.textContent = "Back so soon! Awesome!";
} else if (days === 1) {
msg.textContent = "You last visited 1 day ago.";
} else {
msg.textContent = `You last visited ${days} days ago.`;
}
}

localStorage.setItem("lastVisit", now);