console.clear();
const prompt = require('prompt-sync')();

let contadorHijos = 0, contadorNoHijos = 0, acumulador = 0;
let minHijos = Infinity;
let maxHijos = 0;

let numPersonas = Number(prompt("Introduce el número de personas --> "));


if(Number.isNaN(numPersonas)) {
    console.log("Formato de dato introducido incorrecto.")
} else if (numPersonas <= 0) {
    console.log("Dato Incorrecto, no puede haber 0 o menos personas.");
} else {
    console.clear();
    console.log("===Introduzca los hijos de cada persona===");
    let userInputHijos;
    let i;
    for(i = 1; i <= numPersonas; i++) {

        userInputHijos = Number(prompt(`Persona ${i} = `));

        if(Number.isNaN(userInputHijos)) {
            console.log("Formato incorrecto.");
        } else if (userInputHijos < 0) {
            console.log("Dato Incorrecto, una persona no puede tener menor de 0 hijos.");
        } else {
            if(userInputHijos > 0) {
                contadorHijos++; 
                acumulador += userInputHijos;
            } else {
                contadorNoHijos++
            }
        }

        if(userInputHijos > maxHijos) {
            maxHijos = userInputHijos;
        } 

        if (userInputHijos < minHijos) {
            minHijos = userInputHijos
        }
    }

    let media = contadorHijos/i;

    console.log("+-------------------------------------------+");
    console.log(`|La cantidad de hijos que hay: ${acumulador}           |`);
    console.log(`|El mínimo de hijos es: ${minHijos}                   |`);
    console.log(`|El máximo de hijos es: ${maxHijos}                   |`);
    console.log(`|La media de hijos es: ${media}                  |`);
    console.log("+-------------------------------------------+")
}

