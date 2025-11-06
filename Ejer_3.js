for (let nino = 1; nino <= 10; nino++) {
    // Pedimos al usuario que escriba "sí" o "no"
    let respuesta = prompt(`¿El niño ${nino} ya tiene dulce?\nEscribe "sí" o "no"`);

    // Convertimos la respuesta a minúsculas para evitar errores por mayúsculas
    respuesta = respuesta.toLowerCase();

    if (respuesta === "si") {
        console.log(`Niño ${nino}: ya tiene dulce. Se salta.`);
        continue;
    } 
    else if (respuesta === "no") {
        console.log(`Niño ${nino}: se entrega un dulce.`);
    } 
    nino++;
}