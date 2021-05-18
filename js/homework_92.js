/**
 * Dado un string
 * crear una funcion que sustitya cada caracter del string
 * con la letra siguiente del abecedario
 
const moveCharsForward = (str) =>{
    // code here
}  
console.log(moveCharsForward('abcde'))
// -> 'bcdef'
*/

// required functions:
// to convert from string to array --> 
// to convert from character to UTF-16 --> .charCodeAt()
// to transform with the next --> array.map(item + 1)
// to convert from UTF-16 to character --> .fromCharCode()
// to convert an array again to string --> .join()

let strDemo = "This is a Demo String to Convert"
let strResult = ""
let strArray = []
let strPivotArray = []
let strPivotArray1 = []
let strPivotArray2 = []

console.log(strDemo)

strArray = strDemo.toLowerCase().split("")
console.log(strArray)

strPivotArray = strArray.map(item => item.charCodeAt(item))
console.log(strPivotArray)

strPivotArray1 = strPivotArray.map(item1 => item1 +=1 )
console.log(strPivotArray1)

strPivotArray2 = strPivotArray1.map(item2 => String.fromCharCode(item2))
console.log(strPivotArray2)

strResult = strPivotArray2.join("")
console.log(strResult)

//Respuesta de la clase:
//const moveCharsForward = str => str.split('').map((item) => String.fromCharCode(item.charCodeAt()+1)).join('')

