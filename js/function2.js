// Ejercicio #2
//
// funcion que dado un array
// genere un nuevo array con los mismos numeros como strings
// function stringItUp(arr) {
//  sentences
// }
// console.log(stringItUp([2, 5, 100]));
// ["2", "5", "100"]

let strArray1 = [1,2,3,4,5,100,200,300,400,500]
let strArray2

console.log(strArray1)

strArray2 = strArray1.map( item => String(item) )
console.log(strArray2)
