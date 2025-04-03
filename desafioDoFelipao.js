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

// Estrutura de decisão para apresentar as mensagens para heroi selecionado
console.log("######## Lista de herois ########")
for (let hero = 0; hero < allHeroes.length; hero++) {
    const element = allHeroes[hero][0];
    console.log((hero + 1) + "º Heroi " + element)
}

let selectedHero = 2 // <<<<<<<<<< VALOR ORDINAL DO HEROI AQUI <<<<<<<<<<
if (selectedHero !== allHeroes.length) {
    let myElo = ""
    if (allHeroes[selectedHero][1] > 0 && allHeroes[selectedHero][1] < 1000) {
        myElo = elo[0]
    } else if (allHeroes[selectedHero][1] >= 1001 && allHeroes[selectedHero][1] <= 2000) {
        myElo = elo[1]         
    } else if (allHeroes[selectedHero][1] >= 2001 && allHeroes[selectedHero][1] <= 5000) {
        myElo = elo[2]         
    } else if (allHeroes[selectedHero][1] >= 5001 && allHeroes[selectedHero][1] <= 7000) {
        myElo = elo[3]         
    } else if (allHeroes[selectedHero][1] >= 7001 && allHeroes[selectedHero][1] <= 8000) {
        myElo = elo[4]         
    } else if (allHeroes[selectedHero][1] >= 8001 && allHeroes[selectedHero][1] <= 9000) {
        myElo = elo[5]         
    } else if (allHeroes[selectedHero][1] >= 9001 && allHeroes[selectedHero][1] <= 10000) {
        myElo = elo[6]         
    } else {
        myElo = elo[7]
    }       
    console.log("--------------------------------")
    console.log("Informações do Heroi selecionado")        
    console.log("Nome: " + allHeroes[selectedHero][0])
    console.log("Experiencia: " + allHeroes[selectedHero][1])
    console.log("Elo: " + myElo)
    console.log("--------------------------------")
} else {
    // Estrutura caso nenhum heroi seja selecionado
    console.log("Existe o total de " + allHeroes.length + " herois e seus nomes são:")
    console.log("######## Lista de herois ########")
    for (let hero = 0; hero < allHeroes.length; hero++) {
        let myElo = ""
        if (allHeroes[hero][1] > 0 && allHeroes[hero][1] < 1000) {
            myElo = elo[0]
        } else if (allHeroes[hero][1] >= 1001 && allHeroes[hero][1] <= 2000) {
            myElo = elo[1]         
        } else if (allHeroes[hero][1] >= 2001 && allHeroes[hero][1] <= 5000) {
            myElo = elo[2]         
        } else if (allHeroes[hero][1] >= 5001 && allHeroes[hero][1] <= 7000) {
            myElo = elo[3]         
        } else if (allHeroes[hero][1] >= 7001 && allHeroes[hero][1] <= 8000) {
            myElo = elo[4]         
        } else if (allHeroes[hero][1] >= 8001 && allHeroes[hero][1] <= 9000) {
            myElo = elo[5]         
        } else if (allHeroes[hero][1] >= 9001 && allHeroes[hero][1] <= 10000) {
            myElo = elo[6]         
        } else {
            myElo = elo[7]
        }       
            
        console.log("Nome: " + allHeroes[hero][0] + " Experiencia: " + allHeroes[hero][1] + " Elo: " + myElo)
        console.log("--------------------------------")
    }
}