document.addEventListener("DOMContentLoaded", function () {
    const km = document.getElementById("km");
    const eta = document.getElementById("eta");
    const calcola = document.getElementById("calcola");
    const risultato = document.getElementById("risultato");
    const kmoutput = document.getElementById("km-output");
    const etaoutput = document.getElementById("eta-output");
    const prezzooutput = document.getElementById("prezzo-output");
    const prezzoscontato = document.getElementById("prezzo-scontato-output");
    const prezzototale = document.getElementById("prezzo-totale-output");


    const prezzo = 0.21; // Prezzo al km
    const sconto = 0.2; // Sconto del 20% per minorenni
    const scontoOver65 = 0.4; // Sconto del 40% per over 65


    calcola.addEventListener("click", function () {
        const kmValue = parseInt(km.value);
        const etaValue = parseInt(eta.value);

        if (isNaN(kmValue) || isNaN(etaValue)) {
            alert("Inserisci valori validi per chilometri ed età.");
            return;
        }

        let prezzoTotale = kmValue * prezzo;
        let scontoApplicato = 0;

        if (etaValue < 18) {
            scontoApplicato = sconto;
            prezzoTotale *= (1 - sconto);
        } else if (etaValue > 65) {
            scontoApplicato = scontoOver65;
            prezzoTotale *= (1 - scontoOver65);
        }

        kmoutput.innerHTML = kmValue + " km";
        etaoutput.innerHTML = etaValue + " anni";
        // Calcolo del prezzo totale
        prezzooutput.innerHTML = "€ " + (kmValue * prezzo).toFixed(2);
        prezzoscontato.innerHTML = "€ " + (kmValue * prezzo * (1 - scontoApplicato)).toFixed(2);
        prezzototale.innerHTML = "€ " + prezzoTotale.toFixed(2);

        risultato.style.display = "block";
    });
});