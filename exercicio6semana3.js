/*O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. 
Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o 
número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa 
precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. 
Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os 
preços de 1 até 50 produtos
*/
let contador = 1
num = 0
while(contador <= 50 ){
    num = num + 1.99
    
    console.log(contador,'-',num.toFixed(2))
    contador++;
}

