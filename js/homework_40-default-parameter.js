
/**
 * Investigar el tema de parametros opcionales
 * Hacer un ejercicio de los de la clase con parametros opcionales
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

ejemplo:

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// expected output: 10

console.log(multiply(5));
// expected output: 5

*/

// Aquí un ejemplo de la clase utilizando default_parameters

let userNumber = parseInt(window.prompt("Dame el número que quieres ejecutar").trim())
let result = 0

if (isNaN(userNumber)) {
    result = funcMultiplos()
} else {
    result = funcMultiplos(userNumber)
}

console.log(result)

function funcMultiplos(maxNumber = 15) {
    
    let sumMultiplos = 0

    for (let i=1; i <= maxNumber; i++) {

        if (i%3 == 0 || i%5 == 0 || i%7 == 0){
            console.log("Este numero es multiplo de 3,5 o 7: " + i)
            sumMultiplos += i
            console.log("Suma acumulada: " + sumMultiplos)
        }
    }

    return "Fin de función 3"
}
