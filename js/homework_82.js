
/**
 * 
 * Ejercicio 2
 
    Dado un array con pedidos de un restaurant
    la estructura por cada pedido es 
    ['entrada','principal','postre','precio'],
    let pedidos = [
        ['ensalada de pepinos','paella','platano', 100'],
        ['ensalada de tomates','pescado','helado', 120],
        ['ensalada simple','paella','yogurt', 80],
        ['ensalada simple','enchiladas','yogurt', 80],
        ['ensalada cesar','salmón','platano', 100],
    ]
    Funcion que devuelve el total de pedidos que tienen como plato principal "paella"
    Funcion que devuelve los pedidos que tienen como postre "platano" o "helado" 
    Funcion que devuelve los pedidos que tengen un precio superior a 90 
    Funcion que devuelve los pedidos que tengen un precio superior a 90 
*/

let orderArray = [
    ['ensalada de pepinos','paella','platano', 100],
    ['ensalada de tomates','pescado','helado', 120],
    ['ensalada simple','paella','yogurt', 80],
    ['ensalada simple','enchiladas','yogurt', 89],
    ['ensalada cesar','salmón','platano', 150],
]

let numDish = 0
let numDessert = 0
let numLess90 = 0
let numGreat90 = 0

// Good example work fairly well
//numDish = orderArray.reduce( (item) => item.forEach(e => console.log(typeof e)))

orderArray.reduce( (count1,item) => item.forEach(e=> e === "paella" ? numDish += 1 : ""), 0)
console.log("Platos de Paella: " + numDish)

orderArray.reduce((count2,item2) => item2.forEach(e2=> e2 === "platano" || e2 === "helado" ? numDessert += 1 : ""), 0)
console.log("Postres de platano o helado: " + numDessert)

orderArray.reduce( (count3,item3) => item3.forEach( e3 => e3 <= 90 ? numLess90 += 1 : ""), 0)
console.log("Cuentas menores a $90: " + numLess90)

orderArray.reduce( (count4,item4) => item4.forEach( e4 => e4 > 90 ? numGreat90 += 1 : ""), 0)
console.log("Cuentas mayores a $90: " + numGreat90)


