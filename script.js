let userFlavors = prompt("Enter your order");

console.log(userFlavors)


let userInput = userFlavors.split(",")

console.log(userInput)

const userOrder = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0

}

for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] == "vanilla") {
userOrder.vanilla ++
    }


}

for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] == "strawberry") {
userOrder.strawberry ++
    }


}

for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] == "coffee") {
userOrder.coffee ++
    }


}

console.table(userOrder)