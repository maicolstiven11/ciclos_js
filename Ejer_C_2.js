
// Inicio un ciclo que se repite 5 veces, uno por cada estudiante
for (let estudiante = 1; estudiante <= 5; estudiante++) {

    // Muestro en consola la pregunta general para el estudiante actual
    console.log("El estudiante tiene el carnet estudiantil?");

    // Le pido al usuario que ingrese "sí" o "no" usando prompt
    let ingresa = prompt("Ingrese 'sí' o 'no':");

    // Convierto la respuesta a minúsculas para evitar errores por mayúsculas
    ingresa = ingresa.toLowerCase();

    // Uso un operador ternario para decidir si puede ingresar o no
    let bandera = (ingresa === "si") ? "Puede ingresar" : "No puede ingresar";

    // Muestro el resultado en pantalla con alert
    alert(bandera);
}