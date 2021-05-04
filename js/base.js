console.log("Hello World");

/*
	Ejercicio 1:
	Pedir 2 variables por prompt
	Si a > b dividir a entre b
	Si a < b dividir sumar a más b
	si a == b multiplicar ambos numeros
	Imprimir el resultado en consola
*/

let inputA;
let inputB;
let result;

inputA = window.prompt("Provide Value A");
inputB = window.prompt("Provide value B");

console.log("This A:" + inputA);
console.log("This B:" + inputB);

result = operations(inputA,inputB);

console.log("This is the result:" + result);

function operations(a,b){

    let myValueA;
    let myValueB;
    let myResult;

    myValueA = parseInt(a);
    myValueB = parseInt(b);

    if (myValueA > myValueB){
        myResult = myValueA/myValueB;
    }

    if (myValueA < myValueB){
        myResult = myValueA + myValueB;
    }

    if (myValueA == myValueB){
        myResult = myValueA * myValueB;
    }

    return myResult;

}
