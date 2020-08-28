//Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5.

function somaProgressiva(num) {
    
    resultadoSoma = (num * (num - 1))/2
    return resultadoSoma;
}

console.log(somaProgressiva(50));