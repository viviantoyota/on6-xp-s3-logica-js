/*Crie uma função com as seguintes características:

A função deve receber 3 parâmetros.
Se somente um argumento for passado, retorne o valor do argumento.
Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
Se nenhum argumento for passado, retorne "não recebeu parâmetro"
*/

function calcularNotas(nota1, nota2, nota3){

    if(nota1,"",""){
    return (nota1)

    }else if(nota1,nota2,""){
        soma = nota1 + nota2
        return soma
    }else if(nota1,nota2,nota3){
        soma3 = nota1 + nota2 + nota3
        return soma3
    }

}

console.log(calcularNotas(20,"",""))
console.log(calcularNotas(10,15,""));
console.log(calcularNotas(5,10,15));

    
