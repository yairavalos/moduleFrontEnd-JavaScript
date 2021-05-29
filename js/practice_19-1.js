// ------------------------------------------------------------------------
//
// -----> Implementing JQuery <-----
// do the same stuff but with JQuery
// 
// ------------------------------------------------------------------------
// 1 Crear la pagina de actualizar cualquier usuario
// 2. Crear la pantala del listado
// 2.1. Por cada koder crear un boton de eliminar
// 2.2. Por cada koder, crear una pagina de interior

// First rule of JQuery 

$("document").ready( ()=> {

    // Put everything here before to start
    
       // Form Event Handling
       // ------------------------------------------------------------------------
   
    $("#myBtn").click(eventBtn => {
   
        eventBtn.preventDefault()
   
        userObj.username = $("#validationTooltip01").val()
        userObj.lastname = $("#validationTooltip02").val()
        userObj.age = $("#validationTooltip03").val()
        userObj.position = $("#validationTooltip04").val()
   
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
                updateUserData()
                userAction = 0
            break
            case 3:
                eraseUser()
                userAction = 0
            break
            default:
        }
   
        $("#validationTooltip01").val("")
        $("#validationTooltip02").val("")
        $("#validationTooltip03").val("")
        $("#validationTooltip04").val("")
   
    })
    

    // Form Event Handling
    // ------------------------------------------------------------------------
                  
    $(".table .table-body").on("click",(eventObj1 => {
        delegatedEvent = eventObj1   
        userAction = parseInt(eventObj1.target.dataset.myaction)
        userKEY = eventObj1.target.dataset.myhash

        console.log(`%c This is the delegated event: ${eventObj1.type}`, "color:red;")
        console.log(`%c This is what you were looking for: ${eventObj1.target.dataset.myhash}`, "color:green;")
        console.log(`%c And wants to perform this action: ${eventObj1.target.dataset.myaction}`, "color:green;")
    }))
   
})
  
    // Table Data requested and retrieved from Firebase 
    // ------------------------------------------------------------------------

    function getTableData() {
    
        $.get("https://mydbtest-67b94-default-rtdb.firebaseio.com/.json", (myJSon) => {

            JSONResponse1 = myJSon
            tablePrint()

        })

    }
   
    // Table Data Printing and Data Update according to Server Response:
    // ------------------------------------------------------------------------
   
    let delegatedEvent
    let JSONResponseArray1
   
    function tablePrint () {
   
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
            tableBodyStr += `<td><a href="#top" class="btn btn-success" data-myHash="${jsonKey[0]}" data-myAction="1">View</a></td>`
            tableBodyStr += `<td><a href="#top" class="btn btn-primary" data-myHash="${jsonKey[0]}" data-myAction="2" onclick=preLoadUserData1("${jsonKey[0]}",2)>Update</a></td>`
            tableBodyStr += `<td><a href="#top" class="btn btn-danger" data-myHash="${jsonKey[0]}" data-myAction="3" onclick=preLoadUserData1("${jsonKey[0]}",3)>Erase</a></td>`
            tableBodyStr += `</tr>`  
              
        })
   
        $(".table .table-body").html(tableBodyStr)

    }
   
  
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

    // Here are the general function to preload FORM before any Action
    // ------------------------------------------------------------------------
       
    function preLoadUserData1(datakey, actionValue) {
      
        console.log("Readiness before update")
        console.table(JSONResponse1[datakey])

        userKEY = datakey
        userAction = actionValue

        $("#validationTooltip01").val(JSONResponse1[datakey].username)
        $("#validationTooltip02").val(JSONResponse1[datakey].lastname)
        $("#validationTooltip03").val(JSONResponse1[datakey].age)
        $("#validationTooltip04").val(JSONResponse1[datakey].position)

    }
   
    // Here are the action buttons function from printed table & Top Form
    // ------------------------------------------------------------------------
   
    let JSONResponse
    let JSONResponse1
    
    function newUserData () {
   
        $.ajax({
            url:"https://mydbtest-67b94-default-rtdb.firebaseio.com/.json",
            data:JSON.stringify(userObj),
            dataType:"json",
            method:"POST",
            success: (myResponse)=>{
                console.log(myResponse)
                getTableData()
                tablePrint()
            },
            error: (eResponse)=> {console.log(eResponse)},
            complete: (myResponse)=>{console.log(myResponse)}
        })
   
    }
      
    function viewUserData () {
   
    }
   
    function updateUserData() {
   
        $.ajax({
            url:`https://mydbtest-67b94-default-rtdb.firebaseio.com/${userKEY}/.json`,
            data:JSON.stringify(userObj),
            dataType:"json",
            method:"PUT",
            success: (myResponse)=>{
                console.log(myResponse)
                getTableData()
                tablePrint()
            },
            error: (eResponse)=> {console.log(eResponse)},
            complete: (myResponse)=>{console.log(myResponse)}
        })
   
    }
   
    function eraseUser() {
   
        $.ajax({
            url:`https://mydbtest-67b94-default-rtdb.firebaseio.com/${userKEY}/.json`,
            data:JSON.stringify(userObj),
            dataType:"json",
            method:"DELETE",
            success: (myResponse)=>{
                console.log(myResponse)
                getTableData()
                tablePrint()
            },
            error: (eResponse)=> {console.log(eResponse)},
            complete: (myResponse)=>{console.log(myResponse)}
        })
   
    }
     
             
    // Standard Transactions Function to get any request in just one function
    // ------------------------------------------------------------------------

    function DBTransactions(methodStr,selectorStr) {
        
        $.ajax({
            url:`https://mydbtest-67b94-default-rtdb.firebaseio.com/${userKEY}/.json`,
            data:JSON.stringify(userObj),
            dataType:"json",
            method:methodStr,
            success: (myResponse)=>{
                console.log(myResponse)
                getTableData()
                tablePrint()
            },
            error: (eResponse)=> {console.log(eResponse)},
            complete: (myResponse)=>{console.log(myResponse)}
        })

    }

    // Here is the initial printing after webpage is loaded
    // ------------------------------------------------------------------------
   
    getTableData()
   
    // Missings:
    // ----------------------------------
    /*
        - floating 
        - query params on windows location
        - just one transactional function
        - with async and try / catch
        - event delegation from table-body

    */

        