//Crie uma função que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32

function toFahrenheit(num) {
    
    temperature = (num + 32) * 5 / 9;
    return temperature;
}

console.log("Temperatura em Fahrenheit  " + toFahrenheit(25).toFixed())