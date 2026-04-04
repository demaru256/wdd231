// timestamp
const timestamp = document.getElementById("timestamp");

if (timestamp) {
timestamp.value = new Date().toISOString();
}

// modals

const links = document.querySelectorAll("[data-modal]");
const closeBtns = document.querySelectorAll(".close");

links.forEach(link => {

link.addEventListener("click", e => {

e.preventDefault();

const modal = document.getElementById(link.dataset.modal);

modal.showModal();

});

});

closeBtns.forEach(btn => {

btn.addEventListener("click", () => {

btn.parentElement.close();

});

});