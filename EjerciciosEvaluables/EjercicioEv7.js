console.clear();

let prompt = require('prompt-sync')();
let numeros = new Array(20);
let totalPares = 0, totalImpares = 0;

function leerNumeros() {
    for (let i = 0; i < 20; i++) {
        numeros[i] = Number(prompt(`Introduzca el número ${i} --> `));
        console.clear()
    }
    return numeros;
}

leerNumeros();

for(let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        totalPares++;
    } else {
        totalImpares++;
    }
}

console.log(`El total de pares es ${totalPares} y el total de impares es ${totalImpares}`)