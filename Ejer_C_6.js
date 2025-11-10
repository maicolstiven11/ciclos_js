// Inicio el ciclo para simular la venta de 15 boletos
for (let i = 1; i <= 15; i++) {
    // Pido al usuario la edad del comprador actual
    let edad = parseInt(prompt(`Comprador ${i}: ¿Cua<l es su edad?`));

    // Pido al usuario si la película es para adultos
    let tipo = prompt("¿La pelicula es para adultos? (si/no)");

    // Verifico si el comprador es menor de edad y la película es para adultos
    if (edad < 18 && tipo === "si") {

        // Si se cumple la condición, rechazo la venta
        console.log(`Venta rechazada para comprador ${i}: menor de edad para pelicula para adultos`);

    } else {

        // Si no se cumple la condición, realizo la venta
        console.log(`Boleto vendido al comprador ${i}`);
    }

    // Continuo con el siguiente comprador hasta completar los 15
}