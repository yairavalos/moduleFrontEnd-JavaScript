$(document).ready( () => {
    console.log("Our Document by JQuery it´s Ready")

    $('.content').append(`p`)
    $('.content p').html("Hola Koder")

    $('.lists ul').append(`
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    `)

    $('.lists ol').prepend(`
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    `)


})

