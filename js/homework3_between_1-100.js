/**
 * 3:
 * Pedir al usuario por prompt un numero entre 1 y 100
 * Comparar si ese numero es divisible entre 2, 3 u 11
 * Imprimir en consola un mensaje que indique de que numero(s) es múltiplo
 * p.ej. 6 es multiplo de 2 y de 3
 * p.ej. 22 es multiplo de 2 y de 11
 * p.ej. 21 es multiplo de 3
 * Sino, enviar un mensaje en consola que lo indique
 */

let value;
let valueSet = [2,3,11];

value = parseInt(window.prompt("Por favor escribe un número entre el 1 y el 100"));

if (value >=0 && value <= 100) {
    valueSet.forEach(myOPS)
} else {
    console.error("NO fue el número indicado");
}

function myOPS (item, index ) { 

    /* console.log("El item en la posición: " + index + " es el valor :" + item); */

    if (value % item === 0) {
        console.log("Este número: " + value + " es multiplo de: " + item);
    } else {
        console.warn("Este número: " + value + " NO !!! es multiplo de: " + item);
    }
}
