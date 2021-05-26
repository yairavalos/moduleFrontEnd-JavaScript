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
        tableBodyStr += `<td><a href="#top" class="btn btn-danger" onclick='preLoadUserData("${jsonKey[0]}",3)'>Erase</a></td>`
        tableBodyStr += `</tr>`  
    })

    tableBody.innerHTML = tableBodyStr

    console.log("Saliendo de table Print")    
}

// Here are the action buttons function from printed table & Top Form
// ------------------------------------------------------------------------

let JSONResponse
let JSONResponse1

function newUserData () {

    //XHRConn.open('POST',"https://mydbtest-67b94-default-rtdb.firebaseio.com/.json")
    //XHRConn.send(JSON.stringify(userObj))

    fetch("https://mydbtest-67b94-default-rtdb.firebaseio.com/.json",{
        method: "POST",
        body: JSON.stringify(userObj)
    })
    .then( promesa => {

        console.log(promesa)
        return promesa.json() 

    })
    .then(response2 => {

        console.log(response2)
        JSONResponse1 = response2

        getTableData()
        tablePrint()

    })
}

function getTableData() {
    //XHRConn1.open('GET',"https://mydbtest-67b94-default-rtdb.firebaseio.com/.json")
    //XHRConn1.send()

    fetch("https://mydbtest-67b94-default-rtdb.firebaseio.com/.json")
    .then( promesa => {

        console.log(promesa)
        return promesa.json() 

    })
    .then(response2 => {

        console.log(response2)
        JSONResponse1 = response2
        
        tablePrint()

    })

}

function viewUserData () {

}

function updateUserData() {
    //XHRConn.open('PUT',`https://mydbtest-67b94-default-rtdb.firebaseio.com/${userKEY}.json`)
    //XHRConn.send(JSON.stringify(userObj))

    fetch(`https://mydbtest-67b94-default-rtdb.firebaseio.com/${userKEY}/.json`,{
        method: "PUT",
        body: JSON.stringify(userObj)
    })
    .then( promesa => {

        console.log(promesa)
        return promesa.json() 

    })
    .then(response2 => {

        console.log(response2)
        JSONResponse1 = response2
        
        getTableData()
        tablePrint()

    })

}

function eraseUser() {
    //XHRConn.open('DELETE',`https://mydbtest-67b94-default-rtdb.firebaseio.com/${userKEY}.json`)
    //XHRConn.send(JSON.stringify(userObj))

    fetch(`https://mydbtest-67b94-default-rtdb.firebaseio.com/${userKEY}/.json`,{
        method: "DELETE",
        body: JSON.stringify(userObj)
    })
    .then( promesa => {

        console.log(promesa)
        return promesa.json() 

    })
    .then(response2 => {

        console.log(response2)
        JSONResponse1 = response2
        
        getTableData()
        tablePrint()

    })

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

// Here is the initial printing after webpage is loaded
// ------------------------------------------------------------------------

getTableData()


