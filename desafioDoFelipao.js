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
let elo = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"]
// Estrutura de decisão para apresentar alguma das mensagens abaixo:
console.log("Existe o total de " + allHeroes.length + " herois e seus nomes são:")
console.log("######## Lista de herois ########")
for (let hero = 0; hero < allHeroes.length; hero++) {
    let myElo = ""
    switch (allHeroes) {
        case allHeroes[hero][1] > 0 || allHeroes[hero][1] < 1000 :
              
            break
    
        default:
            
            break
    }
    
    console.log("Nome: " + allHeroes[hero][0] + " Experiencia: " + allHeroes[hero][1] + " Elo: " + elo)
    console.log("--------------------------------")
}

// Apresentação de mensagem sobre herois e ELOs


