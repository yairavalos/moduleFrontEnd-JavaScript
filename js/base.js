/*
console.log["Hello World"]
*/

/**
 * For
 * Escribir un programa de arroje la suma de los multiplos de 3, 5 o 7 que hay entre 1 y 100
 * 
 */


let sumMultiplos = 0

for (let i=1; i <= 100; i++) {

    if (i%3 == 0 || i%5 == 0 || i%7 == 0){
        console.log("Este numero es multiplo de 3,5 o 7: " + i)
        sumMultiplos += i
        console.log("Suma acumulada: " + sumMultiplos)
    }
}


/**
  * While
  * Escribir un programa que le pida al usuario un numero
  * que imprima en consola el numero dado si es positivo
  * si el numero es negativo, salir del ciclo
  * 
  */


var userNum = 0

while (userNum > -1 ) {

    userNum = parseInt(window.prompt("Dame un numero positivo").trim())
    console.log("El número fue: " + userNum)

}

console.log("El programa ha terminado porque me diste un número negativo")

/**
 * Dado los siguientes 2 strings
 * 'smtp'
 * 'aeiou'
 * Imprimir en consola las siguientes combinaciones
 * -> sa, se, si, so , su 
 * -> ma, me, mi, mo , mu 
 * -> ta, te, ti, to , tu 
 * -> pa, pe, pi, po , pu
 */


let str1 = "smtp"
let str2 = "aeiou"
let strResult = ""

for (let i=0; i<= str1.length-1; i++) {

    strResult = ""

    for (let j=0; j<= str2.length-1; j++) {
        /* console.log("Pos str 1: " + i + " Pos str 2: " + j + " Result is: " + str1[i] + str2[j]) */
        strResult = strResult + str1[i] + str2[j] + ";"
    }

    console.log("El resultado por la linea: " + i + " es: " + strResult)

}


/*
Seleccionar un ejercicio hecho
y convertirlo a función

*/

console.log("From here start a function 1 --------------------------------")

strResult = stringMix (str1,str2)

function stringMix(str1,str2) {

    for (let i=0; i<= str1.length-1; i++) {

        strResult = ""

        for (let j=0; j<= str2.length-1; j++) {
            /* console.log("Pos str 1: " + i + " Pos str 2: " + j + " Result is: " + str1[i] + str2[j]) */
            strResult = strResult + str1[i] + str2[j] + ";"
        }

        console.log("El resultado por la linea: " + i + " es: " + strResult)

    }

}

console.log("From here start a function 2 --------------------------------")
console.log(printPositives())

function printPositives() {

    var userNum = 0

    while (userNum > -1 ) {

        userNum = parseInt(window.prompt("Dame un numero positivo").trim())
        console.log("El número fue: " + userNum)

    }

    console.log("El programa ha terminado porque me diste un número negativo")
    return "finish"
}

console.log("From here start a function 3 --------------------------------")

let maxNumber = parseInt(window.prompt("Dame el número que quieres ejecutar").trim())
console.log(funcMultiplos(maxNumber))

function funcMultiplos(maxNumber) {
    
    let sumMultiplos = 0

    for (let i=1; i <= maxNumber; i++) {

        if (i%3 == 0 || i%5 == 0 || i%7 == 0){
            console.log("Este numero es multiplo de 3,5 o 7: " + i)
            sumMultiplos += i
            console.log("Suma acumulada: " + sumMultiplos)
        }
    }

    return "Fin de función 3"
}

/** 
 * 1: 
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 
 * 3 x 1 = 3
 * 3 x 2 = 6
 */

console.log("From here start a function 4 --------------------------------")

let userNum2 = 0
userNum2 = parseInt(window.prompt("Dame un número entre 1 y 10").trim())

result = tablesMultiply(userNum2)
console.log("El número que se trabajo fue: " + result)

function tablesMultiply (numTable) {

    let counter = 0

    while (counter < 10) {
    
        counter += 1
        console.log(numTable*counter)
    
    }

    return numTable
}


/**
 * 2:
 * Pedir al usuario que indique como esta su día
 * Opciones: Nublado, Soleado, Lluvioso, Nevado
 * Si escribe alguna de ellas, colocar un mensaje 
 * P.ej: soleado -> oh!, que buen clima para estar en la playa
 * P.ej: nevado -> oh!, que buen clima para estar en casa
 *  etc...
 * Sino
 * Pedir por prompt, Que describa que le gustaria hacer en su día
 */


let userWeather1 = window.prompt("Escribe si tu día es nublado / soleado / lluvioso / nevado").toLowerCase().trim();
console.log(funcWeather(userWeather1));
 
function funcWeather(userWeather){

    let weatherStatus = ["nublado", "soleado", "lluvioso", "nevado"];
    let userAction = "";

    switch(userWeather){
        case weatherStatus[0]:
            console.log("Hoy es un día: " + weatherStatus[0]);
            console.log("Hoy es un día para estar preparado con el paraguas y tomarse un cafesito");
        break;
        case weatherStatus[1]:
            console.log("Hoy es un día: " + weatherStatus[1]);
            console.log("Hoy es un día para salir a pasear con los amigos");
        break;
        case weatherStatus[2]:
            console.log("Hoy es un día: " + weatherStatus[2]);
            console.log("Hoy es un día para quedarse en casa a ver pelis con un chocolatito");
        break;
        case weatherStatus[3]:
            console.log("Hoy es un día: " + weatherStatus[3]);
            console.log("Hoy es un día para quedarse en casa con la familia");
        break;
        default:
            console.log("Mejor di que quieres hacer");
            userAction = window.prompt("Que se te antoja hacer hoy ??? ").toUpperCase();
            console.log("Pasetala bien haciendo " + userAction);
    }

    return "Hemos finalizado"
}


/*
Investigar parámetros por defectos/opcionales
y hacer un ejercicio

+5 más de funciones
para hacer un total de 10

*/
