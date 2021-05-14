// Ejercicio #4
//
// Dados 2 arrays
// array de nombres
// array de apellidos
// Crear una funcion que reciba los 2 arrays, 
// y retorne un array con los nombres completos
//
// function joinNames(arrNames, arrSurnames) {
//    sentences
// }
//
//console.log( joinNames( ["jorge", "luis"], ['camarillo', 'cristobal'] ) )
// ["jorge camarillo ", "luis cristobal"]
//

let namesArray = ["celia","jorge","luis","elvira","laura"]
let lastNameArray = ["andreau","camarillo","echeverria","gonzalez","ruiz"]
let joinArray = []
let fullname = []

joinArray = namesArray.map( (item,index) => {fullname.push(item), fullname.push(lastNameArray[index])} )
console.log(joinArray)

//joinArray = namesArray.map( (item,index) =>  )

// FALTA RESOLVER ESTE !!!!