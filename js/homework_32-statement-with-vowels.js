/**
 * 2:
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * 
 */

let userPhrase = ""
let vowelArray = ["a","e","i","o","u"]

userPhrase = window.prompt("Dame una frase con vocales").toLowerCase().trim()
console.log(userPhrase)

let counter = 0
let phraseNum = userPhrase.length-1

var vowelStr = ""
var consonantStr = ""

while (counter <= phraseNum) {

    counter += 1
    console.log(counter)

    let vowelIndex = 0
    let vowelNums = vowelArray.length-1

    while (vowelIndex <= vowelNums) {
        
        if (userPhrase[counter] == vowelArray[vowelIndex]) {
            console.log(userPhrase[counter])
        } else {
            console.log(userPhrase[counter])
        }

        vowelIndex += 1
    }

}


/*
console.log("Esta es la frase con vocales: " + vowelStr)
console.log("Esta es la frase con consonantes: " + consonantStr)
*/

