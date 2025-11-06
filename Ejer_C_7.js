// Primero declaro una variable para acumular la suma de los números
let suma = 0;

// Luego, inicio un ciclo que recorre los números del 1 al 100
for (let i = 1; i <= 100; i++) {

  // Verifico si el número actual es mayor a 90 y además es par
  if (i > 90 && i % 2 === 0) {

    // Si se cumple la condición, muestro un mensaje de interrupción
    console.log(`Interrupción: el número ${i} es mayor a 90 y par`);

    // Detengo el ciclo con break
    break;
  }

  // Si no se cumple la condición, sumo el número actual a la variable 'suma'
  suma += i;
}

// Al fina muestro la suma acumulada antes de la interrupción
console.log(`Suma total acumulada: ${suma}`);