// 1:
// Pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes y su nombre
// p.ej.
// --> El mes 5 (Mayo) tiene 31 días

var d = new Date();
console.log(d);

let monthNum = 0;
let monthArr = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

console.log(monthArr);

monthNum =  parseInt(window.prompt("Por favor ingresa un número del 1 al 12 de acuerdo al mes que quieres saber"));

console.log("Month number is: " + monthNum);
console.log("El numero de mes " + monthNum + " es: " + monthArr[monthNum-1]);

var dayNum = 27;
d.setMonth(monthNum-1);

// Errores a evitar, no omitir parentesis en los métodos
// Eso hace que no se ejecuten, o se ejecuten de manera incorrecta

while(d.getMonth() == (monthNum-1)){
    dayNum++;
    console.log(dayNum)
    d.setDate(dayNum);
    console.log("Month: " + d.getMonth());
}

console.log("El numero de mes " + monthNum + " es: " + monthArr[monthNum-1] + " y tiene: " + (dayNum - 1) + " dias");

