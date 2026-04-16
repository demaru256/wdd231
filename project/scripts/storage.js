export function saveFavorite(crop){
  let fav = JSON.parse(localStorage.getItem("fav")) || [];
  fav.push(crop);
  localStorage.setItem("fav", JSON.stringify(fav));
}