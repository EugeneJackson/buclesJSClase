console.clear();

let prompt = require('prompt-sync')();

let altura = Number(prompt("Introduzca la altura del cuadrado --> "));
let anchura = Number(prompt("Introduzca la anchura del cuadrado --> "));
let symbol = '*'

for(let i = 1; i <= altura; i++) {
    for(let j = 1; j <= anchura; j++) {
        process.stdout.write(symbol);
    }
    console.log()
}