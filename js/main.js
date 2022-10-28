const fullName = document.getElementById("full-name");
const nomePasseggero = document.getElementById("nome-passeggero");
const offerta = document.getElementById("sconto");

const eta = document.getElementById("fascia-eta");
let sceltaOption = eta.selectedIndex;

console.log( fullName.value);

const buttonGenera = document.getElementById("genera");

buttonGenera.addEventListener( "click", function() {

nomePasseggero.innerHTML = fullName.value;

offerta.innerHTML = eta.value;




})