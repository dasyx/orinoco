// Ecoute d'événement au passage de la souris sur le titre h1
let hover = document.getElementById('hover');
let bearPrint = document.getElementById('select');

hover.addEventListener('mouseover', mouseOver);
hover.addEventListener('mouseout', mouseOut);

function mouseOver(){
  bearPrint.textContent = "Cliquez sur le bouton 'Ajoutez-moi' pour sélectionner l'ourson"
}
function mouseOut(){
  bearPrint.textContent = ""
}