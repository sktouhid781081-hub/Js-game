let container = document.querySelector(".container")
container.style.display = "none"

let containerpa2 = document.querySelector(".containerpa2")
containerpa2.style.display = "none"
let homepage = document.querySelector(".homepage")

let startbutton = document.querySelector(".startbutton")
let almari = document.querySelector(".almari")
almari.style.display = "block"

startbutton.addEventListener("click", function () {
    almari.style.display = "none"
    difficultycontainer.style.display = "flex"
})

homepage.addEventListener("click", function(){
    almari.style.display = "block"
    container.style.display = "none"
    containerpa2.style.display = "none"
    almari2.style.display = "none"
})

let userchoice;
let charecter = document.querySelectorAll(".charecter")
console.log(charecter)
let almari2 = document.querySelector(".almari2")
almari2.style.display = "none"

let snake = document.querySelector(".snake1")
let water = document.querySelector(".water2")
let gun = document.querySelector(".gun3")
let computerchoice;

let difficultycontainer = document.querySelector(".difficultycontainer")
difficultycontainer.style.display = "none"

let difficulty = Array.from(document.querySelector(".difficultycontainer").children)
console.log(typeof difficulty)
let userchoicediff;
difficulty.forEach(element => {
    element.addEventListener("click", function(){
        if(element === difficulty[0]){
            userchoicediff = "peaceful"
            fordifficultyloop()

        }
        if(element === difficulty[1]){
            userchoicediff = "easy"
            fordifficultyloop()
        }
        if(element === difficulty[2]){
            userchoicediff = "medium"
            fordifficultyloop()
        }
        if(element === difficulty[3]){
            userchoicediff = "hard"
            fordifficultyloop()
        }
        if(element === difficulty[4]){
            userchoicediff = "extreme"
            fordifficultyloop()
        }
        if(element === difficulty[5]){
            userchoicediff = "impossible"
            fordifficultyloop()
        }
    })
});

function fordifficultyloop(){
    almari.style.display = "none"
    container.style.display = "flex"
    difficultycontainer.style.display = "none"
}

function rrtt (){
    almari.style.display = "none"
    almari2.style.display = "none"
    container.style.display = "flex"
    containerpa2.style.display = "flex"
}

function rttr (){
    setTimeout(() => {
                if (computerchoice === userchoice) {
                    alert("The match is tied")
                    rrtt()
                }
                if (computerchoice === winsto[userchoice]) {
                    alert("you won the match")
                    rrtt()
                }
                if (userchoice === winsto[computerchoice]) {
                    alert("computer won the match")
                    rrtt()
                }
            }, 600)
}

function ifforcomputer(){
    if (computerchoice === "Snake") {
                almari2.style.display = "block"
                snake.style.display = "block"
                water.style.display = "none"
                gun.style.display = "none"
                // computerchoice = "Snake"
                containerpa2.style.display = "none"
            }
            if (computerchoice === "Water") {
                almari2.style.display = "block"
                snake.style.display = "none"
                water.style.display = "block"
                gun.style.display = "none"
                // computerchoice = "Water"
                containerpa2.style.display = "none"
            }
            if (computerchoice === "Gun") {
                almari2.style.display = "block"
                snake.style.display = "none"
                water.style.display = "none"
                gun.style.display = "block"
                // computerchoice = "Gun"
                containerpa2.style.display = "none"
            }
}

function computerman(){
    let random = Math.floor(Math.random() * 100)
            console.log(random)
            const losesto ={
                Snake: "Gun",
                Water: "Snake",
                Gun: "Water"
            }

            const winsto ={
                Snake: "Water",
                Water: "Gun",
                Gun: "Snake"
            }

            if(userchoicediff === "peaceful"){
                computerchoice = winsto[userchoice]
                ifforcomputer()
            }

            if(userchoicediff === "easy"){
                if(random < 90){
                    computerchoice = winsto[userchoice]
                    ifforcomputer()
                }
                else{
                    computerchoice = losesto[userchoice]
                    ifforcomputer()
                }
            }

            if(userchoicediff === "medium"){
                if(random < 50){
                    computerchoice = winsto[userchoice]
                    ifforcomputer()
                }
                else{
                    computerchoice = losesto[userchoice]
                    ifforcomputer()
                }
            }
            if(userchoicediff === "hard"){
                if(random < 10){
                    computerchoice = winsto[userchoice]
                    ifforcomputer()
                }
                else{
                    computerchoice = losesto[userchoice]
                    ifforcomputer()
                }
            }
            if(userchoicediff === "extreme"){
                if(random < 5){
                    computerchoice = winsto[userchoice]
                    ifforcomputer()
                }
                else{
                    computerchoice = losesto[userchoice]
                    ifforcomputer()
                }
            }
            if(userchoicediff === "impossible"){
                computerchoice = losesto[userchoice]
                ifforcomputer()
            }

            // if (computerchoice === charecter[0]) {
            //     almari2.style.display = "block"
            //     snake.style.display = "block"
            //     water.style.display = "none"
            //     gun.style.display = "none"
            //     computerchoice = "Snake"
            //     containerpa2.style.display = "none"
            // }
            // if (computerchoice === charecter[1]) {
            //     almari2.style.display = "block"
            //     snake.style.display = "none"
            //     water.style.display = "block"
            //     gun.style.display = "none"
            //     computerchoice = "Water"
            //     containerpa2.style.display = "none"
            // }
            // if (computerchoice === charecter[2]) {
            //     almari2.style.display = "block"
            //     snake.style.display = "none"
            //     water.style.display = "none"
            //     gun.style.display = "block"
            //     computerchoice = "Gun"
            //     containerpa2.style.display = "none"
            // }
}

charecter.forEach(element => {
    element.addEventListener("click", function () {
        userchoice = element
        container.style.display = "none"
        if (userchoice === charecter[0]) {
            userchoice = "Snake"
            computerman()
            rttr ()
        }
        if (userchoice === charecter[1]) {
            userchoice = "Water"
            computerman()
            rttr ()
        }

        if (userchoice === charecter[2]) {
            userchoice = "Gun"
            computerman()
            rttr ()
        }
    })
});
const winsto = {
    Snake: "Water",
    Water: "Gun",
    Gun: "Snake"
}