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
console.table(koderToSubscribe)

let koderSubscribed = []
console.table(koderSubscribed)

// Init Table prints

printTable("table1",koderToSubscribe,"Inscribir")
printTable("table2",koderSubscribed,"Cancelar") 

// El ejercicio 2 consistente en:
// ------------------------------------
// boton de reset
// addEventListener
// pintar botones
// -------------------------------------

let btnEvent
let btnReset = document.querySelector(".mainReset")

btnReset.addEventListener('click',(eventItem)=> {
    
    btnEvent = eventItem    

    if (eventItem.target.className == "mainReset") {
        
        koderToSubscribe = koderToSubscribe.concat(koderSubscribed)
        koderSubscribed = []

        printTable("table1",koderToSubscribe,"Inscribir")
        printTable("table2",koderSubscribed,"Cancelar") 
    }

})

// function Delegated to the Table
// find the button who triggered the event
// do the same stuff

let eventItemViewer1
let tableDelegate1 = document.querySelector("#myTable1 .mytable-body")

tableDelegate1.addEventListener('click',(eventItem1)=>{
    
    eventItemViewer1 = eventItem1

    let myBtnId1 = eventItem1.target.dataset.myid
    let myBtnStr1 = eventItem1.target.dataset.label

    //alert("Presionaste " + myBtnId1 + " para " + myBtnStr1 )
    swapArrayKoder(myBtnId1,koderToSubscribe,koderSubscribed,myBtnStr1)

})

let eventItemViewer2
let tableDelegate2 =  document.querySelector("#myTable2 .mytable-body")

tableDelegate2.addEventListener('click', (eventItem2)=> {
    
    eventItemViewer2 = eventItem2

    let myBtnId2 = eventItem2.target.dataset.myid
    let myBtnStr2 = eventItem2.target.dataset.label

    //alert("Presionaste " + myBtnId2 + " para " + myBtnStr2) 
    swapArrayKoder(myBtnId2,koderSubscribed,koderToSubscribe,myBtnStr2)

})


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
    console.group()
    console.log("%c Current index: " + currentIndex,"color: red; font-size: 1rem;")
    console.table(itemKoder)
    

    tableArray2.push(itemKoder)
    console.group()
    console.log("%c Table 2","color: red; font-size: 1rem;")
    console.table(tableArray2)
    console.groupEnd()

    tableArray1.splice(currentIndex, 1)
    console.group()
    console.log("%c Table 1","color: red; font-size: 1rem;")
    console.table(tableArray1)
    console.groupEnd() 
    console.groupEnd()

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
        
        if(actionStr == "Inscribir"){
            strTable += `<td><button class='btn btn-primary'`
        } else {
            strTable += `<td><button class='btn btn-warning'`
        }

        strTable += `id=${item.id} data-myid=${item.id} data-label=${actionStr}>${actionStr}</button></td></tr>`
        
    })

    // en la parte de arriba ya no usariamos el onclick= function call
    // lo se hará es utilizar la delegación del evento

    table.innerHTML = strTable
}
