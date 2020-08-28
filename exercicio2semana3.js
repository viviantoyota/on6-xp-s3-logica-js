//Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros.

function toCelsius(num) {
    
    temperature = (num - 32) * 5 / 9;
    return temperature;
}

console.log("Temperatura em Celsius: " + toCelsius(77).toFixed())