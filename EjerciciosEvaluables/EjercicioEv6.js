console.clear();

let prompt = require('prompt-sync')();

let inicioRango, finRango;
let suma = 0;

inicioRango = Number(prompt("Introduzca el inicio del Rango --> "))
finRango = Number(prompt("Introduzca el inicio del Rango --> "))

if (Number.isNaN(inicioRango || finRango)) {
    console.log("Formato incorrecto.")
} else if (inicioRango > finRango) {
    let temp = inicioRango;
    inicioRango = finRango;
    finRango = temp;
} 

for(let i = inicioRango; i <= finRango; i++) {
        suma += i;
    }


console.log(`La suma en el rango de ${inicioRango} y ${finRango} = ${suma}`);