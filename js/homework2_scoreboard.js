/**
 * 2:
 * Pedir al usuario la calificación de un examen ( 0 a 100)  por el prompt
 * Imprimir en consola las equivalencias en letra su calificación, es decir
 * -> si es mayor o igual a 90, imprimir "A"
 * -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
 * -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
 * -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
 * -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
 * -> si es menor 50 , imprimir "F"
 */

let scoreValue;

scoreValue = parseInt(window.prompt("Favor de poner tu calificación"));


if (scoreValue >= 90 && scoreValue == 100){
    console.log ("Tu calificación es: A");
} else if (scoreValue >= 80 && scoreValue < 90){
    console.log ("Tu calificación es: B");
} else if (scoreValue >= 70 && scoreValue < 80){
    console.log ("Tu calificación es: C");
} else if (scoreValue >= 60 && scoreValue < 70){
    console.log ("Tu calificación es: D");
} else if (scoreValue >= 50 && scoreValue < 60){
    console.log ("Tu calificación es: E");
}  else if (scoreValue < 50){
    console.log ("Tu calificación es: F");
}  else {
    console.error("No es una calificación valida");
}
