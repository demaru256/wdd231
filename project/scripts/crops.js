import { showModal } from "./modal.js";

const container = document.querySelector("#crops");
let cropsData = [];

async function getCrops(){
try{
const response = await fetch("data/crops.json");
const data = await response.json();
cropsData = data;
displayCrops(data);
}
catch(error){
console.error("Error loading crops:", error);
}
}

function displayCrops(crops){

container.innerHTML = "";

crops.forEach(crop => {

const card = document.createElement("section");

card.innerHTML = `
<h3>${crop.name}</h3>
<img src="${crop.image}" alt="${crop.name}" loading="lazy">
<p><strong>Type:</strong> ${crop.type}</p>
<p><strong>Region:</strong> ${crop.region}</p>
<button class="details">Details</button>
<button class="favorite">⭐ Favorite</button>
`;

card.querySelector(".details").addEventListener("click", () => {
showModal(crop);
});

card.querySelector(".favorite").addEventListener("click", () => {
saveFavorite(crop.name);
});

container.appendChild(card);

});

}

function saveFavorite(name){

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

if(!favorites.includes(name)){
favorites.push(name);
localStorage.setItem("favorites", JSON.stringify(favorites));
}

}

document.querySelector("#filter").addEventListener("change", e => {

if(e.target.value === "all"){
displayCrops(cropsData);
}
else{
const filtered = cropsData.filter(crop => crop.type === e.target.value);
displayCrops(filtered);
}

});

getCrops();