/**
 * 1:
 * Estudiar los metodos
 * .map()
 * .reduce()
 */

/**
 * Ejericio 2:
 * Realizar una funcion que dado un array de nombres de koders como parametro
 * Retorne un nuevo array con todos koders que tienen mas de 1 nombre
 * 
 */

/* 
Código de apoyo

 const twoNamesKoders = arr => {
    // your code here
}

// test
let responseTwoNamesKoders = twoNamesKoders(["Antonio", "Victor Yair", "Luis Carlos", "Victor", "José Omar"])
// ["Victor Yair", "Luis Carlos", "José Omar"]
*/

let namesArray = ["Antonio", "Victor Yair", "Luis Carlos", "Victor", "José Omar"]
let twoNamesArray
let filteredArray = []

console.log(namesArray)

twoNamesArray = namesArray.map(item => item.split(" "))
console.log(twoNamesArray)

twoNamesArray.map((item,index) => item.length == 2 ? filteredArray.push(namesArray[index]) : "")
console.log(filteredArray)



