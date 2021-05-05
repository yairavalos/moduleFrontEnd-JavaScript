/**
 * 4:
 * Pedir el nombre de una persona
 * Imprimir el nombre de la persona al revés y en mayúsculas
 * P.ej: juan
 * -> NAUJ
 */

let userName = "";
let arrayName = [];

userName = window.prompt("Por favor ingresa tu nombre para hacerlo alrevés").toUpperCase().trim();
console.log(userName);

arrayName = Array.from(userName);
console.log(arrayName.reverse().toString());

