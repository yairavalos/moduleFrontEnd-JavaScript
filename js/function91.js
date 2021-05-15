/* 
Clase 9 - Objetos y métodos de objetos
Hacer un objeto de arrays
 

let orderArray = [
    ['ensalada de pepinos','paella','platano', 100],
    ['ensalada de tomates','pescado','helado', 120],
    ['ensalada simple','paella','yogurt', 80],
    ['ensalada simple','enchiladas','yogurt', 89],
    ['ensalada cesar','salmón','platano', 150],
]

[{},{},{},{},{}]

*/


let objOrder = [
{
    entrada: "ensalada de pepinos",
    principal: "paella",
    postre: "platano",
    cuenta: 100,
},
{
    entrada: "ensalada de tomates",
    principal: "pescado",
    postre: "helado",
    cuenta: 120,
},
{
    entrada: "ensalada simple",
    principal: "paella",
    postre: "yogurt",
    cuenta: 80,
},
{
    entrada: "ensalada simple",
    principal: "enchiladas",
    postre: "yogurt",
    cuenta: 80,
},
{
    entrada: "ensalada cesar",
    principal: "salmón",
    postre: "platano",
    cuenta: 150,
},
]

console.log(objOrder)


/* Cuantos pedidos tienen como platillo principal la paella */

let numPrincipal

numPrincipal = objOrder.reduce((total,item) => total += item.principal == "paella" ? 1 :0, 0)
console.log("Número de platillos principales que tienen Paella: " + numPrincipal)

/* Funcion que devuelve los pedidos que tienen como postre "platano" o "helado"  */

let dessertArr = []

dessertArr = objOrder.filter( item => item.postre == "platano" || item.postre == "helado" )
console.log(dessertArr)

/* Funcion que devuelve los pedidos que tengen un precio inferior a 90  */

let priceArr90 = []

priceArr90 = objOrder.filter( item => item.cuenta <= 90, 0)
console.log(priceArr90)

/* Funcion que devuelve los pedidos que tengen un precio superior a 90  */

let priceArr90Plus = []

priceArr90Plus = objOrder.filter ( item => item.cuenta > 90, 0)
console.log(priceArr90Plus)
