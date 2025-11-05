const prompt = require('prompt-sync')();

let userInput, suma = 0, contador=0;

if (!Number.isNaN(userInput)) {
    do {
        userInput = Number(prompt("Dime una serie de números, -1 si quiere parar: "));
        if (userInput != -1) {
            contador++;
            suma += userInput;
        }

    } while (userInput != -1);

    let resultado = suma/contador;
    console.log(resultado);
} else {
    console.log("El formato del dato introducido es incorrecto.")
}

