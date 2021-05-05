
let scoreValue;

scoreValue = parseInt(window.prompt("Por favor ingresa tu calificación"));

switch (scoreValue) {
    case 100:
        console.log("Tu calificación es A+");
    break;
    case 90:
        console.log("Tu calificación es A");
    break;
    case 80:
        console.log("Tu calificación es B");
    break;
    case 70:
        console.log("Tu calificación es C");
    break;
    case 60:
        console.log("Tu calificación es D");
    break;
    case 50:
        console.log("Tu calificación es E");
    break;
    default:
        console.log("Tu calificación es F");
}