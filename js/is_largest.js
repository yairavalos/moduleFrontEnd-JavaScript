let userSet = [0,0,0];

userSet.forEach(getUserData);

function getUserData (item, index){
    userSet[index] = parseInt(window.prompt("Por favor ingresa el Numero: " + (index + 1)));
    console.log(userSet[index]);
}

if (userSet[0] > userSet[1] && userSet[0] > userSet[2]) {
    console.log("El número mayor es: " + userSet[0]);
} else if (userSet[1] > userSet[0] && userSet[1] > userSet[2]) {
    console.log("El número mayor es: " + userSet[1]);
} else if (userSet[2] > userSet[0] && userSet[2] > userSet[1]) {
    console.log("El número mayor es: " + userSet[2]);
} else {
    console.log("Probablemente ningún número es mayor");
}

