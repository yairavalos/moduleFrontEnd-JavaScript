/*
    Ejercicio #6
    utilizando el método de reduce
    concatenación de todos los items de un array en un solo valor
*/

let strArray3 = [1,2,3,4]
let concatStr1 

concatStr1 = strArray3.reduce( (accumulate,item) => accumulate += String(item),"" )
console.log(concatStr1)

