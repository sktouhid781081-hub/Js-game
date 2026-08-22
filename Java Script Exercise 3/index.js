let getjoke = document.getElementById("refresh")
getjoke.addEventListener("click", getajoke)
let previous = -1;
let count = 0;
function getajoke (){
let jokes = [
    `Why don't scientists trust atoms?
Because they make up everything!`,

`Why did the scarecrow win an award?
Because he was outstanding in his field.`,

`Why can't your nose be 12 inches long?
Because then it would be a foot.`,

`What do you call fake spaghetti?
An impasta.`,

`Why did the math book look sad?
Because it had too many problems.`,

`Why don't skeletons fight each other?
They don't have the guts.`,

`What did one wall say to the other wall?
"I'll meet you at the corner."`,

`Why did the computer go to the doctor?
It caught a virus.`,

`What do you call cheese that isn't yours?
Nacho cheese.`,

`Why was the broom late?
It swept in.`
]
let random;
do {
    random = Math.floor(Math.random() * jokes.length)
} while (previous === random);
previous = random
console.log(random)
console.log(jokes[1])
document.getElementById("di").innerText = jokes[random]
count++;
document.getElementById("displaycount").innerText = (`You have generated joke ${count} many times`)
}
