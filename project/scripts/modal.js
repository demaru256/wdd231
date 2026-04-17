export function showModal(crop){
  const modal = document.querySelector("#modal");
  const content = document.querySelector("#modal-content");

  content.innerHTML = `
    <h2>${crop.name}</h2>
    <img src="${crop.image}">
    <p>${crop.description}</p>
  `;

  modal.showModal();
}

document.querySelector("#close").addEventListener("click", () => {
  document.querySelector("#modal").close();
});