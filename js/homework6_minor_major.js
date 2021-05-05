/**
 * 6:
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */

let userSet = [0,0];
let reverseSet = [0,0];
let finalSet = [0,0];

userSet.forEach(userInputs);
reverseSet = userSet;
reverseSet.reverse();
userSet.forEach(checkValues);

console.log("Este es el número menor: " + finalSet[0]);
console.log("Este es el número mayor: " + finalSet[1]);


function userInputs(item, index) {
    userSet[index] = window.prompt("Por favor ingresa el valor del Número " + (index + 1));
    console.log(userSet[index]);
}

function checkValues (index) {
   
   console.log(userSet[index]);
   console.log(reverseSet[index]);


   if (userSet[index] < reverseSet[index]){
       finalSet[0] = userSet[index];
   } 
   
   if (userSet[index] > reverseSet[index]){
        finalSet[1] = userSet[index];
   }

   if (userSet[index] = reverseSet[index]){
    finalSet[index] = 0;
   }

}

