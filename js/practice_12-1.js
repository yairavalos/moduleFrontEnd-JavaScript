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

let table1 = document.querySelector("#myTable1 .mytable-body")
let strTable1 = ""


kodersArray.forEach( item => {

    strTable1 += "<tr id="+item.id+"><td>"+item.id+"</td><td>"+item.name+"</td>"
    strTable1 += "<td><button id="+item.id+" onclick='alert("+item.id+")'>Inscribir</button></td></tr>"
})

table1.innerHTML = strTable1


