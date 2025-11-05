const prompt = require('prompt-sync')();

const clave = String("eureka")
let vida = 3, userInput;

do {
    userInput = String(prompt(`Introduzca una clave. Vidas restantes: ${vida}: `));
    
    
    if (userInput == clave) {
        console.log('¡Has adivinado la clave!');
        vida = 0;
    } else {
        vida--;
        console.log(`¡Has fallado!`);
    }


} while (vida != 0);