/*
    Generar 2 tablas:
        1. Postulados -> acción agregarse a inscritos
        2. Inscritos -> acción darse de baja y regresar a postulados

*/


let kodersArray = [
    {
        id: 23,
        name:'jorge'
    },
    {
        id: 31,
        name:'Antonio'
    },
    {
        id: 212,
        name:'fer'
    },
    {
        id: 20,
        name:'rose'
    }

]

// Array Backups for manipulation

let koderToSubscribe = kodersArray.map(item => item)
let koderSubscribed = []

// Init Table prints

printTable("table1",koderToSubscribe,"Inscribir")
printTable("table2",koderSubscribed,"Cancelar") 

// function called from HTML
// function to get btn id and define operation flow

function htmlBtnClick(btnId) {

    // recomendación no leer el texto, mejor una clase y así puede variar el texto
    // validar que los elementos existan, validar ID o el botón que exista, si no brincar la acción
    // con JQuery viene incluido
    // otra forma de resolverlo es agregar un atributo value y ahí después leerlo
    let btnClicked = document.getElementById(btnId)

    if (btnClicked.innerText == "Inscribir") {
        swapArrayKoder(btnId,koderToSubscribe,koderSubscribed,btnClicked.innerText)
    }

    if (btnClicked.innerText == "Cancelar") {
        swapArrayKoder(btnId,koderSubscribed,koderToSubscribe,btnClicked.innerText)
    }

}

// its the same fucking shit around
// just depend from what table pov

function swapArrayKoder(koderID, tableArray1, tableArray2, actionStr) {
    // filter obj from array 1 // we are going to try find()
    // push new obj in array 2
    // remove obj from array 1 // we are going to try splice()
    // send to reprint
    //alert(`Este koder ${koderID} se quiere Inscribir`)

    let itemKoder = tableArray1.find(item => item.id == koderID)
    let currentIndex = tableArray1.findIndex(item => item.id == koderID)
    
    tableArray2.push(itemKoder)    
    tableArray1.splice(currentIndex, 1)

    if (actionStr == "Inscribir") {
        printTable("table1",tableArray1,"Inscribir")
        printTable("table2",tableArray2,"Cancelar")
    }

    if (actionStr == "Cancelar") {
        printTable("table1",tableArray2,"Inscribir")
        printTable("table2",tableArray1,"Cancelar")
    }
    
}

// Table printing its almost the fucking same
// the only change is actionStr to know operation directions

function printTable (tableID, arrayToPrint, actionStr) {

    let table
    let strTable = ""

    if(tableID == "table1"){
        table = document.querySelector("#myTable1 .mytable-body")
    }

    if (tableID == "table2") {
        table = document.querySelector("#myTable2 .mytable-body")
    }

    arrayToPrint.forEach( item => {
        strTable += `<tr><td>${item.id}</td><td>${item.name}</td>`
        strTable += `<td><button id=${item.id} onclick='htmlBtnClick(${item.id})'>${actionStr}</button></td></tr>`
    })

    table.innerHTML = strTable
}
