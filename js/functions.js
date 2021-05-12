/**
 * Convertidor de temperatura
 * Generar una función, que reciba (grados, entrada, salída ) 
 * Default es ºC a ºF
 * p.ej. (100,c,f) -> 100 ºC a ºF -> Default
 * p.ej. (100,f,c) -> 100 ºF a ºC
 * C to F -> (celsius*9)/5 + 32
 * F to C -> ((fahrenheit - 32)*5)/9
 *
 */

let result = 0
result = tempConversion (100,"f","c")

console.log(result)

// falta considerar cuando no hay un dato en temp !!!! -> Considerar en la evaluación del código

function tempConversion(temp, unitIn = "c", unitOut = "f"){

    let tempC = 0
    let tempF = 0
    const msgErr = "Something has not been well configured"

    if (unitIn == "c" && unitOut == "f"){

        tempF = (temp*(9/5))+32
        return tempF

    } else if (unitIn == "f" && unitOut == "c") {
        
        tempC = (temp-32)*(5/9)
        return tempC

    } else {

        return msgErr

    }

}