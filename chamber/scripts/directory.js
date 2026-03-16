// footer dates

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;


// fetch JSON data

async function getMembers(){

const response = await fetch("data/members.json");

const data = await response.json();

displayMembers(data.members);

}


// display members

function displayMembers(members){

const container = document.getElementById("members");

members.forEach(member => {

const card = document.createElement("section");

card.classList.add("card");

card.innerHTML = `
<img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
<h3>${member.name}</h3>
<p>${member.address}</p>
<p>${member.phone}</p>
<p><a href="${member.url}" target="_blank">${member.url}</a></p>
<p>Membership Level: ${member.level}</p>
`;

container.appendChild(card);

});

}


// grid and list buttons

const gridBtn = document.getElementById("grid");
const listBtn = document.getElementById("list");
const members = document.getElementById("members");

gridBtn.addEventListener("click", () => {

members.classList.add("grid");
members.classList.remove("list");

});

listBtn.addEventListener("click", () => {

members.classList.add("list");
members.classList.remove("grid");

});


// run function

getMembers();

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

navMenu.classList.toggle("open");

});