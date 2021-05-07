/**
 * 5:
 * pedir el usuario un numero entre 1 y 10
 * Imprimir en consola el siguiente patrón
 * donde la cantidad mas grande de * es el Numero del usuario
 * P.ej. el usuario introduce 5 
 * Resultado esperado
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
*/

let patternStr = "*"
let userNum = 0
userNum = parseInt(window.prompt("Dame un número entre 1 y 10").trim())

for (let m=0; m< userNum; m++) {
   
    for (let i=0; i< userNum; i++) {

        console.log(patternStr)
        patternStr += "*"

    }

    for (let j=userNum-1; j>=0; j--){

        patternStr = patternStr.substr(0, j)
        console.log(patternStr)

    }

}
