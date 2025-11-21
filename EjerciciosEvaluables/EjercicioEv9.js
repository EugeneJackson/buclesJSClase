console.clear();
const prompt = require('prompt-sync')();

let menu = "";

console.log("===Calculadora===");
console.log("Suma");
console.log("Resta");
console.log("Multiplicación");
console.log("División");
console.log("Raíz")
console.log("Para salir, pulse 'q'");
menu = String(prompt("Introduzca el nombre de la operación --> ").toLowerCase())
console.clear();

switch(menu) {
    case "suma":
        console.log("===Suma===");
        let num1Sum = Number(prompt("Introduzca el número 1 --> "));
        let num2Sum = Number(prompt("Introduzca el número 2 --> "));
        let resultadoSum = num1Sum+num2Sum;

        console.log(`El resultado de ${num1Sum} + ${num2Sum} = ${resultadoSum}`)
        break;
    case "resta":
        console.log("===Resta===");
        let num1Res = Number(prompt("Introduzca el número 1 --> "));
        let num2Res = Number(prompt("Introduzca el número 2 --> "));
        let resultadoRes = num1Res - num2Res;

        console.log(`El resultado de ${num1Res} - ${num2Res} = ${resultadoRes}`);
        break;
    case "multiplicación":
    case "multiplicacion":
        console.log("===Multiplicación===");
        let num1Mul = Number(prompt("Introduzca el número 1 --> "));
        let num2Mul = Number(prompt("Introduzca el número 2 --> "));
        let resultadoMul = num1Mul* num2Mul;

        console.log(`El resultado de ${num1Mul} - ${num2Mul} = ${resultadoMul}`);
        break;
    case "división":
    case "division":
        console.log("===División===");
        let num1Div = Number(prompt("Introduzca el número 1 --> "));
        let num2Div = Number(prompt("Introduzca el número 2 --> "));
        let resultadoDiv = num1Div / num2Div;

        console.log(`El resultado de ${num1Div} - ${num2Div} = ${resultadoDiv}`);
        break;
    case "raiz":
    case "raíz":
        console.log("===Raíz===");
        let num1Raiz = Number(prompt("Introduzca el número 1 --> "));
        let resultadoRaiz = Math.sqrt(num1Raiz);

        console.log(`La raiz de ${ num1Raiz} = ${resultadoRaiz}`);
        break;
    case "q":
        console.log("¡Hasta luego!");
        break;
    default:
        console.log("Dato introducido incorrecto");
        break;
}
