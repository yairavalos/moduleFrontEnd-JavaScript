/*
-- Practica del método reduce
obtener el average de un array
y regresar un solo valor
*/

let numArray = [1,2,3,4,5,6,7]
let reducedValue

reducedValue = numArray.reduce((total,num)=> total += num)
console.log(reducedValue)
