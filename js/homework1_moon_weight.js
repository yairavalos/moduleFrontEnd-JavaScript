/**
 * 1:
 * Pedir al usuario estos 3 datos
 * - Nombre
 * - Peso actual
 * Calcular el peso que tendria esa persona en la luna
 * Imprimirlo en consola
 * ** Opcional -> Crear una función **
 */

/*
    This is my research:
    https://sciencing.com/calculate-weight-moon-7812905.html
*/

let userName;
let currentWeight;
let moonWeight;

const moonRatio = 0.165;

userName = window.prompt("Por favor dame tu nombre");
currentWeight = window.prompt("Por favor pasame tu peso actual en Kilogramos");

moonWeight = currentWeight * moonRatio;

console.log(userName + ": " + "tu peso en la luna es de: " + moonWeight);



