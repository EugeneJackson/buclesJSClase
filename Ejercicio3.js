const prompt = require('prompt-sync')();

let userInput = Number(prompt("Dime un número: ")), contador = 1;

while (contador <= userInput) {
    contador += userInput;
    console.log(contador)
    contador++;
}
