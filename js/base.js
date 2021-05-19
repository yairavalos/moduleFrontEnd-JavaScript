console.log["Hello World"]

let lista = document.querySelector('.lista')
let koders = ['antonio', 'victor', 'rose', 'jorge']
let listKoders = ''
koders.forEach( (namekoder, index) => {
    listKoders += `
        <li 
            id="koder${index + 1}"
            key='koder_${index}'
            class='item_koder'
        >
            ${namekoder}
        </li>
    `
})

lista.innerHTML = listKoders
