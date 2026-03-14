const menuBtn = document.querySelector("#menu");
const nav = document.querySelector("#nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Close menu when a link is clicked
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
});