//Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media de todos ellos.
const prompt = require('prompt-sync')();

let userInput, max = -Infinity, min = Infinity, media = 0, contador = 0, suma = 0;

while (userInput != 0) {
    userInput = Number(prompt("Introduzca un número entero, para parar, introduzca 0: "))
    if (userInput !=0) {
        contador++;
        suma+=userInput;
        if (userInput>max) {
            max = userInput;
        }
        if (userInput<min) {
            min = userInput;
        }
    }
}

media = suma/contador;
console.log(`El minimo es ${min}, el máximo es ${max} y la media es ${media}`);