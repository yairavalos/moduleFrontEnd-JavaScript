console.log("Convertidor de Celsius a Fahrenheit");

let cValue;
let fValue;

cValue = parseFloat(window.prompt("Por favor ingresa el valor en Celsius a Convertir"));

fValue = ((cValue*9)/5) + 32;

console.info("El valor a Fahrenheit es de: " + fValue);
alert("El valor en Fahrenheits es: " + fValue);
