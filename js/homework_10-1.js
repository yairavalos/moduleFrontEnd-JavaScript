/**
 * Ejercicio 1
 * Dado el siguiente array de objetos generar
 * Funcion que pinte mi lista de deseos
 * Funcion que ordene por id mi lista de deseos
 * Funcion que ordene por nombre de producto mi lista de deseos
 * Funcion que ordene por precio mi lista de deseos
 */

 let WishListArray = [
    {
        iditem : 1,
        name : 'Adidas Grand Court',
        description : 'Adidas Grand Court Base EE7905 Tenis para Hombre',
        price : 1250,
        imgurl : 'https://www.amazon.com.mx/images/I/71wNHYOh60L._AC_SX695_.jpg'
    },
    {
        iditem : 2,
        name : 'Metcon & Nike ',
        description : 'Nike Metcon Sport Aq7489-008 - Zapatillas deportivas para hombre',
        price : 990,
        imgurl : 'https://www.amazon.com.mx/images/I/71dLLLfSfUL._AC_SY695_.jpg'
    },
    {
        iditem : 3,
        name : 'Nike Carreras',
        description : 'Nike Carreras de mujer',
        price : 9700,
        imgurl : 'https://www.amazon.com.mx/images/I/71wNHYOh60L._AC_SX695_.jpg'
    },
    {
        iditem : 4,
        name : 'Samsung Monitor',
        description : 'Monitor Pantalla Plana de 21-inch',
        price : 7500,
        imgurl : 'https://www.amazon.com.mx/images/I/71dLLLfSfUL._AC_SY695_.jpg'
    },
    {
        iditem : 5,
        name : 'Escritorio Ejecutivo',
        description : 'Escritorio ejecutivo con acabados de madera',
        price : 15000,
        imgurl : 'https://www.amazon.com.mx/images/I/71wNHYOh60L._AC_SX695_.jpg'
    },
    
]

/*
    Código dinámico para ordenar las listas por diferentes critérios
----------------------------------------------------------------------------
*/
let indexStr = "iditem"
indexStr = window.prompt("Introduce el tipo de ordenamiento\n iditem\n name\n description\n price\n")

WishListArray.sort( function(objItem1, objItem2){

    if (objItem1[indexStr] < objItem2[indexStr]) {
        return -1
    }

    if (objItem1[indexStr] > objItem2[indexStr]) {
        return 1
    }

    return 0

})

/*
----------------------------------------------------------------------------
*/



/* 
    Código dinámico para generar los headers de las tablas
----------------------------------------------------------------------------
*/

let headerArray = Object.keys(WishListArray[0])
let tableheader = document.querySelector(".mytable1 .mytable-headers")
let tableheaderStr = ""

headerArray.forEach(item=> tableheaderStr += "<td>"+item+"</td>")
tableheader.innerHTML = tableheaderStr

let tablebody = document.querySelector(".mytable1 .mytable-body")
let tablebodyStr = ""

/*
----------------------------------------------------------------------------
*/



/*
    Código dinámico para generar los datos dentro de la tabla
*/

WishListArray.forEach(itemList => {

    tablebodyStr = "<tr>" + tablebodyStr

    headerArray.forEach(propStr => {
//        console.log(itemList[propStr]) --> imgurl
        if (propStr != "imgurl") {
            tablebodyStr += "<td>" + itemList[propStr] + "</td>"
        } else {
            tablebodyStr += "<td><img src=" + itemList[propStr]
            + " width='75' height='50'></td>"
        }
        
    })

    tablebodyStr = tablebodyStr + "</tr>"

})

tablebody.innerHTML = tablebodyStr

/*
----------------------------------------------------------------------------
*/



