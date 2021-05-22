/*
Hacer una practica en la cual
al hacer click en un link de navegación
nos mande un card con la configuración
puesta en un array
*/


let kodersObjArray = [
    {
        id: 1,
        bio: 'lorem lorem lorem lorem',
        git: '/dered-dev',
        imgkoder:'https://picsum.photos/id/0/200/300'
    },
    {
        id: 2,
        bio: 'lorem lorem lorem lorem',
        git: '/rose-dev',
        imgkoder:'https://picsum.photos/id/1/200/300'
    },
    {
        id: 3,
        bio: 'lorem lorem lorem lorem',
        git: '/victor-dev',
        imgkoder:'https://picsum.photos/id/10/200/300'
    },
    {
        id: 4,
        bio: 'lorem lorem lorem lorem',
        git: '/osmar-dev',
        imgkoder:'https://picsum.photos/id/100/200/300'
    },
    {
        id: 5,
        bio: 'lorem lorem lorem lorem',
        git: '/ferdi-dev',
        imgkoder:'https://picsum.photos/id/1001/200/300'
    }

]

// me hizo falta hacer la validación del pathname

let koderIDStr = window.location.search
let koderID = parseInt(koderIDStr.slice(koderIDStr.indexOf("=")+1))

//Aquí estoy accediendo a la posición 0 del array, porque es lo que me regresa
let koderObj = kodersObjArray.filter(item=> item.id == koderID)[0]

document.querySelector(".card .card-title").innerHTML = koderObj.id
document.querySelector(".card .card-text").innerHTML = koderObj.bio
document.querySelector(".card .btn").innerHTML = koderObj.git
document.querySelector(".card .btn").setAttribute('href',"https://github.com" + koderObj.git) 
document.querySelector(".card .btn").setAttribute('target',"_blank")
document.querySelector(".card .card-img-top").setAttribute('src',koderObj.imgkoder) 

