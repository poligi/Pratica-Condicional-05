/*
Faça um algoritmo que leia a idade de vários alunos de uma turma.
O programa vai parar quando for digitada a idade 999. No final,
mostre quantos alunos existem na turma e qual é a média de idade
do grupo.
*/

let idade
let somaIdades = 0
let numeroAlunos = 0

while (true) {
    idade = parseInt(prompt("Digite as idades dos alunos (ou 999 para parar):"))

    switch (idade) {
        case 999:
            break
        default:
            somaIdades += idade 
            numeroAlunos++
    }

    if (idade === 999) {
        break
    }
}

if (numeroAlunos > 0) {
    let mediaIdades = somaIdades / numeroAlunos
    document.write(`Número de alunos na turma: ${numeroAlunos} <br>`)
    document.write(`Média de idade da turma: ${mediaIdades}`)
}