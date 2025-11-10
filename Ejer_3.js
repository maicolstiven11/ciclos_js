// Bucle for que recorre desde el niño 1 hasta el niño 10
for (let nino = 1; nino <= 10; nino++) {
    
    // Se pide al usuario que escriba "sí" o "no" para indicar
    // si el niño actual ya tiene dulce.
    let respuesta = prompt(`¿El niño ${nino} ya tiene dulce?\nEscribe "sí" o "no"`);

    // Convertimos la respuesta a minúsculas para evitar errores
    // si el usuario escribe "Sí", "SI", "sI", etc.
    respuesta = respuesta.toLowerCase();

    // Caso 1: si el usuario responde "si"
    if (respuesta === "si") {
        // Se imprime en consola que el niño ya tiene dulce
        // y se usa 'continue' para saltar al siguiente niño.
        console.log(`Niño ${nino}: ya tiene dulce. Se salta.`);
        continue;
    } 
    // Caso 2: si el usuario responde "no"
    else if (respuesta === "no") {
        // Se imprime en consola que al niño se le entrega un dulce.
        console.log(`Niño ${nino}: se entrega un dulce.`);
    } 

    // Incremento adicional de la variable 'nino'.
    // Esto hace que el contador avance de 2 en 2 en lugar de 1 en 1,
    // porque el bucle for ya incrementa 'nino' automáticamente.
    nino++;
}
