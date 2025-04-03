// Variável para armazenar o nome e a quantidade de experiência (XP) de um herói
let allHeroes = [
    ["Elzaliel" , 1570],
    ["Anavelin" , 3570],
    ["Cadulix" , 7550],
    ["Andrenzux" , 13093],
    ["Erraim" , 9341],
    ["Smurf" , 15355],
    ["Candelun" , 510]
]
let quantHeroes = allHeroes.length
let ordemHeroes = 1
// Estrutura de decisão para apresentar alguma das mensagens abaixo:
console.log("Existe o total de " + quantHeroes + " herois e seus nomes são:")
console.log("######## Lista de herois ########")
for (let hero = 0; hero < quantHeroes; hero++) {
    console.log("Nome: " + allHeroes[hero][0])  
    console.log("Experiencia: " + allHeroes[hero][1])
    console.log("--------------------------------")
}

switch (ordemHeroes) {
    case 1:
        if (allHeroes[0][1] ) {
            
        }
        console.log("O nome do heroi é " + allHeroes[0][0] + " e contem " + allHeroes[0][1] + " de experiencia ")
        break

    default:
        
        break
}
// Apresentação de mensagem sobre herois e ELOs
 


