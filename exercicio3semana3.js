//Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros.

function toMillimiter(num) {
    
    medida = (num) / 0.0010000;
    return medida;
}

console.log("Valor em Milimetros: " + toMillimiter(6).toFixed())