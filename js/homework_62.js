// Metodos de array


/*
Escribir una funcion que tome como parametro 2 arrays, y devuelva un numero 
con la suma total de esos 2 arrays.
arrayReduce([1,2,3,4],[1,2]). 
-> 13
*/

let myArray1 = [1,2,3,4]
let myArray2 = [1,2]

console.log("The result is: " + sumAllItems(myArray1,myArray2))

function sumAllItems (Array1, Array2) {
    let sumArray
    let sumItem = 0

    sumArray = Array1.concat(Array2)
    console.log(sumArray)
    
    for (e of sumArray){
        console.log(e)
        sumItem += parseInt(e)
    }

    return sumItem
}

// Tampoco funcionó, necesita más revisión
// sumArray.forEach(sumItem = (element) => {sumItem += element})
