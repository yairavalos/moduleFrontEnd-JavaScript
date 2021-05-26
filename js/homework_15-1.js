// 1 Crear la pagina de actualizar cualquier usuario
// 2. Crear la pantala del listado
// 2.1. Por cada koder crear un boton de eliminar
// 2.2. Por cada koder, crear una pagina de interior

// Inicialización general del Script
// ------------------------------------------------------------------------

let userKEY = ""
let userObj = {

    username: "",
    lastname: "",
    age: 0,
    position: ""
}

// Default value is 0 for upload, 1 for view, 2 for update, 3 for Erase
let userAction = 0

// XHR Conn Event Handler in order to support Server Response Handling
// ------------------------------------------------------------------------

let XHRConn = new XMLHttpRequest()
let JSONResponse

XHRConn.addEventListener('readystatechange', () => {

    console.log("XHRConn ReadyState: " + XHRConn.readyState)
    console.log("Transaction Status: " + XHRConn.status)

    if (XHRConn.readyState == 4 && XHRConn.status >= 200 && XHRConn.status <= 299 ) {

        // Here is the code to execute to Handle Server Response

        JSONResponse = JSON.parse(XHRConn.responseText)
        console.table(JSONResponse)

        getTableData()

    } else {
        console.log("Transaction is NOT Yet Ready")
    }
    
})

let XHRConn1 = new XMLHttpRequest()
let JSONResponse1

XHRConn1.addEventListener('readystatechange', () => {

    console.log("XHRConn 1 ReadyState: " + XHRConn1.readyState)
    console.log("Transaction 1 Status: " + XHRConn1.status)

    if (XHRConn1.readyState == 4 && XHRConn1.status >= 200 && XHRConn1.status <= 299 ) {

        // Here is the code to execute to Handle Server Response

        JSONResponse1 = JSON.parse(XHRConn1.responseText)
        console.table(JSONResponse1)

        tablePrint()

    } else {
        console.log("Transaction 1 is NOT Yet Ready")
    }
    
})


/*
//Experimental, event trigger again and again
//---------------------------------------------------------
XHRConn.addEventListener('loadend', () => {
    if (XHRConn.readyState == 4 && XHRConn.status >= 200 && XHRConn.status <= 299 ) {
        getTableData()
        return
    }   
})
*/

// Form Event Handling
// ------------------------------------------------------------------------

let btnSubmit = document.getElementById('myBtn')

btnSubmit.addEventListener('click', eventBtn => {

    eventBtn.preventDefault()

    // Fire XHR Comm to send exactly when we need it

    userObj.username = document.getElementById("validationTooltip01").value
    userObj.lastname = document.getElementById("validationTooltip02").value
    userObj.age = document.getElementById("validationTooltip03").value
    userObj.position = document.getElementById("validationTooltip04").value

    console.log("User Data before be submitted")
    console.table(userObj)

    switch (userAction){
        case 0:
            newUserData()
        break
        case 1:
            userAction = 0
        break
        case 2:
            //alert("You want to update somebody")
            updateUserData()
            userAction = 0
        break
        case 3:
            eraseUser()
            userAction = 0
        break
        default:
    }

    document.getElementById("validationTooltip01").value = ""
    document.getElementById("validationTooltip02").value = ""
    document.getElementById("validationTooltip03").value = ""
    document.getElementById("validationTooltip04").value = ""

})


// Table Data Printing and Data Update according to Server Response:
// ------------------------------------------------------------------------

let JSONResponseArray1

function tablePrint () {

    let tableBody = document.querySelector(".table .table-body")
    let tableBodyStr = ""

    console.log("Entrando a table Print")

    JSONResponseArray1 = Object.entries(JSONResponse1)
    JSONResponseArray1.forEach( jsonKey => {
        tableBodyStr += `<tr>`
        tableBodyStr += `<td>${jsonKey[0]}</td>`
        tableBodyStr += `<td>${jsonKey[1].username}</td>`
        tableBodyStr += `<td>${jsonKey[1].lastname}</td>`
        tableBodyStr += `<td>${jsonKey[1].age}</td>`
        tableBodyStr += `<td>${jsonKey[1].position}</td>`
        tableBodyStr += `<td><a href="#top" class="btn btn-success">View</a></td>`
        tableBodyStr += `<td><a href="#top" class="btn btn-primary" onclick='preLoadUserData("${jsonKey[0]}",2)'>Update</a></td>`
        tableBodyStr += `<td><a class="btn btn-danger" onclick='preLoadUserData("${jsonKey[0]}",3)'>Erase</a></td>`
        tableBodyStr += `</tr>`  
    })

    tableBody.innerHTML = tableBodyStr

    console.log("Saliendo de table Print")    
}

// Here are the action buttons function from printed table & Top Form
// ------------------------------------------------------------------------

function newUserData () {

    XHRConn.open('POST',"https://mydbtest-67b94-default-rtdb.firebaseio.com/.json")
    XHRConn.send(JSON.stringify(userObj))

}

function getTableData() {
    XHRConn1.open('GET',"https://mydbtest-67b94-default-rtdb.firebaseio.com/.json")
    XHRConn1.send()
}

function viewUserData () {

}

function updateUserData() {
    XHRConn.open('PUT',`https://mydbtest-67b94-default-rtdb.firebaseio.com/${userKEY}.json`)
    XHRConn.send(JSON.stringify(userObj))
}

function eraseUser() {
    XHRConn.open('DELETE',`https://mydbtest-67b94-default-rtdb.firebaseio.com/${userKEY}.json`)
    XHRConn.send(JSON.stringify(userObj))
}

// Here are the general function to preload FORM before any Action
// ------------------------------------------------------------------------

function preLoadUserData(datakey, actionValue) {

    //alert("Este es la llave del usuario que quieres modificar: " + datakey)

    console.log("Readiness before update")
    console.table(JSONResponse1[datakey])

    userKEY = datakey
    userAction = actionValue

    document.getElementById("validationTooltip01").value = JSONResponse1[datakey].username
    document.getElementById("validationTooltip02").value = JSONResponse1[datakey].lastname
    document.getElementById("validationTooltip03").value = JSONResponse1[datakey].age
    document.getElementById("validationTooltip04").value = JSONResponse1[datakey].position

}


getTableData()
tablePrint()