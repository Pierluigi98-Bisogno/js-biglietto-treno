// Get DOM elements
const calculateButton = document.getElementById('calcola');
const kmInput = document.getElementById('km');
const etaInput = document.getElementById('eta');
const kmOutput = document.getElementById('km-output');
const prezzoOutput = document.getElementById('prezzo-output');
const etaOutput = document.getElementById('eta-output');
const prezzoTotaleOutput = document.getElementById('prezzo-totale-output');

// Price per kilometer
const PRICE_PER_KM = 0.21;

// Discount percentages
const UNDER_18_DISCOUNT = 0.20;
const OVER_65_DISCOUNT = 0.40;

calculateButton.addEventListener('click', function() {
    // Get input values
    const km = parseFloat(kmInput.value);
    const eta = parseInt(etaInput.value);

    // Calculate base price
    const basePrice = km * PRICE_PER_KM;

    // Calculate discount based on age
    let discount = 0;
    if (eta < 18) {
        discount = UNDER_18_DISCOUNT;
    } else if (eta >= 65) {
        discount = OVER_65_DISCOUNT;
    }

    // Calculate final price
    const discountAmount = basePrice * discount;
    const finalPrice = basePrice - discountAmount;

    // Display results
    kmOutput.textContent = km;
    etaOutput.textContent = eta;
    prezzoOutput.textContent = basePrice.toFixed(2) + '€';
    prezzoTotaleOutput.textContent = finalPrice.toFixed(2) + '€';
});