import { showModal } from "./modal.js";

const container = document.querySelector("#crops");
const filter = document.querySelector("#filter");

let cropsData = [];

async function getCrops(){
  const res = await fetch("data/crops.json");
  const data = await res.json();
  cropsData = data;
  displayCrops(data);
}

function displayCrops(crops){
  container.innerHTML = "";

  crops.forEach(crop => {
    const card = document.createElement("section");

    card.innerHTML = `
      <h3>${crop.name}</h3>
      <img src="${crop.image}">
      <p>${crop.type}</p>
      <button class="details">Details</button>
    `;

    card.querySelector(".details").addEventListener("click", () => {
      showModal(crop);
    });

    container.appendChild(card);
  });
}

filter.addEventListener("change", e => {
  if(e.target.value === "all"){
    displayCrops(cropsData);
  } else {
    const filtered = cropsData.filter(c => c.type === e.target.value);
    displayCrops(filtered);
  }
});

getCrops();