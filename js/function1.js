// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el segundo valor mas alto
// input: [1,4,3,2,5]
// output: -> 5

//código de apoyo:
/*
arrFor.forEach((currentValue, posicion, arrayOriginal) => {
    console.log(currentValue, posicion, arrayOriginal)
})
*/

let inputArray = [1,4,3,2,5,2,7,9,1,3,6,17,21,35,7,2,4]
let maxNum = inputArray[0]

inputArray.forEach( item => item > maxNum ? maxNum = item : "" )
console.log("Result: " + maxNum)
