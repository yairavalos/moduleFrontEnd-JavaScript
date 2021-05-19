/* 

imprimir una tabla en la cual de:

1. Un Array <---
2. Un Objeto

se vacien dichos datos

cols: id, name

*/

let koders = ['antonio', 'victor', 'rose', 'jorge']

let table = document.querySelector(".table")
let strHTML = ""

console.log(table)

koders.forEach ((item,index) => {

    strHTML += `
    <tr>
        <td>${index + 1}</td>
        <td>${item}</td>
    </tr>
`

})

table.innerHTML = `<thead class="mytable-head">
<tr>
  <th scope="col">ID</th>
  <th scope="col">Name</th>
</tr>
</thead>
<tbody class="mytable-body">
`
+ strHTML 
+ `</tbody>`

console.log(table)




