// testings para fetch

let JSONTesting1

fetch("https://mydbtest-67b94-default-rtdb.firebaseio.com/.json")
.then( promesa => {

    console.log(promesa)
    return promesa.json() //variables o funciones que nos devuelven una promesa
    //return JSON.parse(response) --> No funciona
})
.then(response2 => {

    console.log(response2)
    JSONTesting1 = response2

})

