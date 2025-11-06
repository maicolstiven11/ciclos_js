// Inicio un ciclo que se repite 5 veces, uno por cada persona
for (let i = 1; i <= 5; i++) {

    // Pido al usuario el nombre de la persona actual
    let nombre = prompt(`Ingrese el nombre de la persona ${i}:`);

    // Pido al usuario la edad de esa persona
    let edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));

    // Verifico si la persona tiene 18 años o más
    if (edad >= 18) {

        // Si cumple la condición, muestro su nombre y edad en pantalla
        console.log(`${nombre} tiene ${edad} años y es mayor de edad`);
    }

    // Si no cumple la condición, no se muestra nada y paso a la siguiente persona
}