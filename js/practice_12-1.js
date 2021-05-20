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

let koderToSubscribe = kodersArray.map(item => item)
console.table(koderToSubscribe)

let koderSubscribed = []
console.table(koderSubscribed)


printTable("table1",koderToSubscribe,"Inscribir")
printTable("table2",koderSubscribed,"Cancelar") 


function htmlBtnClick(btnId) {

    let btnClicked = document.getElementById(btnId)
    alert("The button you clicked has the id: " + btnId)

    if (btnClicked.innerText == "Inscribir") {
       subscribeKoder(btnId)
    }

    if (btnClicked.innerText == "Cancelar") {
        cancelKoder(btnId)
    }

}

function subscribeKoder (koderID) {
    // filter obj from array 1 // we are going to try find()
    // push new obj in array 2
    // remove obj from array 1 // we are going to try splice()
    // send to reprint
    alert(`Este koder ${koderID} se quiere Inscribir`)

    let itemKoder = koderToSubscribe.find(item => item.id == koderID)
    let currentIndex = koderToSubscribe.findIndex(item => item.id == koderID)
    console.table(itemKoder)
    console.log("Current index: " + currentIndex)

    koderSubscribed.push(itemKoder)
    console.table(koderSubscribed)

    koderToSubscribe.splice(currentIndex, 1)
    console.table(koderToSubscribe)

    printTable("table1",koderToSubscribe,"Inscribir")
    printTable("table2",koderSubscribed,"Cancelar")
}


function cancelKoder (koderID) {
    // filter obj from array 1 // we are going to try find()
    // push new obj in array 2
    // remove obj from array 1 // we are going to try splice()
    // send to reprint

    alert(`Este koder ${koderID} quiere cancelar su inscripción`)
}

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
