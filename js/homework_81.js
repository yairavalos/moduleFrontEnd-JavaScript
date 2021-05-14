/**
 * 
 * Ejercicio 1
 
Dado el array [ ["jorge", false] , ["luis", true] , ["Victor", false] ] 
Calcular el numero de personas que si votaron
Output -> 1
Nota: las personas que si votaron tiene true
*/

// const totalVoters = (arr) => {
//  your code here
// }

//console.log(totalVoters( [ ["jorge", false] , ["luis", true] , ["Victor", false] ] ) )
// -> 1

let voteArray = [["jorge",false],["pepe",true],["victor",false],["juanjo",false],["Karla",true],["Betsy",true],["Lola",false]]
let totalVotes = 0

console.log(voteArray)

voteArray.reduce((votes,item)=> item[1] == true ? console.log(totalVotes += 1 ) : console.log("false"),0)
console.log("Total number of votes: " + totalVotes)
