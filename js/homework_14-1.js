/*
Hacer una practica en la cual
al hacer click en un link de navegación
se conecte a una fuente JSON através de un XMLHTTPRequest
y al obtener el archivo convertirlo en una tabla
después, al seleccionar uno, pase a otra página el cual lo haga un CARD
*/

var linkParam = ["posts","comments","photos"]

var XHRConn = new XMLHttpRequest()
var JSONResponse

XHRConn.addEventListener("readystatechange",()=>{

    console.log("La preparación de la conexión es: " + XHRConn.readyState)
    console.log("El estado actual de la conexión es: " + XHRConn.status)

    if (XHRConn.readyState == 4 && XHRConn.status == 200) {
        
        //alert("You did it !!!")
        
        JSONResponse = JSON.parse(XHRConn.responseText)     
        console.table(JSONResponse)

        printTableHeaders(Object.keys(JSONResponse[0]))
        printTableBody(JSONResponse)

    } else if (XHRConn.status < 200 && XHRConn.status > 299) {
        console.error("Something went wrong with XHR Connection")
    }
 })

XHRConn.open("GET","https://jsonplaceholder.typicode.com/posts")
XHRConn.send()

// Table Area for Printing and Handling

let tableHeader = document.querySelector(".myTable .mytable-header")
let tableHeaderStr = ""
let tableBody = document.querySelector(".myTable .mytable-body")
let tableBodyStr = ""


// Function to get Headers to table header

function printTableHeaders (headersArray) {

    tableHeaderStr += `<tr>`
    headersArray.forEach(objItem => {
        tableHeaderStr += `<td>${objItem}</td>`
    })
    tableHeaderStr += `</tr>`

    tableHeader.innerHTML = tableHeaderStr

}   

// Function to get data and fulfil the table body

function printTableBody (JSONArray) {

    JSONArray.forEach(jsonItem => {

        let tempObjArr = Object.values(jsonItem)

        tableBodyStr += `<tr>`

        tempObjArr.forEach( tempItem => {

               tableBodyStr += `<td>${tempItem}</td>` 

        })

        tableBodyStr += `<td><a href=json-card.html?id=${tempObjArr[1]}&type=posts class="btn btn-primary" target="_blank">Link</a></td>`
        tableBodyStr += `</tr>`

    })

    tableBody.innerHTML = tableBodyStr

}

/*

ej.:
console.table(JSONResponse)
-----------------------------------------------------
Por alguna razón, si haces esta función directamente afuera del Listener
no se ejecuta
si la ejecutas de manera manual en la consola, si funciona
Para que funcione correctamente, tiene que estar llamado dentro del Listener

*/