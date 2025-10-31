const prompt = require('prompt-sync')();

let userInput = Number(prompt("Introduzca un número: "));


if (!Number.isNaN(userInput)) {
    let contador = 1, acumulador = 0;

    while (contador <= 2*userInput) {

        if (contador % 2 == 0) {
            acumulador += contador
            console.log(`${contador} = ${acumulador}`);
        }
        contador++;
    }

} else {
    console.log("El dato introducido no es un número.")
}
