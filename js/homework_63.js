// Metodos de array

/*
Escribir una función que tome como parametro 2 arrays, y devuelva un array 
con los numeros repetidos en los 2 arrays
arrayReduce([1,2,3,4],[1,2]). 
-> [1,2]
*/

let myArray1 = [1,2,3,4]
let myArray2 = [1,2]


console.log(itemRepeated(myArray1,myArray2))

function itemRepeated(array1, array2) {

    let myArray = []

    for (e of array1) {

        console.log("Desde array1: " + e)

        for (f of array2){
            if (f == e){
                myArray.push(f)
                console.log("Desde array2: " + f)
            }
        }
    }

    console.log("El resultado: " + myArray)
    return "My Testing"
}
