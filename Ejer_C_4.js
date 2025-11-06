// Primero le pido al usuario que ingrese el saldo inicial disponible en su cuenta
let saldo = parseFloat(prompt("Ingrese el saldo inicial:"));

// Luego inicio un ciclo que se repite mientras el saldo sea suficiente para retirar
while (saldo > 0) {


    // Dentro del ciclo, le pido al usuario que ingrese el monto que desea retirar
    let retiro = parseFloat(prompt("¿Cuánto desea retirar?"));

    // Verifico si el saldo alcanza para hacer ese retiro
    if (retiro <= saldo) {

        // Si el saldo es suficiente, actualizo el saldo restando el retiro
        saldo -= retiro;

        // Muestro el nuevo saldo disponible después del retiro
        console.log(`Retiro exitoso. Saldo restante: $${saldo}`);

    } else {

        // Si el saldo no alcanza, informo que no se puede hacer el retiro
        console.log("Saldo insuficiente para realizar el retiro.");
        
        // Salgo del ciclo porque ya no se puede continuar
        break;
    }
}

// Finalmente, muestro que el proceso ha terminado
console.log("Operación finalizada.");
