/**
 * Pedir una palabra por promt
 * Pedir un número entre 1 y 10
 * Duplicar esa cantidad de veces esa palabra e imprimir en consola
 * P.ej: 
 * "Kodemia"
 * 4
 * -> "Kodemia Kodemia Kodemia Kodemia"
 */

let userWord = "";
let userNum = 0;

userWord = window.prompt("Por favor escribe una palabra que quieras repetir").trim();
userNum = parseInt(window.prompt("Escribe un número entre 1 y 10 para repetirlo").trim());

console.log(userWord);
console.log(userNum);

if(userNum >= 0 && userNum <= 10){
    userWord = userWord.concat(" - ");
    console.log(userWord.repeat(userNum));
} else {
    console.log("NO escribiste un número valido entre 1 y 10");
}

