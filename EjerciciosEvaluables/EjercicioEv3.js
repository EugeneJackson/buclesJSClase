console.clear();
const prompt = require('prompt-sync')();

let numAleatorio = Math.floor(Math.random() * 101);
console.log(numAleatorio);

function leerNumero() {
    let userInput;
    do {
        userInput = Number(prompt("Introduzca un número del 0 al 100 --> "))
    } while (userInput < 0 || userInput > 100 || Number.isNaN(userInput));

    return userInput;
}

const numUser = leerNumero();

function comprobarValor(userInput, numAleatorio) {
    
    if(userInput === numAleatorio) {
        return 0;
    } else if(userInput > numAleatorio) {
        return 1;
    } else {
        return -1;
    }
}

console.log("===Introducir números===")
console.log(numUser);
console.clear();

console.log("===Comprobar el Valor===")
console.log("Si el número es igual = 0 \nSi el número es mayor = 1\nSi el número es menor = -1"); 
console.log(comprobarValor(numUser, numAleatorio));
