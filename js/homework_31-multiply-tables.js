// Unicamente usar el ciclo While
/** 
 * 1: 
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 
 * 3 x 1 = 3
 * 3 x 2 = 6
 */

let userNum = 0
let counter = 0

userNum = parseInt(window.prompt("Dame un número entre 1 y 10").trim())

while (counter < 10) {

    counter += 1
    console.log(userNum*counter)

}
