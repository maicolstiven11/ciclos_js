// Bucle for que inicia la variable i en 1
// Se repetirá mientras i sea menor o igual a 10
// En cada iteración, i aumenta en 1
for (let i = 1; i <= 10; i++) {
    
    // Condición: verifica si el número i es par
    // Esto se logra usando el operador módulo (%),
    // que devuelve el residuo de la división de i entre 2.
    // Si el residuo es 0, significa que i es divisible por 2.
    if (i % 2 === 0) {
        
        // Si la condición se cumple, imprime el valor de i en la consola
        console.log(i);
    }
}