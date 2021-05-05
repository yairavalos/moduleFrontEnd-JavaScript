/**
 * 5:
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

let weekday;
let weekdayToLow;

weekday = window.prompt("Favor escribe un día de la semana");
weekdayToLow = weekday.toLowerCase();
console.log(weekdayToLow);

switch (weekdayToLow) {
    case "domingo":
        console.info("El día " + weekday + " es el número 1");
    break;
    case "lunes":
        console.info("El día " + weekday + " es el número 2");
    break;
    case "martes":
        console.info("El día " + weekday + " es el número 3");
    break;
    case "miercoles":
        console.info("El día " + weekday + " es el número 4");
    break;
    case "jueves":
        console.info("El día " + weekday + " es el número 5");
    break;
    case "viernes":
        console.info("El día " + weekday + " es el número 6");
    break;
    case "sabado":
        console.info("El día " + weekday + " es el número 7");
    break;
    default:
        console.error("Por favor omita los acentos");
}
