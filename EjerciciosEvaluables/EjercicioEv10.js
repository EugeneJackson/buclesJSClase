console.clear();
let prompt = require('prompt-sync')();

function calcularSalarioCompleto() {
    const tarifaBase = {
        'licenciado': 100,
        'tecnico': 50,
        'obrero': 30
    };

    const bonoTurno = {
        'primero': 200,
        'segundo': 100,
        'tercero': 300
    };

    const numTrabajadores = parseInt(prompt('Número de trabajadores: '));

    if (isNaN(numTrabajadores) || numTrabajadores <= 0) {
        console.log('Número inválido.');
        return;
    }

    for (let i = 0; i < numTrabajadores; i++) {
        console.log(`\n--- Trabajador ${i + 1} ---`);
        
        const nombre = prompt('Nombre: ');
        
        let puesto;
        do {
            puesto = prompt('Puesto (licenciado, tecnico, obrero): ').toLowerCase();
        } while (!tarifaBase[puesto]);

        let turno;
        do {
            turno = prompt('Turno (primero, segundo, tercero): ').toLowerCase();
        } while (!bonoTurno[turno]);

        let horas = parseInt(prompt('Horas: '));
        while (isNaN(horas) || horas < 0) {
            horas = parseInt(prompt('Horas válidas: '));
        }

        const tarifaPorHora = tarifaBase[puesto]; 
        const bonoAdicional = bonoTurno[turno]; 

        const salarioTotal = (tarifaPorHora * horas) + bonoAdicional;
        
        console.log(`Salario semanal de ${nombre} (${puesto}, turno ${turno}): ${salarioTotal}€`);
    }
}

calcularSalarioCompleto();