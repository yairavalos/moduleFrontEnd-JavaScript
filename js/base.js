console.log("Hello World")

/**
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 
 * 3 x 1 = 3
 * 3 x 2 = 6
 */

/*
let userNum = 0
userNum = parseInt(window.prompt("Por favor dame un número").trim())

for (let i=1; i<11; i++) {
    console.log(userNum + " x " + i + " = " + (userNum * i))
}

*/

/**
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * 
 */

/*
var vowelArray = ["a","e","i","o","u"]
var userStr = ""
var vowelStr = ""
var consonantStr = ""

userStr = window.prompt("Por favor dame una oración").trim()
 
for (let i=0; i < userStr.length ; i++) {

    for (let j=0; j < vowelArray.length; j++) {
        
        if (userStr[i] == vowelArray[j]) {
            vowelStr += userStr[i]
        } else {
            consonantStr += userStr[i]
        }

    }

}

console.log(vowelStr)
console.log(consonantStr)

*/



/**
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 */


/*
var userNum1 = 0
userNum1 = parseInt(window.prompt("Dame un numero entre 10 y 100").trim())

for (let i=1; i <= userNum1 ; i++) {

    if(i % 2 == 0) {
        console.log(i)
    }

}

*/


var counter = 0
var userNum2 = 0

userNum2 = parseInt(window.prompt("Dame un número entre 10 y 100"))
console.log(userNum2)

while (counter <= userNum2) {

    if (counter%2 == 0) {
        console.log(counter)
    }

    counter += 1

}




