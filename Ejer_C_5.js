// Inicio la competencia con un ciclo que recorre los 8 corredores
for (let corredor = 1; corredor <= 8; corredor++) {

    // Por cada corredor, inicio un ciclo para que intente dar hasta 4 vueltas
    for (let vuelta = 1; vuelta <= 4; vuelta++) {

        // Le pregunto al usuario si el corredor se cansó en esta vuelta
        let respuesta = prompt(`¿El corredor ${corredor} se cansó en la vuelta ${vuelta}? (sí/no)`);

        // Verifico si la respuesta fue "sí"
        if (respuesta === "sí") {

        // Si el corredor se cansó, muestro que se detuvo y salgo del ciclo de vueltas
        console.log(`Corredor ${corredor} se detuvo en la vuelta ${vuelta}`);
        break;
        }

        // Si no se canso muestro que completó la vuelta
        console.log(`Corredor ${corredor} completó la vuelta ${vuelta}`);
    }

    // Al terminar las vueltas (o si se detuvo), paso al siguiente corredor
}