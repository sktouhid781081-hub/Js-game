
alert("Welcome to our game Snake, Water & Gun")
let difficulty;
while(true){
difficulty = prompt(`Chose you difficulty(Chose only the number):
    1. Easy 😄 (90% chance to win)
    2. Medium 😐 (50% chance to win)
    3. Hard 😈 (20% chance to win)
    4. Extreme 💀 (5% chance to win)`)
    if(difficulty === "1" || difficulty === "2" || difficulty === "3" || difficulty === "4"){
        break
    }
    else{
        alert("Choose the right difficulty")
    }
}
const obj = {
        1: "Easy",
        2: "Medium",
        3: "Hard",
        4: "Extreme"
    }
    let difficultych = obj[difficulty]
    alert(`You chose ${difficultych}`)
    
let userch;

for (let index = 1; index < 6; index++) {
    alert(`Attempts left: ${index}/5`)
    let tieper = Math.floor(Math.random() * 101)
    while (true) {
        userch = prompt(`Chose your option:
            1. Snake
            2. Water
            3 .Gun`)
        if (userch === "1" || userch === "2" || userch === "3") {
            break
        }
        else {
            alert("You option is invalid!")
        }
    }

    let choice = {
        "1": "Snake",
        "2": "Water",
        "3": "Gun"
    }

    let userchoice = choice[userch];
    alert(`You choosed ${userchoice}`)
    console.log(difficulty)
    function getComputerChoice(difficulty, userchoice) {
        let random = Math.random()
        let items = ["Snake", "Water", "Gun"]
        let computerch = items[Math.floor(Math.random() * items.length)]
        const losesTo = {
            Snake: "Gun",
            Water: "Snake",
            Gun: "Water"
        }
        const winsto = {
            Snake: "Water",
            Water: "Gun",
            Gun: "Snake"
        }
        if(tieper > 20){
            computerch = userchoice
            break
        }
        if(difficulty === "1"){
            if(random < 0.9){
                return userchoice
            }
            else{
                computerch = losesTo[userchoice]
            }
        }
        else if(difficulty === "2"){
            if(random < 0.5){
                computerch = winsto[userchoice]
            }
            else{
                computerch = losesTo[userchoice]
            }
        }
        else if(difficulty === "3"){
            if(random < 0.2){
                computerch = winsto[userchoice]
            }
            else{
                computerch = losesTo[userchoice]
            }
        }
        else if(difficulty === "4"){
            if(random < 0.05){
                computerch = winsto[userchoice]
            }
            else{
                computerch = losesTo[userchoice]
            }
        }
        else{
            
        }        
        console.log(computerch)
        return computerch;

    }
    computerch = getComputerChoice(difficulty, userchoice);
    alert(`Computer choosed ${computerch}`)
    const winsAgainst = {
        Snake: "Water",
        Water: "Gun",
        Gun: "Snake"
    }
    if (userchoice === computerch) {
        alert("The match is tied")
    }
    else if (winsAgainst[userchoice] === computerch) {
        alert("You Won")
    }
    else {
        alert("The computer won")
    }
}
