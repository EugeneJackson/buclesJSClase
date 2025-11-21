console.clear();
const prompt = require('prompt-sync')();

let max = 0;
let totalVotos = 0;
let indiceGanador = 0;
let porcentaje = 0;
let ganador = "";
const votos = new Array(3);

function leerVotos(candidatos) {
    let num;

    do {
        num = Number(prompt(`Introduzca votos del ${candidatos} --> `));
        if(Number.isNaN(num)) {
            console.log("Formato de dato incorrecto.");
        }
    } while (Number.isNaN(num));
    return num;
}

let contador = 1;
let contadorArray = 0;
while (contador <= 3) {
    votos[contadorArray] = leerVotos(`Candidato ${contador}`);
    contadorArray++;
    contador++
}

for(let i = 0; i < votos.length; i++) {
    if(votos[i] > max) {
        max = votos[i]
        indiceGanador = i;
    }
    totalVotos += votos[i]
}
console.clear();

let contadorImp = 1;
for(let i = 0; i < votos.length; i++) {
    porcentaje = (votos[i] / totalVotos) * 100;

    if(i == indiceGanador) {
        ganador = "GANADOR";
    } else {
        ganador = "PERDEDOR";
    }

    console.log(`Candidato ${contadorImp} tiene un porcentaje de votos de ${porcentaje}% y es ${ganador}`);
    contadorImp++;
}