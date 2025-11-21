console.clear();
let menu = 0;
const prompt = require('prompt-sync')();

function areaTriangulo(base, altura) {
    let resultadoTriang = (base * altura) / 2;
    return resultadoTriang;
}

function areaCuadrado(lado) {
    let resultadoCuadrado = Math.pow(lado, 2);
    return resultadoCuadrado;
}

function areaCirculo(radio) {
    let resultadoCirculo = Math.PI * (Math.pow(radio, 2));
    return resultadoCirculo;
}

console.log("===Calcular áreas===");
console.log(`1. Calcular el área de un Triángulo.`);
console.log(`2. Calcular el área de un Cuadrado.`);
console.log(`3. Calcular el área de un Círculo.`);
console.log(`4. Cerrar.`);
menu = Number(prompt("Introduzca el número del menú --> "));
console.clear();

switch (menu) {
    case 1:
        console.log("===Calcular el área de un Triángulo===");
        let altura = Number(prompt("Introduzca la altura --> "));
        let base = Number(prompt("Introduzca la base --> "));
        console.log(`El área del triángulo es: ${areaTriangulo(altura, base)}`);
        break;
    case 2:
        console.log("===Calcular el área de un Cuadrado.===");
        let lado = Number(prompt("Introduzca el lado --> "));
        console.log(`El área de un cuadrado es: ${areaCuadrado(lado)}`)
        break;
    case 3:
        console.log("===Calcular el área de un círculo===");
        let radio = Number(prompt("Introduzca el radio --> "));
        console.log(`El área de un circulo es: ${areaCirculo(radio)}`)
        break;
    case 4:
        console.log("¡Hasta luego!")
        break;
    default:
        console.log("Opción del menú incorrecto.")
        break;
}