/*
Hacer un ejercicio donde actualices algunos de los datos en la base de datos
de firefox de google
*/


let objNewKoder = {
    name : 'Victor Yair',
    lastname : 'Avalos Morales'
}

const request = new XMLHttpRequest()

request.open('PATCH','https://python2g-default-rtdb.firebaseio.com/koders/-MaWLbxeX4oRZtY5oSWR.json')
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
