const buttonGenera = document.getElementById("genera");

buttonGenera.addEventListener("click", function () {
    const chilometri = document.getElementById ("chilometri");
    const prezzo =parseInt(chilometri.value);
    let prezzoTotale = prezzo * 0.21
    const fullName = document.getElementById("full-name");
    const nomePasseggero = document.getElementById("nome-passeggero");
    const offerta = document.getElementById("sconto");
    nomePasseggero.innerHTML = fullName.value;
    const eta = document.getElementById("fascia-eta");

    


    

    const costoBiglietto = document.getElementById("costo")
    if (eta.value === "20") {
        prezzoTotale = prezzoTotale * 0.8;
        costoBiglietto.innerHTML = `${prezzoTotale.toFixed(2)} €`
        offerta.innerHTML = "20%";

    } else if (eta.value === "40") {
        prezzoTotale = prezzoTotale * 0.6;
        costoBiglietto.innerHTML = `${prezzoTotale.toFixed(2)} €`
        offerta.innerHTML = "40%";

    } else {
        costoBiglietto.innerHTML = `${prezzoTotale.toFixed(2)} €`;
        offerta.innerHTML = "0%";
    }
})


const buttonAnnulla = document.getElementById ("annulla");
buttonAnnulla.addEventListener("click", function() {

    alert("Ricarica la pagina Gentilmente e reinserisci i Dati");
})