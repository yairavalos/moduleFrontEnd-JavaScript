/*

    Tema de Ajax con JQuery

     $.get('https://python2g-default-rtdb.firebaseio.com/koders.json', (response) => {
        printKoders(response)  
    })

    ------------------------------------------------------------------------


    Código de Ejemplo por parte de Jorge C.

    $(document).ready(function(){
    console.log('ready')

    $('#btn__create--koder').click(function(){
        // sentencias
        console.log('click en crear')
        let inputname = $('#name').val()
        let inputlastname = $('#lastname').val()
        let inputage = parseInt($('#age').val())
        let inputposition = $('#position').val()

        if(inputname == '' || inputlastname == '' || inputage == '' || inputposition == ''){
            console.log('Faltan datos obligatorios')
            return
        }

        let newUserObject = {
            name: inputname,
            lastname: inputlastname,
            age: inputage,
            position: inputposition
        }

        fetch('https://python2g-default-rtdb.firebaseio.com/koders/.json', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserObject)
        })
        .then((res) => {
            return res.json()
        })
        .then((response) => {
            console.log(response)
            window.location.pathname = '/'
        })
        .catch(function(error) {
            console.log(error.message);
        });

    })
})

*/
