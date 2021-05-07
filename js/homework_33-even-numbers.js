// Unicamente usar el ciclo While

/**
 * 3:
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 */

let userNum = 0
userNum = parseInt(window.prompt("Por favor dame un número entre 10 y 100").trim())

let counter = 0

// El mayor error con los ciclos while es omitir el incremento del contador

while (counter <= userNum) {

    counter += 1  
    
    if (counter%2 == 0) {
        console.log("Número par encontrado: " + counter)
    }
}

