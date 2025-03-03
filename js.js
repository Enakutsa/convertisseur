let value1 = document.getElementById("first-value");
let unit1 = document.getElementById("first-unit");
let value2 = document.getElementById("second-value");
let unit2 = document.getElementById("second-unit");
let button = document.getElementById("convert-btn");

const convertValue = () => {
    let val1 = parseFloat(value1.value); 
    let unitVal1 = unit1.value;
    let unitVal2 = unit2.value;

    if (isNaN(val1)) {
        value2.value = "Entrez un nombre !";
        return;
    }

    let value1InMeters;

    // Convertir la valeur entrée en mètres
    switch (unitVal1) {
        case "km":
            value1InMeters = val1 * 1000;
            break;
        case "cm":
            value1InMeters = val1 * 0.01;
            break;
        case "mm":
            value1InMeters = val1 * 0.001;
            break;
        default:
            value1InMeters = val1; // Déjà en mètres
    }

    let convertedValue;

    // Convertir de mètres à l'unité cibleerrr
    switch (unitVal2) {
        case "km":
            convertedValue = value1InMeters / 1000;
            break;
        case "cm":
            convertedValue = value1InMeters * 100;
            break;
        case "mm":
            convertedValue = value1InMeters * 1000;
            break;
        default:
            convertedValue = value1InMeters; // Déjà en mètres
    }

    value2.value = convertedValue;
};

button.addEventListener("click", convertValue);

unit2.addEventListener("change", () => {
    value2.value = "";
});
