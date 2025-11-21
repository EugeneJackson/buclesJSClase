console.clear();

let prompt = require('prompt-sync')();

function factorial(userInput) {
    if (userInput == 0) return 1;
    return (userInput * factorial(userInput - 1));
}

let userInput = Number(prompt("Introduzca un número para calcular la factorial --> "));

console.log(`La factorial de ${userInput} = ${factorial(userInput)}`)