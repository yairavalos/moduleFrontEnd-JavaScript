/**
 * 2:
 * Pedir al usuario que indique como esta su día
 * Opciones: Nublado, Soleado, Lluvioso, Nevado
 * Si escribe alguna de ellas, colocar un mensaje 
 * P.ej: soleado -> oh!, que buen clima para estar en la playa
 * P.ej: nevado -> oh!, que buen clima para estar en casa
 *  etc...
 * Sino
 * Pedir por prompt, Que describa que le gustaria hacer en su día
 */


let weatherStatus = ["nublado", "soleado", "lluvioso", "nevado"];
let userAction = "";
let userWeather = "";

// Sigues sin aprender burro, pon los parentesis al final del método

userWeather = window.prompt("Escribe si tu día es nublado / soleado / lluvioso / nevado").toLowerCase().trim();
console.log(userWeather);

switch(userWeather){
    case weatherStatus[0]:
        console.log("Hoy es un día: " + weatherStatus[0]);
        console.log("Hoy es un día para estar preparado con el paraguas y tomarse un cafesito");
    break;
    case weatherStatus[1]:
        console.log("Hoy es un día: " + weatherStatus[1]);
        console.log("Hoy es un día para salir a pasear con los amigos");
    break;
    case weatherStatus[2]:
        console.log("Hoy es un día: " + weatherStatus[2]);
        console.log("Hoy es un día para quedarse en casa a ver pelis con un chocolatito");
    break;
    case weatherStatus[3]:
        console.log("Hoy es un día: " + weatherStatus[3]);
        console.log("Hoy es un día para quedarse en casa con la familia");
    break;
    default:
        console.log("Mejor di que quieres hacer");
        userAction = window.prompt("Que se te antoja hacer hoy ??? ").toUpperCase();
        console.log("Pasetala bien haciendo " + userAction);
}
