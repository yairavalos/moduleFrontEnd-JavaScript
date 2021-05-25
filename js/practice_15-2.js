/*
Hacer un ejercicio donde te des de baja en la base de datos
de firefox de google
*/


const requestDelete = new XMLHttpRequest()
let  idKoder = '-MaWC7TH9nOJUY5LHzQs'
requestDelete.open('DELETE',`https://python2g-default-rtdb.firebaseio.com/koders/${idKoder}.json`)
requestDelete.addEventListener('readystatechange', () => {
    if(requestDelete.readyState !== 4) {
        return 
    } else {
        if(requestDelete.status >= 200 && requestDelete.status <= 299){
            const response  = requestDelete
            const objectResponse = JSON.parse(response.responseText)
            console.log(objectResponse)
        } else {
            console.log('No se pudo ejecutar')
        }
    } 
})
requestDelete.send()





