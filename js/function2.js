// ejercicio 2 .forEach() o .map() o for()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']

//código de apoyo:
/*
arrFor.forEach((currentValue, posicion, arrayOriginal) => {
    console.log(currentValue, posicion, arrayOriginal)
})
*/

let inputArray2 = [1,2,3,4,5,6,7,8,9]
let outputArray2 = []

console.log(inputArray2)

inputArray2.forEach( item => outputArray2.push(String(item)) )
console.log(outputArray2)

