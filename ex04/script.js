/*
Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
descontos para todos, mas especialmente para mulheres. Faça um
programa que leia nome, sexo e o valor das compras do cliente e
calcule o preço com desconto. Sabendo que:
a. Homens ganham 5% de desconto
b. Mulheres ganham 13% de desconto 
*/

let nome = prompt("Digite seu nome:")
let sexo = prompt("Digite seu sexo (M ou F):")
let valorCompras = parseFloat(prompt("Digite o valor das suas compras:"))
let valorFinal

if (sexo === 'M') {
    valorFinal = valorCompras * 0.95
} else if (sexo === 'F') {
    valorFinal = valorCompras * 0.87 
} 

document.write(`Obrigado, ${nome}! O valor das suas compras é de ${valorCompras},00, com o desconto aplicado ficou ${valorFinal},00! `)
