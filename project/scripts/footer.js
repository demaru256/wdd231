const lastUpdated = document.querySelector("#lastUpdated");

if (lastUpdated) {
  const now = new Date();

  lastUpdated.textContent =
    "Last updated: " + now.toLocaleDateString() + " " + now.toLocaleTimeString();
}