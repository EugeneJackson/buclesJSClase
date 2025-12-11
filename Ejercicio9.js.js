console.clear();

let prompt = require('prompt-sync')();

let altura = Number(prompt("Introduzca la altura del cuadrado/rectángulo --> "));
let anchura = Number(prompt("Introduzca la anchura del cuadrado/rectángulo --> "));
let symbol = '*'

if (altura < 1 || anchura < 1) {
    console.log("La altura y la anchura deben ser al menos 1.");
} else {
    for(let i = 1; i <= altura; i++) {
        for(let j = 1; j <= anchura; j++) {
            if (i === 1 || i === altura || j === 1 || j === anchura) {
                process.stdout.write(symbol);
            } else {
                process.stdout.write(' ');
            }
        }
        console.log();
    }
}