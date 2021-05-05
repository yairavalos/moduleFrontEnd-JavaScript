/**
 * 3:
 * Pedir el nombre de una persona
 * Verificar si el nombre termina con una vocal
 * imprimir que `Tu nombre termina con ${vocal}`
 * Sino
 * imprimir que `Tu nombre termina con ${consonante}`
 * -> Pedro
 * -> `Tu nombre termina con o`
 */

var vowelArr = ["a","e","i","o","u"];
var isVowel = false;
var userName = "";
var finalChar = "";


userName = window.prompt("Por favor escribe tu nombre: ").toLowerCase().trim();
console.log("Tu nombre es: " + userName);

finalChar = userName.charAt(userName.length-1);
console.log("La última letra es: " + finalChar);

for(let i=0; i < vowelArr.length-1; i++){
    
    if (finalChar == vowelArr[i]) {
        isVowel = true;
        break;
    }
     
}

console.log("Tu nombre: " + userName + " termina con: " + finalChar + (isVowel ? " y es una vocal" : " y es una consonante"));

