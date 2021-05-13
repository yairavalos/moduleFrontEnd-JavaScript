// funcion que dados 2 parametros .forEach() o .map() o for()
// p1 = año de inicio
// p2 = año de fin
// y devuelva un array con los años que son bisiestos
// que se encuentran en ese rango
// [1990, 2000, 2001, 2020]
// -> [2000,2020]
// Link de apoyo:
// https://docs.microsoft.com/es-es/office/troubleshoot/excel/determine-a-leap-year
//

/*
1. Si el año es uniformemente divisible por 4, vaya al paso 2. De lo contrario, vaya al paso 5.
2. Si el año es uniformemente divisible por 100, vaya al paso 3. De lo contrario, vaya al paso 4.
3. Si el año es uniformemente divisible por 400, vaya al paso 4. De lo contrario, vaya al paso 5.
4. El año es un año bisiesto (tiene 366 días).
5. El año no es un año bisiesto (tiene 365 días).
*/

let initialYear = 1990
let finalYear = 2050
let yearsArray = []
let yearsBisiesto = []

for (let i = initialYear; i < finalYear; i++) {
    yearsArray.push(i)
}

console.log(yearsArray)

yearsArray.forEach(myYearFunction)

console.log(yearsBisiesto)

function myYearFunction(item){

    if ( (item % 4 == 0 && item % 100 != 0) || item % 400 == 0 ) {
        yearsBisiesto.push(item)
    }

}

// Se puede mejorar la parte del if con un operador ternario condicion ? true : false
// se puede hacer una arrow function para simplificar más


