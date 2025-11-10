// Se inicializa la variable 'multiplicacion' en 0.
// Esta servirá para almacenar el resultado de cada operación 5 * j.
let multiplicacion = 0;

// Se inicializa la variable 'bandera' en false.
// Esta actuará como un indicador (flag) para detener los bucles en caso de error.
let bandera = false;

// Primer bucle for: recorre desde i = 0 hasta i = 5.
// Aunque 'i' no se usa directamente en el cálculo, controla la cantidad de intentos.
for (let i = 0; i <= 5; i++) {
    
    // Si 'bandera' es true, significa que hubo un error en la respuesta del usuario.
    // En ese caso, se rompe el bucle principal inmediatamente.
    if (bandera) {
        break;
    }

    // Segundo bucle for: recorre desde j = 1 hasta j = 10.
    // Aquí se generan las multiplicaciones de la tabla del 5.
    for (let j = 1; j <= 10; j++) {
        
        // Se calcula el resultado de 5 * j y se guarda en 'multiplicacion'.
        multiplicacion = (5 * j);

        // Se solicita al usuario que ingrese el resultado de la operación.
        // El mensaje muestra la multiplicación que debe resolver.
        let valor = prompt("ingrese el valor de 5*" + j);

        // Se compara la respuesta del usuario con el resultado correcto.
        if (valor == multiplicacion) {
            // Si la respuesta es correcta, se muestra un mensaje con el resultado.
            alert("imprime el resultado de la " + multiplicacion);
        } else {
            // Si la respuesta es incorrecta:
            // - Se activa la bandera (bandera = true).
            // - Se rompe el bucle interno para detener la ejecución.
            bandera = true;
            break;
        }
    }
}

