/*
Faça um programa que leia a largura e o comprimento de um
terreno retangular, calculando e mostrando a sua área em m2. O
programa também deve mostrar a classificação desse terreno, de
acordo com a lista abaixo:
Abaixo de 100m2 = TERRENO POPULAR
Entre 100m2 e 500m2 = TERRENO MASTER
Acima de 500m2 = TERRENO VIP 
*/

let largura = parseFloat(prompt("Digite a largura do seu terreno:"))
let comprimento = parseFloat(prompt("Digite o comprimento do seu terreno:"))
let area = largura * comprimento

if (area < 100) {
    document.write(`Terreno Popular, ${area}m2.`)
} else if (area >= 100 && area <= 500) {
    document.write(`Terreno Master, ${area}m2.`)
} else {
    document.write(`Terreno VIP, ${area}m2.`)
}