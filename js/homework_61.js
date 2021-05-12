// Metodos de array

/*
Escribir una funcion que tome como parametro un array de numeros e imprima en
consola el array al revés
arrayReverse([1,2,3,4]). 
-> [4,3,2,1]
*/

let myArray = [7,8,9,10]
let result

console.log(myArray)

result = myReverse(myArray)
console.log(result)


function myReverse (otherArray) {
    otherArray = otherArray.reverse(otherArray)
    return otherArray
}

//No funcionó, necesita revisión
//console.log((myArray)=>myArray.reverse(myArray))