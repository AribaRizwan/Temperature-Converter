function convertTemperature() {
    const inputTemperature = document.getElementById('inputTemperature').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const resultDiv = document.getElementById('result');
    
    if (isNaN(inputTemperature) || inputTemperature === "") {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }

    let convertedTemperature;
    let convertedUnit;

    if (inputUnit === "celsius") {
        convertedTemperature = (inputTemperature * 9/5) + 32;
        convertedUnit = "Fahrenheit";
    } else if (inputUnit === "fahrenheit") {
        convertedTemperature = (inputTemperature - 32) * 5/9;
        convertedUnit = "Celsius";
    } else if (inputUnit === "kelvin") {
        convertedTemperature = inputTemperature - 273.15;
        convertedUnit = "Celsius";
    }

    resultDiv.textContent = `${inputTemperature} ${inputUnit.charAt(0).toUpperCase() + inputUnit.slice(1)} is ${convertedTemperature.toFixed(2)} ${convertedUnit}.`;
}