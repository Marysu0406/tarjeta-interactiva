const card = document.getElementById('card');
const form = document.getElementById('card-form');

// Inputs
const inputNumber = document.getElementById('input-number');
const inputName = document.getElementById('input-name');
const inputMonth = document.getElementById('input-month');
const inputYear = document.getElementById('input-year');
const inputCVV = document.getElementById('input-cvv');

// Displays en la tarjeta
const displayNumber = document.getElementById('display-number');
const displayName = document.getElementById('display-name');
const displayMonth = document.getElementById('display-month');
const displayYear = document.getElementById('display-year');
const displayCVV = document.getElementById('display-cvv');

// Evento para el número (con espaciado automático)
inputNumber.addEventListener('keyup', (e) => {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = value.match(/.{1,4}/g);
    if (formattedValue) {
        e.target.value = formattedValue.join(' ');
    }
    displayNumber.innerText = e.target.value || "#### #### #### ####";
});

// Evento para el nombre
inputName.addEventListener('keyup', (e) => {
    displayName.innerText = e.target.value.toUpperCase() || "NOMBRE COMPLETO";
});

// Eventos para fechas
inputMonth.addEventListener('change', (e) => displayMonth.innerText = e.target.value);
inputYear.addEventListener('change', (e) => displayYear.innerText = e.target.value);

// Llenar select de Meses
for(let i = 1; i <= 12; i++){
    let option = document.createElement('option');
    option.value = i < 10 ? '0' + i : i;
    option.innerText = i < 10 ? '0' + i : i;
    inputMonth.appendChild(option);
}

// Llenar select de Años (del año actual a 8 años más)
const yearActual = new Date().getFullYear(); // 2026
for(let i = 0; i <= 8; i++){
    let option = document.createElement('option');
    let yearFull = yearActual + i;
    option.value = yearFull.toString().slice(-2); // Guarda solo los últimos 2 dígitos (26, 27...)
    option.innerText = yearFull;
    inputYear.appendChild(option);
}

// Lógica de Giro para el CVV
inputCVV.addEventListener('focus', () => {
    card.querySelector('.card-inner').classList.add('is-flipped');
});

inputCVV.addEventListener('blur', () => {
    card.querySelector('.card-inner').classList.remove('is-flipped');
});

inputCVV.addEventListener('keyup', (e) => {
    displayCVV.innerText = e.target.value || "***";
});