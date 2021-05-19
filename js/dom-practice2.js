/* 

imprimir una tabla en la cual de:

1. Un Array
2. Un Objeto <---

se vacien dichos datos

cols: id, name, lastname, age, github

*/

let kodersObject  = [
    {
        name: 'jorge',
        lastName: 'camarillo',
        age: 30,
        github:'@dered-dev'
    },
    {
        name:'luis',
        lastName:'gonzales',
        age: 31,
        github:'@glez-dev'
    },
    {
        name:'sergio',
        lastName:'paz',
        age: 27,
        github:'@paz-develop'
    },
    {
        name:'lola',
        lastName:'beltran',
        age: 27,
        github:'@dev-beltran'
    },
    {
        name:'paquita',
        lastName:'la del barrio',
        age: 27,
        github:'@tirando-barrio'
    }
]

let table = document.querySelector(".table")
let strHTML = ""

kodersObject.forEach((item,index) => {

    strHTML += `<tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.lastName}</td>
                    <td>${item.age}</td>
                    <td>${item.github}</td>
                </tr>`

})

table.innerHTML = `<thead class="mytable-head">
<tr>
  <th scope="col">ID</th>
  <th scope="col">Name</th>
  <th scope="col">Last Name</th>
  <th scope="col">Age</th>
  <th scope="col">Git-Hub</th>
</tr>
</thead>
<tbody class="mytable-body">
`
+ strHTML 
+ `</tbody>`

console.log(table)