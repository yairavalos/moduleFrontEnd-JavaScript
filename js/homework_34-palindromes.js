
// Resolver 4 y 5 con For y While

/**
 * 4:
 * Pedir el usuario una oracion
 * Imprimir en consola si una oración es un palindromo (puede contener espacios)
 * p.ej. anita lava la tina 
 * -> La oración "anita lava la tina" es un palindromo
 */

let palindrome = false
let userPhrase = ""
let reversePhrase = ""
let phraseNum = 0

userPhrase = window.prompt("Por favor dame una oración para validar si es un Palindromo").toLowerCase().trim()
phraseNum = userPhrase.length
console.log(userPhrase + " tiene: " + phraseNum + " caracteres")

userPhrase = userPhrase.split(" ").join("")
console.log("La frase queda así: " + userPhrase)

reversePhrase = userPhrase.split("").reverse().join("")
console.log("La frase queda así: " + reversePhrase)

for (let i=0; i<= userPhrase.length-1; i++) {

    if (userPhrase[i] == reversePhrase[i]) {
        palindrome = true
    } else {
        palindrome = false
        break
    }

    console.log("Resultado por ciclo " + i + ":" + userPhrase[i] + " " + reversePhrase[i] + " Boolean: " + palindrome)
}

console.log("La frase que ingresaste: " + (palindrome ? " ES un Palindromo =)" : " NO ES un Palindromo"))
