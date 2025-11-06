// Declaro un vector vacío para guardar los 10 números que el usuario ingresará
let numeros = [];

//  Inicio un ciclo que se repite 10 veces, uno por cada número que necesito pedir
for (let i = 1; i <= 10; i++) {

    // Le pido al usuario que ingrese el número correspondiente
    let entrada = parseFloat(prompt(`Ingrese el número ${i}:`));

    //  Guardo ese número dentro del vector 'numeros'
    numeros.push(entrada);
}

//  Muestro en pantalla solo los números que sean mayores que 50
console.log("Números mayores que 50:");

for (let i = 0; i < numeros.length; i++) {

    //  Verifico si el número actual es mayor que 50
    if (numeros[i] > 50) {

        //  Si cumple la condición, lo imprimo en consola
        console.log(numeros[i]);
    }

  // Si no cumple la condición, no se muestra nada
}
