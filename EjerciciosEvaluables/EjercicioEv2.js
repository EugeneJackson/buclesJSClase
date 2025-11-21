console.clear();

let prompt = require('prompt-sync')();

let altura = Number(prompt("Dime la altura para la piramide invertida: "));


for (let i = altura; i >= 1; i--) { 
    let linea = '';

    const numEspacios = altura - i;
    for (let j = 0; j < numEspacios; j++) {
        linea += ' '; 
    }

    const numAsteriscos = 2 * i - 1;
    for (let k = 0; k < numAsteriscos; k++) {
        linea += '*'; 
    }

    console.log(linea); 
}