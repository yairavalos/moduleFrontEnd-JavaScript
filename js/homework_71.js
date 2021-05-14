/**
 * 1:
 * Estudiar los metodos
 * .map()
 * .reduce()
 */


/**
 * Ejericio 1:
 * Realizar una funcion que dado un array de strings como parametro
 * retorne un nuevo array con todos los strings que tienen como maximo 5 caracteres
 */

/* Código de apoyo


const fiveCharactersOnly = arr => {
    // your code here
}

// test //
let responseFiveCharacters = fiveCharactersOnly(["dog", "wolf", "family", "eaten", "camping"])
console output -> [ "dog", "wolf", "eaten"]
*/

let myArray = ["dog", "wolf", "family", "eaten", "camping"]
let fiveCharArray = []

console.log(myArray)

//fiveCharArray = myArray.map((item) => {item.length <= 5 ? console.log("Menos de 5: " + item) : console.log("Mayor a 5: " + item)})
myArray.map(item => item.length <= 5 ? fiveCharArray.push(item)  : "")
console.log(fiveCharArray)
