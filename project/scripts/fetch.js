import { openModal } from './modal.js';

export async function getCrops(){
  try{
    const res = await fetch('data/crops.json');
    const data = await res.json();
    display(data);
  } catch(e){
    console.error(e);
  }
}

function display(crops){
  const container = document.getElementById("cropsContainer");

  crops.forEach(crop => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <h3>${crop.name}</h3>
      <p>${crop.type}</p>
      <button>Details</button>
   `;

    div.querySelector("button").addEventListener("click", () => {
      openModal(crop);
    });

    container.appendChild(div);
  });
}