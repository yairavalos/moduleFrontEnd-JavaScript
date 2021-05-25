/*
Hacer un ejercicio donde te des de alta en la base de datos
de firefox de google
*/

let objNewKoder = {
    name : 'Yair',
    lastname : 'Avalos',
    age: 39,
    position : 'koder'
}
const request = new XMLHttpRequest()
request.open('POST','https://python2g-default-rtdb.firebaseio.com/koders/.json')
request.addEventListener('readystatechange', () => {
    if(request.readyState !== 4) {
        return 
    } else {
        if(request.status >= 200 && request.status <= 299){
            const response  = request
            const objectResponse = JSON.parse(response.responseText)
            console.log(objectResponse)
        } else {
            console.log('No se pudo ejecutar')
        }
    } 
})
request.send(
    JSON.stringify(objNewKoder)
)

