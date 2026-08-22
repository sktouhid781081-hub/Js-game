let gamebtn = document.getElementById("gamebtn")
gamebtn.addEventListener("click", startgame)
function startgame(){
alert("Welcome to our game: guess the number")
let difficulty = prompt(`Choose a difficulty:
    1. Easy (1-50)
    2. Midium (1-100)
    3. Hard (1-1000)`)
let maxNumber;
if(difficulty === "1"){
    maxNumber = 50;
}
else if(difficulty === "2"){
    maxNumber = 100;
}
else if(difficulty === "3"){
    maxNumber = 1000;
}
else{
    alert("Invalid difficulty going to default Midum Difficulty" )
    maxNumber = 100;
}
alert(`Your number should from 0 to ${maxNumber}`)
const x = Math.floor(Math.random() * (maxNumber + 1))
let attempt = 10
for (let i = 1; i <= 10; i++) {
    let a = Number(prompt(`Attempts left ${i}/${attempt}: Guess a number`))
    console.log(x)

    if (a > maxNumber || a < 0) {
        alert("You have no brain")
        i--;
        continue;
    }
    else if (a === x) {
        alert("You are correct and you have won 1core")
        break
    }
    else if (a > x) {
        alert("Your guess is greater than the real number")
    }
    else if (a < x) {
        alert("Your guess is smaller than the real number")
    }
    else {
        alert("")
    }
    if (i === attempt) {
        alert(`GAME OVER The real number is ${x}`)
    }

}
}


